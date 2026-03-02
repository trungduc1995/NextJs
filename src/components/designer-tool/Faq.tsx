'use client';
import { useState } from "react";

export default function FAQ() {

    const [openIds, setOpenIds] = useState<number[]>([]);

    const toggle = (id: number) => {
        setOpenIds(prev =>
            prev.includes(id)
                ? prev.filter(i => i !== id)
                : [...prev, id]
        );
    };
    
    const isOpen = openIds.includes(1);

    return (
        <>
            <div className={`faq-item js-faq-item relative ${isOpen ? 'active' : ''}`}>
                <button type="button" 
                        onClick={() => toggle(1) }
                        className="bx bx-plus w-10 h-10 rounded-full bg-[#EAF1FF] border border-[#FBFBFB] text-24 absolute right-5 top-4" 
                        aria-label="xem thêm" 
                />

                <p className="m-0 text-15 lg:text-[20px] leading-[19px] lg:leading-6 font-600"> Có thể kiểm tra tính tương thích của linh kiện trước khi đặt không? </p>
                <div className="faq-answer mt-4">
                    <p> Có. Chúng tôi cung cấp công cụ "Build PC" để bạn dễ dàng chọn và kiểm tra tính tương thích giữa CPU, mainboard, RAM, GPU, và các linh kiện khác trước khi mua hàng. </p>
                </div>
            </div>

        </>
    )
}