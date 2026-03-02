'use client';
import { useState, useMemo } from "react";

import { CommentData } from "@/data/comments";
import Form from "./Form";
import CommentList from "./CommentList";

export default function Comment() {
    const [star, setStar] = useState<number | null>(null); 
    
    const productComment = CommentData.list.filter( (item:any) => item.item_type === "product" );

    const filteredComments = useMemo(() => {
        if (star === null) return productComment;        
        return productComment.filter(item => Number(item.rate) === star);
    }, [star]);


    return (
        <div>
            <div className="flex items-center justify-between leading-8 gap-2 mb-4">
                <p className="m-0 text-18 font-500"> {filteredComments.length} Bình luận </p>

                <div className="flex flex-wrap gap-2 text-14 font-500 pd-comment-btn">
                    <button type="button"
                        className={`h-8 border rounded-[40px] px-8
                            ${star === null ? 'border-[#0678DB] text-[#0678DB]' : 'border-[#D1D5DB]'}`}
                        onClick={() => setStar(null)}
                    >
                        Tất cả
                    </button>

                    {[5,4,3,2,1].map(s => (
                        <button type="button"
                            key={s}
                            className={`h-8 border rounded-[40px] px-4 flex items-center gap-[3px]
                                ${star === s ? 'border-[#0678DB] text-[#0678DB]' : 'border-[#D1D5DB]'}`}
                            onClick={() => setStar(s)}
                        >
                            {s} <i className="bxr bx-star" />
                        </button>
                    ))}
                </div>

            </div>

            <div className="border border-[#DDDDDD] rounded-[12px] overflow-hidden js-comment-form">
                <Form />
            </div>            

            {filteredComments.length > 0 && (
                <CommentList item={filteredComments} />
            )}
        </div>
    )
}