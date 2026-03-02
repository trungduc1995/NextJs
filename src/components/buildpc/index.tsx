'use client';
import Link from "next/link";
import useFancybox from '@/hooks/useFancyBox';
import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import { useState, useEffect, useMemo } from "react";
import { buildPcData } from "@/data/buildpc";

import Content from "./Content";
import BuildPCCategories from "./categories";
import BuildPcPopups from "./Popups";
import Promotion from "./Promotion";
import Buttons from "./Buttons";


export default function BuildPc() {
    
    const [fancyboxRef] = useFancybox({});
    
    const [activeTab, setActiveTab] = useState(1);
    const [buildData, setBuildData] = useState<any[]>([]);

    const getStorageKey = (tab: number) => `buildpc_tab_${tab}`;

    // Load data khi đổi tab
    useEffect(() => {
        const oldData = localStorage.getItem(getStorageKey(activeTab));
        setBuildData(oldData ? JSON.parse(oldData) : []);
    }, [activeTab]);

    
    const handleTabChange = (tabIndex: number) => {
        setActiveTab(tabIndex);
    };

    const handleRebuild = () => {
        const storageKey = getStorageKey(activeTab);

        localStorage.removeItem(storageKey);

        setBuildData([]);

        Fancybox.close();
    };

    const totalPrice = useMemo(() => {
        return buildData.reduce((total, item) => {
            const product = item?.info?.[0];
            if (!product) return total;

            const price = Number(product.price) || 0;
            const quantity = Number(product.quantity) || 1;

            return total + (price * quantity);
        }, 0);
    }, [buildData]);

    return (
        <>
            <div ref={fancyboxRef}>
                <div className="global-breadcrumb">
                    <div className="container">
                        <ol itemScope itemType="http://schema.org/BreadcrumbList" className="ul clearfix">
                            <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                                <Link href="/" itemProp="item" className="nopad-l">
                                    <span itemProp="name">Trang chủ</span>
                                </Link>
                                <meta itemProp="position" content="1" />
                            </li>
                            <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                                <Link href="https://hoanghapc.vn/buildpc" itemProp="item" className="nopad-l">
                                    <span itemProp="name"> Xây dựng máy tính - tạo máy tính </span>
                                </Link>
                                <meta itemProp="position" content="2" />
                            </li>
                        </ol>
                    </div>
                </div>

                <div className="buildpc-page">
                    <div className="container">
                        <h1 className="mb-6 font-600 text-[#004BA4] text-20 leading-6 lg:leading-10 lg:text-[32px]">
                            Xây Dựng Cấu Hình Máy Tính
                        </h1>

                        <div className="overflow-hidden relative mb-6">
                            <Link href="">
                                <img src="https://hoanghapccdn.com/media/banner/23_02-a0bcc210735ecfa67eccf8a434ab61b1.jpg"
                                    alt="Banner"
                                    width={100}
                                    height={100}
                                    className="block w-full h-full lazy"
                                />
                            </Link>
                        </div>

                        <div className="btn-buildpc-group mb-6">
                            {
                                [1, 2, 3, 4, 5].map((item) => (
                                    <button
                                        key={item}
                                        type="button"
                                        className={item === activeTab ? "active" : ""}
                                        onClick={() => handleTabChange(item)}
                                    >
                                        Cấu hình {item}
                                    </button>
                                ))
                            }
                        </div>

                        <div className="buildpc-detail-group gap-4">
                            <Promotion total={totalPrice} />

                            <Link
                                href="#popup-rebuild_config"
                                data-fancybox=""
                                className="flex items-center gap-3 bg-btn text-white rounded-[30px] leading-10 text-16 font-500 px-6"
                            >
                                LÀM MỚI <i className="bx bx-rotate-ccw" />
                            </Link>
                        </div>

                        <BuildPCCategories
                            categories={ buildPcData.category_config }
                            activeTab={ activeTab }
                            buildData={ buildData }
                            setBuildData={ setBuildData }
                        />

                        <div className="flex flex-wrap items-center justify-between text-18 font-500 leading-6">
                            <Promotion total={totalPrice} />

                            <Buttons />
                        </div>

                    </div>
                </div>

                <Content />

                <BuildPcPopups 
                    onRebuild={handleRebuild} 
                />
            </div>
        </>
    )
}