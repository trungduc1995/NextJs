'use client';
import parse from "html-react-parser";
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from "next/link";
import FAQ from "./Faq";
import DesignerItem from "./DesignerItem";
import { usePagination } from "@/hooks/usePagination";
import ButtonShowMore from "@/components/shared/ProductShowMore";

export default function Detail({ slug }: any) {
    const deviceTitle = useSearchParams().get('device') == 'laptop' ? 'Laptop' : 'PC';

    const {
        attribute_list,
        product_list
    } = slug

    const ignoreKeys = ["loại máy", "loại máy tính"];

    const filteredAttribute = attribute_list.filter(
        (item: any) =>
            !ignoreKeys.map((key: string) =>
                key.toLowerCase()).includes(item.name.toLowerCase())
    );

    const [attribute, setAttribute] = useState(0)
    const result = product_list.filter((item: any) =>
        attribute === 0 || item.attribute?.includes(attribute)
    );

    const {
        currentData,
        hasMore,
        loadMore,
        total
    } = usePagination(result, 24);


    return (
        <>
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
                            <Link href="/designer-tool" itemProp="item" className="nopad-l">
                                <span itemProp="name"> PC Đồ Họa Tool </span>
                            </Link>
                            <meta itemProp="position" content="2" />
                        </li>

                        <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                            <Link href="" itemProp="item" className="nopad-l">
                                <span itemProp="name"> {slug.item_info.name} </span>
                            </Link>
                            <meta itemProp="position" content="3" />
                        </li>
                    </ol>
                </div>
            </div>

            <div className="container">
                <h1 className="text-center text-[#004BA4] font-600 text-24 leading-[30px] lg:text-[32px] lg:leading-10 mb-4">
                    {deviceTitle} dành cho {slug.item_info.name}
                </h1>

                {filteredAttribute.length > 0 &&
                    <div className="text-center tool-btn-list mb-4 lg:mb-6">
                        <div className="inline-flex items-center justify-center p-1 border border-[#DFE4EC] bg-[#F5F8FF] overflow-auto whitespace-nowrap no-scroll gap-1 leading-9 font-500 text-[#5D6776] rounded-[8px]">
                            {filteredAttribute.map((item: any) =>
                                item.list.map((list: any) =>
                                    <button className={`js-attribute-btn px-9
                                                ${list.id === attribute ? 'current' : ""}
                                            `}
                                        key={list.id}
                                        onClick={() => setAttribute(list.id)}
                                    >
                                        {list.name}
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                }

                <div className="mb-8 lg:mb-12">
                    {currentData.length == 0
                        ? parse(` <div class="text-center py-20">
                                    <p class="text-20 font-700">Sản phẩm đang được cập nhật ...!</p>
                                    <a href="/" class="color-main text-18"> Quay lại trang chủ </a>
                                </div> 
                        `) : (
                            <div className="tool-product-holder grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-4 lg:gap-x-4 lg:gap-y-6" id="js-product-holder">
                                {currentData.map((item: any) =>
                                    <DesignerItem
                                        key={item.id}
                                        item={item}
                                    />
                                )}
                            </div>
                        )
                    }

                    {hasMore &&
                        <ButtonShowMore
                            onClick={loadMore}
                            displayCount={currentData.length}
                            total={total}
                        />
                    }
                </div>
            </div>

            {slug.item_info.description &&
                <div className="designer-summary-container bg-white py-8 lg:py-12 px-3">
                    <div className="js-static-container static-container leading-[135%] m-auto max-w-[924px]">
                        <div className="js-static-content static-content text-16 leading-[22px] text-justify"> {slug.item_info.description} </div>

                        <div className="static-btn">
                            <button type="button" aria-label="Xem thêm" className="js-showmore-button">
                                Xem thêm <i className="bx bx-chevron-down"></i>
                            </button>

                            <button type="button" aria-label="Thu gọn" className="js-showless-button">
                                Thu gọn <i className="bx bx-chevron-up"></i>
                            </button>
                        </div>
                    </div>
                </div>
            }

            <div className="designer-faq-container bg-[#e8ecf6] lg:-mb-16">
                <div className="global-faq-container container py-8 lg:py-12 text-18 leading-6">
                    <div className="text-center mb-8">
                        <p className="text-[#004BA4] text-20 lg:text-[40px] leading-5 lg:leading-[48px] mb-2 font-600"> Các câu hỏi thường gặp </p>
                        <p className="max-w-[620px] m-auto text-16 leading-[21px] lg:text-[18px] lg:leading-6">
                            Nếu quý khách còn có bất kì câu hỏi nào cần hỗ trợ, vui lòng liên hệ với chúng tôi qua các số hotline để được tư vấn và giải đáp nhanh chóng nhất.
                        </p>
                    </div>

                    <FAQ />

                </div>
            </div>
        </>
    )
}