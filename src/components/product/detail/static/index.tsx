'use client';

import Link from "next/link"
import FancyboxWrapper from "@/components/shared/FancyboxWrapper"

export default function Static() {
    return (
        <FancyboxWrapper>
            <div className="group relative border border-[#D6DAE1] leading-[38px] rounded-[8px] pl-3 pr-2 mb-3">
                <p className="m-0 flex items-center justify-between cursor-pointer">
                    <span> Xem chi nhánh còn hàng </span>
                    <i className="bx bx-chevron-down text-[#A0A5AC] text-18 transition-all group-hover:rotate-[-180deg]" />
                </p>
                <div className="absolute shadow border bg-white opacity-0 z-[-1] right-0 top-[100%] transition group-hover:opacity-100 group-hover:z-[5] leading-[22px] p-1 border border-[#D6DAE1] rounded-[12px] w-full">
                    <div className="my-3">
                        <b className="block underline px-2 font-600 mb-2">
                            Showroom Miền Bắc:
                        </b>
                        <Link
                            href="https://goo.gl/maps/56ARHjWKoVhpWBCF6"
                            target="_blank"
                            rel="nofollow"
                            className="flex gap-1 p-[6px_8px] rounded-[8px] mb-[1px] hover:bg-[#F2F2F2]"
                        >
                            <i className="icons icon-location" />
                            <span> 41 Khúc Thừa Dụ, Phường Cầu Giấy, Hà Nội </span>
                        </Link>
                        <Link
                            href="https://g.page/hoanghapc?share"
                            target="_blank"
                            rel="nofollow"
                            className="flex gap-1 p-[6px_8px] rounded-[8px] mb-[1px] hover:bg-[#F2F2F2]"
                        >
                            <i className="icons icon-location" />
                            <span> 94E-94F Đường Láng, Phường Đống Đa, Hà Nội </span>
                        </Link>
                    </div>
                    <div className="my-3">
                        <b className="block underline px-2 font-600 mb-2">
                            Showroom Miền Trung:
                        </b>
                        <Link
                            href="https://goo.gl/maps/1HQrD6mdf4VMYccs6"
                            target="_blank"
                            rel="nofollow"
                            className="flex gap-1 p-[6px_8px] rounded-[8px] mb-[1px] hover:bg-[#F2F2F2]"
                        >
                            <i className="icons icon-location" />
                            <span>72 Lê Lợi, Thành Vinh, Nghệ An </span>
                        </Link>
                    </div>
                    <div className="my-3">
                        <b className="block underline px-2 font-600 mb-2">
                            Showroom Miền Nam:
                        </b>
                        <Link
                            href="https://g.page/hoanghapchcm?share"
                            target="_blank"
                            rel="nofollow"
                            className="flex gap-1 p-[6px_8px] rounded-[8px] mb-[1px] hover:bg-[#F2F2F2]"
                        >
                            <i className="icons icon-location" />
                            <span>

                                K8bis Bửu Long, Phường Hoà Hưng, Thành phố Hồ Chí Minh
                            </span>
                        </Link>
                    </div>
                    <i className="block red my-3 px-2">
                        Chú ý: Sản phẩm có thể điều chuyển kho theo yêu cầu của quý khách.
                    </i>
                </div>
            </div>

            {/* Yên Tâm Mua Sắm Tại HoangHaPC */}
            <div className="pd-static-group mb-3 rounded-[12px] bg-[linear-gradient(180.3deg,#259AFF_-18.56%,#114CDD_100.92%)] p-1 pt-2">
                <p className="group-title text-white leading-[21px] text-16 font-600 mb-2 text-center">
                    Yên Tâm Mua Sắm Tại HoangHaPC
                </p>

                <div className="pd-static-list bg-white p-[16px_8px] leading-[18px] font-500 rounded-[8px]">
                    <p className="last:mb-0 mb-2 item-circle">
                        Đội ngũ kỹ thuật tư vấn chuyên sâu
                    </p>

                    <p className="last:mb-0 mb-2 item-circle">
                        Thanh toán thuận tiện
                    </p>

                    <p className="last:mb-0 mb-2 item-circle">
                        Sản phẩm 100% chính hãng
                    </p>

                    <p className="last:mb-0 mb-2 item-circle">
                        Bảo hành 1 đổi 1 tại nơi sử dụng
                    </p>

                    <p className="last:mb-0 mb-2 item-circle">
                        Giá cạnh tranh nhất thị trường
                    </p>
                </div>
            </div>
            
            <div className="pd-static-group mb-3 rounded-[12px] bg-[linear-gradient(180.3deg,#259AFF_-18.56%,#114CDD_100.92%)] p-1 pt-2">
                <p className="group-title text-white leading-[21px] text-16 font-600 mb-2 text-center">
                    Liên Hệ Với Kinh Doanh Online
                </p>

                <div className="pd-static-list bg-white p-[16px_8px] leading-[18px] font-500 rounded-[8px]">
                    <div className="last:mb-0 mb-2 flex gap-2">
                        <i className="icons icon-phone" />
                        <p className="m-0">
                            Hotline Hà Nội:
                            <Link href="tel:0969123666" className="red font-500">
                                0969123666
                            </Link>
                        </p>
                    </div>

                    <div className="last:mb-0 mb-2 flex gap-2">
                        <i className="icons icon-phone" />
                        <p className="m-0">
                            Hotline Vinh, Nghệ An:
                            <Link href="tel:0988.163.666" className="red font-500">
                                0988.163.666
                            </Link>
                        </p>
                    </div>

                    <div className="last:mb-0 mb-2 flex gap-2">
                        <i className="icons icon-phone" />
                        <p className="m-0">
                            Hotline Hồ Chí Minh:
                            <Link href="tel:0968.123.666" className="red font-500">
                                0968.123.666
                            </Link>
                        </p>
                    </div>

                    <div className="last:mb-0 mb-2 flex gap-2">
                        <i className="icons icon-phone" />
                        <p className="m-0">
                            Hotline Bảo Hành:
                            <Link href="tel:1900.6100" className="red font-500">
                                1900.6100
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="border border-[#0678DB] rounded-[12px] px-3 py-4 gap-[6px] flex flex-wrap items-center">
                <a
                    href="https://hoanghapc.vn/media/lib/17-10-2022/qr-hoang-ha-pc-nhom.png"
                    data-fancybox="gallery"
                    className="w-[110px]"
                >
                    <img
                        src="https://hoanghapc.vn/media/lib/17-10-2022/qr-hoang-ha-pc-nhom.png"
                        alt="QR code"
                        width={110}
                        height={110}
                        className="block m-auto lazy"
                    />
                </a>
                <p className="m-0 font-500 w-[calc(100%-116px)]">

                    Tham gia Cộng đồng "Cẩm Nang Build PC - Đồ Họa, Render, Giả Lập" để
                    theo dõi các ưu đãi dành riêng cho thành viên
                </p>
            </div>
        </FancyboxWrapper>
    )
}