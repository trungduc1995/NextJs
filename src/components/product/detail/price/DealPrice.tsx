import { formatPrice } from "@/lib/utils";
import { DealCountdown } from "@/lib/times"

export default function DealPrice( {item} : any ) {

    const price = item.sale_rules.price;
    const normal_price = item.sale_rules.normal_price;
    const discount = Math.ceil(((normal_price - price) / normal_price) * 100);

    const sale_quantity = Number(item.deal_list[0].sale_quantity);
    const quantity = Number(item.deal_list[0].quantity);
    const saleRemainPercent = 100 - (sale_quantity / quantity) * 100;

    return (
        <>
            <div className="pd-deal-group rounded-[12px] bg-[#FEF2F2] overflow-hidden border border-[#FA354A] my-3">
                <div className="group-title p-2 bg-[linear-gradient(270.05deg,#CB0F23_0.04%,#FF3246_99.97%)] flex items-center flex-wrap justify-between gap-2">
                    <p className="m-0 leading-7 font-600 text-18 flex items-center gap-[6px] text-white">
                        <i className="icons icon-flame animation-beat" />
                        <span> BIG SALE </span>
                    </p>

                    <div className="relative bg-[#EBEBEB] rounded-[20px] text-center font-500 text-13 leading-[22px] px-[51px]">
                        <i  className="w-[22px] h-[28px] absolute left-[-8px] top-[-4px] z-[1] bg-no-repeat bg-center bg-[length:100%_100%] animation-bounce lazy"
                            data-bg="url(images/deal-icon-bolt.png)"
                        />

                        <i className="bg-[#FFE078] absolute inset-0 max-w-[100%] rounded-[20px]"
                            style={{ width: saleRemainPercent+"%" }}
                        />

                        <span className="relative z-[1] block"> 
                            Còn: {sale_quantity}/{quantity} sản phẩm 
                        </span>
                    </div>
                </div>

                <div className="p-4">
                    <div className="leading-8 flex items-baseline flex-wrap mb-1">
                        <p className="pd-price text-[#FF4E2A] font-bold mb-0 mr-3 text-24">
                            {formatPrice(price)} đ
                        </p>

                        { discount > 0 &&
                            <>
                            <del className="mr-2 text-16">
                                { formatPrice(normal_price) } đ
                            </del>
                            
                            <span className="pd-discount bg-[#FA354A] text-white leading-4 rounded-[20px] px-[6px] font-500">
                                -{discount}%
                            </span>
                            </>
                        }
                    </div>

                    <div className="flex flex-wrap gap-1 font-500 text-[#2563EB] leading-[22px]">
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

                    <div className="my-2 flex items-center leading-6 gap-2">
                        <p className="m-0"> Kết thúc sau: </p>

                        <div className="deal-time-holder flex items-center gap-5 text-white text-14 font-600">
                            <DealCountdown endTime={item.deal_list[0].to_time} />
                        </div>
                    </div>

                    <p className="m-0 font-600 text-13 leading-4 text-[#FF4E2A] mt-3">
                        *KHÔNG ÁP DỤNG CỘNG DỒN CHƯƠNG TRÌNH KHUYẾN MẠI KHÁC
                    </p>
                </div>
            </div>
        </>
    )
}


