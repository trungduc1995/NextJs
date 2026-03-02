'use client';
import { useState } from "react";

export default function FAQ({ faq }: any) {

    const [openIds, setOpenIds] = useState<number[]>([]);

    const toggle = (id: number) => {
        setOpenIds(prev =>
            prev.includes(id)
                ? prev.filter(i => i !== id)
                : [...prev, id]
        );
    };


    return (
        <div className="global-faq-container py-8 lg:py-12 text-18 leading-6">
            <div className="text-center mb-8">
                <p className="text-[#004BA4] text-20 lg:text-[40px] leading-5 lg:leading-[48px] mb-2 font-600">
                    Các câu hỏi thường gặp
                </p>

                <p className="max-w-[620px] m-auto text-16 leading-[21px] lg:text-[18px] lg:leading-6">
                    Nếu quý khách còn có bất kì câu hỏi nào cần hỗ trợ, vui lòng liên hệ với chúng tôi qua các số hotline để được tư vấn và giải đáp nhanh chóng nhất.
                </p>
            </div>
            
            {
                faq.map((item: any) => {
                    const isOpen = openIds.includes(item.id);

                    return (
                        <div className={`faq-item relative ${isOpen ? 'active' : ''}`} key={item.id}>
                            <button
                                type="button"
                                className="bx bx-plus w-10 h-10 rounded-full bg-[#EAF1FF] border border-[#FBFBFB] text-24 absolute right-5 top-4"
                                aria-label="xem thêm"
                                onClick={() => toggle(item.id) }
                            ></button>

                            <p className="m-0 text-20 font-600">
                                {item.title}
                            </p>

                            <div className="faq-answer mt-4">
                                {item.content}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}