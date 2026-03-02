'use client';

import { useState, useEffect, useRef } from "react";

export default function Static({ data }: any) {
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
    }, [data]);

    const handleCollapse = () => {
        setExpanded(false);

        containerRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return (
        <div
            ref={containerRef}
            className="static-container rounded-[24px] bg-white pt-10 pb-8"
        >
            <div
                ref={contentRef}
                className={`static-content px-6 text-16 leading-[22px] text-justify transition-all duration-300
                    ${!expanded && isOverflow ? 'max-h-[700px] overflow-hidden' : ''}`}
            >
                <div
                    suppressHydrationWarning
                    dangerouslySetInnerHTML={{ __html: data }}
                />
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
    );
}
