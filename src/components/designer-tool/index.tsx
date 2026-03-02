'use client';
import Link from "next/link";
import { useState, useMemo } from "react";
import { DesignerToolData } from "@/data/designer-tool"
import { convertToSlug } from "@/lib/utils";
import FAQ from "./Faq";

export default function DesignerTool() {
    
    const [keyword, setKeyword] = useState("");

    const filteredSoftware = useMemo(() => {
        const searchSlug = convertToSlug(keyword).toUpperCase();

        return DesignerToolData.item_list.filter((item: any) => {
            const textSlug = convertToSlug(item.name).toUpperCase();
            return textSlug.includes(searchSlug);
        });

    }, [keyword]);

    const [ device, setDevice ] = useState("desktop");

    return (
        <div style={{ 
            background : "#FFFFFF",
            marginTop : "-20px",
            paddingTop : "20px"
        }}>
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
                    </ol>
                </div>
            </div>

            <div className="!lg:mt-8 leading-[18px] lg:leading-[22px] lg:text-[16px]">
                <div className="container">
                    <div className="tool-search-container relative overflow-hidden rounded-[16px] bg-[linear-gradient(180deg,#EAF1FF_0%,#DAE7FF_100%)] p-[24px_16px] lg:p-10 text-center mb-4 lg:mb-8">
                        <h1 className="font-600 text-[#004BA4] lg:text-[32px] lg:leading-10 text-24 leading-[30px] mb-2 lg:mb-3"> PC đồ họa chuyên nghiệp </h1>

                        <p className="mb-6 lg:mb-8 mx-auto max-w-[714px]"> Công cụ Tìm kiếm PC Đồ Họa giúp bạn dễ dàng chọn lựa cấu hình phù hợp với nhu cầu thiết kế và sáng tạo. Hoàng Hà PC đã tuyển chọn những bộ PC hiệu năng cao, tối ưu hóa cho các phần mềm đồ họa như Photoshop, Illustrator, AutoCAD, 3ds Max, Blender, v.v.  Xem đề xuất hàng đầu từ Hoàng Hà PC hay so sánh các dòng PC chuyên dụng để tìm ra lựa chọn tốt nhất - Tất cả đều có trong công cụ của chúng tôi. </p>

                        <div className="relative m-auto flex flex-wrap gap-3 items-center justify-center">
                            <div className="w-full lg:w-[520px] flex flex-wrap items-center justify-between p-[6px] pl-5 bg-white rounded-[30px]">
                                <input
                                    type="text"                                    
                                    placeholder="Nhập phần mềm cần tìm"
                                    className="w-[calc(100%_-_36px)] pr-3 placeholder:!text-[#5F5F5F] placeholder:!text-[14px] h-9" 
                                    value={keyword}
                                    onChange={(e) => setKeyword(e.target.value)}
                                />

                                <button type="button" aria-label="button" className="bg-linear rounded-full w-9 h-9">
                                    <i className="block !w-full !h-full icons icon-search" />
                                </button>
                            </div>

                            <div className="tool-btn-list border grid w-auto border-[#DFE4EC] bg-[#F5F8FF] p-1 rounded-[8px] text-center grid-cols-2 font-500 text-[#5D6776] gap-1">
                                <button 
                                    type="button" 
                                    onClick={ () => setDevice("desktop")}
                                    className={`js-device-btn px-3 w-[120px] h-[39px] flex items-center justify-center gap-[6px] rounded-[8px] overflow-hidden
                                        ${device === 'desktop' ? 'current' : ''}
                                    `}>
                                    <i className="lazy icon w-5 h-5 bg-center bg-[length:contain] bg-no-repeat" style={{ backgroundImage: "url(/images/icon-desktop.png)" }} />
                                    <span> Desktop </span>
                                </button>

                                <button 
                                    type="button" 
                                    onClick={ () => setDevice("laptop")}
                                    className={`js-device-btn px-3 w-[120px] h-[39px] flex items-center justify-center gap-[6px] rounded-[8px] overflow-hidden
                                        ${device === 'laptop' ? 'current' : ''}
                                    `}>
                                    <i className="lazy icon w-5 h-5 bg-center bg-[length:contain] bg-no-repeat" style={{ backgroundImage: "url(/images/icon-laptop.png)" }} />
                                    <span> Laptop </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <p className="text-center"> Chọn phần mềm và xem cấu hình gợi ý </p>

                    <div className="software-list grid grid-cols-4 lg:grid-cols-7 gap-x-[16px] gap-y-[24px] lg:gap-x-[32px] lg:gap-y-[48px] text-center mb-8">
                        {filteredSoftware.map((item: any) =>
                            <Link
                                key={item.id}
                                href={`/designer-tool/${item.url_index}?device=${device}`}
                                className="item text-12 leading-4 lg:text-[14px] lg:leading-[18px] font-500 hover:text-[#0676DA] flex flex-col"
                            >
                                <span className="img block mb-2 lg:mb-3 relative pb-[100%]">
                                    <img src={item.image}
                                        alt={item.name}
                                        width={1}
                                        height={1}
                                        className="block absolute w-full h-full object-cover rounded-[24px]" />
                                </span>

                                <span className="text"> {item.name} </span>
                            </Link>
                        )}
                    </div>
                </div>


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
            </div>
        </div>
    )
}