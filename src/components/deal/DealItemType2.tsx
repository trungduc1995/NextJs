'use client';
import Link from "next/link";
import parse from "html-react-parser";
import { formatPrice } from "@/lib/utils";
import { useDealItem } from "@/hooks/useDealItem"
import { useCart } from '@/hooks/useCart';
import { DealCountdown } from "@/lib/times"

export default function DealItem( {item}: any ) {
    
    const deal = useDealItem(item);
    if (!deal) return null;

    const { addToCart, isInCart } = useCart();

    const {
        productInfo,
        price,
        marketPrice,
        discount,
        remain,
        saleRemainPercent,
        specialOffer,
    } = deal;

    const discountView = discount > 0 ? (<>
                                <del>{formatPrice(marketPrice)} đ</del>
                                <span className="deal-discount">-{discount}%</span>
                            </>
                        ) : null;
    const checkIncart = isInCart(productInfo.id);

    return(
        <div className="deal-item js-p-item js-deal-item p-[10px]">
            <Link href={ productInfo.productUrl } className="deal-img">
                <img 
                    src={ productInfo.productImage.large } 
                    alt={ productInfo.productName } 
                    width={200} 
                    height={200}
                    className="fit-img"
                />
            </Link>

            <div className="deal-text">
                <Link href={ productInfo.productUrl } className="deal-name"> { item.title } </Link>

                <div className="deal-price-holder">
                    <div>
                        <p className="deal-price"> {formatPrice(price)} đ </p>

                        {discountView}
                    </div>
                    
                    <button className={`deal-btn bx ${checkIncart ? 'bx-check' : 'bx-plus' }`} 
                        style={{ background: `${checkIncart ? '#ccc' : ''}` }}
                        disabled={checkIncart}
                        type="button" aria-label="Mua"
                        onClick={() => addToCart(productInfo.id)}
                    ></button>
                </div>

                <div className="deal-count">
                    <i className="deal-line" style={{ width: saleRemainPercent + '%' }}></i>
                    <span>
                        { Number(item.sale_quantity) < Number(item.quantity)
                            ? `Còn ${remain}/${item.quantity} sản phẩm`
                            : 'Hết DEAL'
                        }
                    </span>
                </div>
                
                <div className="deal-time-container my-2 flex flex-wrap justify-content-between items-center text-13 gap-1">
                    <p className="m-0"> Kết thúc sau: </p>

                    <div className="deal-time-holder js-deal-time" data-time-left={item.to_time}> 
                        <DealCountdown endTime={item.to_time} />
                    </div>
                </div>
              
                {specialOffer && (
                <div className="deal-offer">
                    <span className="text-[#BE1F2D]"> Quà tặng: </span>

                    {parse(specialOffer)}                    
                </div>
                )}
            </div>

        </div>
    )
}

