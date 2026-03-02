'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'
import useFancybox from '@/hooks/useFancyBox';

import Link from 'next/link';
import Logo from "./Logo";
import Menu from "@/components/other/menu";
import Search from "./Search";
import Cart from "./Cart";
import Account from "./Account";

export default function Header() {
    const pathname = usePathname()
    const isHome = pathname === '/';
    const [isSticky, setIsSticky] = useState(false);

    const [fancyboxRef] = useFancybox({});

    useEffect(() => {
        const scrollTop = isHome ? 800 : 400;
        const onScroll = () => {
            setIsSticky(window.scrollY > scrollTop);
        };
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [isHome]);
    

    return (
        <>
        <div ref={fancyboxRef}>
            <div className={`global-header-container py-5 ${isSticky ? 'is-fixed' : ''} ${isHome && !isSticky ? 'header-homepage' : ''}`}>
                <div className="container flex items-center justify-between gap-5 relative">
                    <div className="header-left-group w-[205px]">
                        <Logo />
                    </div>

                    <div className="header-middle-group w-[583px] flex items-center justify-between gap-2">
                        <Menu />

                        <Search />
                    </div>

                    <div className="header-right-group relative flex items-center justify-between gap-4 w-[420px] text-white leading-[18px] font-500">
                        <Link href="#fancybox-headphone"
                            data-fancybox="fancybox-hotline"                            
                            className="flex items-center gap-2"
                        >
                            <i className="icons icon-headphone"></i>
                            <span className="text"> Hotline<br/> Mua Hàng </span>
                        </Link>

                        <Link href="/he-thong-cua-hang" className="flex items-center gap-2">
                            <i className="icons icon-showroom"></i>
                            <span className="text"> Hệ thống<br/> Showroom </span>
                        </Link>

                        <Cart />
                        
                        <Account />
                    </div>
                </div>
            </div>

            <div className="bg-white shadow-[0px_4px_20px_0px_#004AA11A] text-16 font-500 mb-5 relative">
                <div className="container flex items-center justify-between leading-[20px] py-[17px]">
                    <Link href="/buildpc" className="flex items-center gap-2 hover:text-[#0678DB]">
                        <i className="icons icon-buildpc"></i>
                        <span> Xây Dựng Cấu Hình </span>
                    </Link>

                    <Link href="/designer-tool" className="flex items-center gap-2 hover:text-[#0678DB]">
                        <i className="icons icon-tool"></i>
                        <span> PC Đồ Họa Tool </span>
                    </Link>

                    <Link href="/tin-khuyen-mai" className="flex items-center gap-2 hover:text-[#0678DB]">
                        <i className="icons icon-promotion"></i>
                        <span> Chương Trình Khuyến Mãi </span>
                    </Link>

                    <Link href="/tin-tuc" className="flex items-center gap-2 hover:text-[#0678DB]">
                        <i className="icons icon-news"></i>
                        <span> Tin Tức Công Nghệ </span>
                    </Link>

                    <Link href="/chinh-sach-bao-hanh" className="flex items-center gap-2 hover:text-[#0678DB]">
                        <i className="icons icon-warranty"></i>
                        <span> Bảo Hành Tận Nhà </span>
                    </Link>

                    <Link href="#fancybox-feedback"
                        data-fancybox="fancybox-feedback"
                        className="flex items-center gap-2 hover:text-[#0678DB]"
                    >
                        <i className="icons icon-feedback"></i>
                        <span> Feedback </span>
                    </Link>
                </div>
            </div>            
        </div>
        </>
    )
}
