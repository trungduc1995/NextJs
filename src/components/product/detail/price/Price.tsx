import { formatPrice } from "@/lib/utils";

export default function Price( {item} : any ) {
    return (
        <div className="my-3 border border-[#FA354A] rounded-[12px] leading-[22px] p-4 pd-price-group">
            <div className="leading-8 flex items-baseline flex-wrap mb-1">
                <p className="pd-price text-[#FF4E2A] font-bold mb-0 mr-3 text-24">
                    {item.price > 0 ? formatPrice(item.price) + 'đ' : ''}
                </p>

                { item.price_off && 
                    <>
                    <del className="mr-2 text-16"> {formatPrice(item.marketPrice)} đ </del>
                    <span className="pd-discount bg-[#FA354A] text-white leading-4 rounded-[20px] px-[6px] font-500">    
                        -{item.price_off}%
                    </span>
                    </>
                }
            </div>

            <div className="flex flex-wrap gap-1 font-500 text-[#2563EB]">
                {item.hasVAT == 1 && 
                    <p className="m-0 bg-[#EFF6FF] rounded-[6px] px-2"> Giá đã bao gồm VAT </p>
                }

                {item.hasVAT == 2 && 
                    <p className="m-0 bg-[#EFF6FF] rounded-[6px] px-2"> Giá chưa bao gồm VAT </p>
                }

                {item.warranty && 
                    <p className="m-0 bg-[#EFF6FF] rounded-[6px] px-2"> {item.warranty} </p>
                }
                
                <p className="m-0 bg-[#EFF6FF] rounded-[6px] px-2">
                    { item.quantity > 0 ? 'Còn hàng' : 'Liên hệ' }
                </p>
            </div>
        </div>
    )
}