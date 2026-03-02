'use client';
import { useState } from 'react';
import { formatDate } from "@/lib/utils";
import parse from 'html-react-parser';
import CommentReply from "@/components/shared/CommentReply";
import Form from "../product/detail/comments/Form";

export default function CommentItem({ item }: any) {
    const [activeFormId, setActiveFormId] = useState<number | null>(null);

    const handleReply = () => {
        setActiveFormId(prev =>
            prev === item.id ? null : item.id
        );
    };

    return (
        <>
        { item.is_user_admin == 1 || item.approved == 1 &&
            <div className="first:border-t first:mt-4 first:pt-4 border-[#D1D5DB] mb-5 flex gap-3 text-14 leading-[18px]">
                <div className="w-10 h-10 rounded-full bg-[#9CA3AF] leading-10 text-center uppercase text-white font-600 overflow-hidden">
                    { item.is_user_admin == 1 
                        ? parse(`<img src="images/avatar-admin.png" className="block w-full h-full"/>`)
                        : parse(`<span> ${item.user_name.substring(0,1)} </span>`)
                    }
                </div>

                <div className="w-[calc(100%_-_52px)]">
                    <div className="flex items-center gap-2 mb-1">
                        <b className="capitalize"> {item.user_name.split(' -')[0]} </b>
                        <i className="bxr bxs-radio-circle text-[7px] text-[#6B7280]" />
                        <span className="text-[#6B7280]"> {formatDate(item.post_time)} </span>
                    </div>

                    <i className={`star star-${item.rate}`} />

                    <div className="my-2"> {item.content} </div>

                    <div className="flex gap-2 leading-[30px]">
                        <button type="button" aria-label="actions"
                            className="group flex items-center gap-[6px] border border-[#D1D5DB] px-3 rounded-[20px] hover:border-[#0678DB] hover:text-[#0678DB]"                            
                        >
                            <i className="group-hover:text-[#0678DB] text-[#928FA8] bxr bx-heart" />
                            {item.people_like_count}
                        </button>

                        <button type="button" aria-label="actions"
                            className="group flex items-center gap-[6px] border border-[#D1D5DB] px-3 rounded-[20px] hover:border-[#0678DB] hover:text-[#0678DB]"
                            onClick={handleReply}
                        >
                            <i className="group-hover:text-[#0678DB] text-[#928FA8] bxr bx-reply-stroke" />
                            Trả lời
                        </button>
                    </div>

                    {activeFormId === item.id && (
                    <div className="my-2 border border-[#DDDDDD] rounded-[12px] overflow-hidden js-comment-form" id={`js-comment-form-${item.id}`}>
                        <Form />
                    </div>
                    )}
                    

                    { item.new_replies.length > 0 &&
                    <div className="bg-[#F3F4F6] rounded-[12px] overflow-hidden mt-3">
                        {
                            item.new_replies.map( (reply:any) => 
                                <CommentReply item={reply} key={reply.id} />)
                        }                        
                    </div>
                    }
                </div>
            </div>
        }
        </>
    )
}