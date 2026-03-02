'use client';
import { useState } from "react";
import StarPercent from "./StarPercent";
import ReviewForm from "./Form"
import ReviewList from "./ReviewList";

export default function Review( {item} : any ) {

    const [ show, setShow ] = useState(false);
    const productReview = item.list.filter( (item:any) => item.item_type === "product" );

    return (
        <>
        <div className={`pd-rating-conatiner mb-9 ${show ? 'active' : ''}`} id="js-pd-rating">
            <div className="flex flex-wrap justify-between gap-6">
                <div className="w-[200px] text-center">
                    <p className="font-600 text-[40px] leading-[48px] mb-2"> {item.summary.avgRate}.0 </p>
                    <p className="my-2 text-[#6B7280]"> {item.summary.total} lượt đánh giá </p>
                    <i className={`star star-${item.summary.avgRate}`} />

                    <button
                        className="rating-btn block h-10 w-full text-white text-14 font-500 rounded-[30px] bg-btn uppercase mt-3"
                        type="button"
                        aria-label="đánh giá"
                        onClick={ () =>  setShow(show => !show) }
                    />
                </div>

                <div className="w-[calc(100%_-_224px)] text-14 font-500 leading-[18px] flex flex-col gap-4">
                    <StarPercent item={item.summary} />                    
                </div>
            </div>

            <div className="pd-rating-form mt-8 hidden">
                <ReviewForm  />                
            </div>

            {productReview.length > 0 && 
                <div className="text-14 leading-[18px] mt-4">
                    <ReviewList item={productReview}/>                    
                </div>
            }
        </div>
        </>
    )
}