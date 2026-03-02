'use client';
import { useState, useEffect, useRef } from "react";
import parse from 'html-react-parser';

export default function ProductDescription( {name, description}:any ) {
    const contentRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const [isOverflow, setIsOverflow] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        if (contentRef.current) {
            if (contentRef.current.scrollHeight > 700) {
                setIsOverflow(true);
            }
        }
    }, [description]);

    const handleCollapse = () => {
        setExpanded(false);

        containerRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return (
        <div className="pd-box-group bg-white mb-6 p-8 pt-6 rounded-[24px]" ref={containerRef}>
            <p className="group-title border-b border-[#D0D8E3] leading-[31px] font-600 text-24 mb-4 pb-4">
                Đánh giá {name}
            </p>
            
            <div className="js-static-container static-container leading-[135%]"  ref={contentRef}>
                <div className={`static-content text-16 leading-[22px] text-justify transition-all duration-300
                        ${!expanded && isOverflow ? 'max-h-[700px] overflow-hidden' : ''}
                    `}>
                    {parse(description)}
                </div>

                {isOverflow && (
                    <div className="static-btn mt-4 flex justify-center">
                        {!expanded ? (
                            <button onClick={() => setExpanded(true)}>
                                Xem thêm <i className="bx bx-chevron-down" />
                            </button>
                        ) : (
                            <button onClick={handleCollapse}>
                                Thu gọn <i className="bx bx-chevron-up" />
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}