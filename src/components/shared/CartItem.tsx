
import Link from "next/link";
import { formatTextList } from "@/lib/utils"
import parse from 'html-react-parser';
import { formatPrice } from "@/lib/utils"

export default function CartItem({ item }: any) {
    const {
        item_info,
        in_cart
    } = item;
    
    return (
        <div className="cart-item mb-5 last:mb-0">
            <Link href={item_info.productUrl} className="item-img">
                <img src={item_info.productImage.large} />
            </Link>

            <div className="item-text">
                <div className="item-name">
                    <Link href={item_info.productUrl}
                        className="table uppercase font-500 lg:text-[16px] text-12"
                    >
                        {item_info.productName}
                    </Link>

                    {item_info.specialOffer.all.length > 0 &&
                        <div className="group mt-2 table">
                            <p className="m-0 text-[#0678DB] font-500 cursor-pointer">
                                <span> Chi tiết khuyến mại </span>
                                <i className="bx bx-chevron-down text-[#A0A5AC] text-16 align-middle transition-all group-hover:rotate-[-180deg]" />
                            </p>

                            <div className="item-offer group-hover:opacity-100 group-hover:z-[5] group-hover:visible">
                                {parse(formatTextList(item_info.specialOffer.all[0].title))}                                
                            </div>
                        </div>
                    }
                </div>

                <div className="item-quantiy">
                    <button type="button" className="js-quantity-change bx bx-minus" />

                    <input
                        type="number"
                        defaultValue={in_cart.quantity}
                        min={1}
                        pattern="[0-9]*"
                        inputMode="numeric"
                        className="js-buy-quantity js-quantity-change text-center"
                    />

                    <button type="button" className="js-quantity-change bx bx-plus" />
                </div>

                <div className="item-price text-right lg:text-left">
                    <p className="text-[#FF4E2A] font-bold mb-0 lg:mb-1 lg:text-[16px] lg:leading-5 text-13 leading-4">
                        { formatPrice(item_info.price) } đ
                    </p>

                    {item_info.marketPrice > 0 &&
                        <del className="block text-[#A0A5AC] lg:text-[13px] lg:leading-4 text-10 leading-3">
                            { formatPrice(item_info.marketPrice) } đ
                        </del>
                    }
                </div>

                <button
                    type="button"
                    className="item-delete bx bx-trash w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-[#E7D9D9] bg-[#F8F3F3] text-[#BE1F2D] text-16 lg:text-[20px] hover:text-white hover:bg-[#BE1F2D] hover:border-transparent"
                />
            </div>
        </div>
    )
}