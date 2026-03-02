'use client';
import Link from "next/link";
import { formatPrice,formatTextList  } from "@/lib/utils";
import { useProductItem } from "@/hooks/useProductItem"
import { useCart } from '@/hooks/useCart';
import { useEffect, useState } from "react";
import parse from 'html-react-parser';

export default function ProductItem({item}:any){
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);    

    const product = useProductItem(item);

    const { addToCart, isInCart } = useCart();

    if (!mounted || !product) return null;

    const {
        productId,
        productUrl,
        productImage,
        productName,
        quantity,
        price,
        marketPrice,
        discount,
        displayOffer,
        warranty,
        displaySummary
    } = product;

    const checkIncart  = isInCart(productId);
    const priceView    = price > 0 ? formatPrice(price) + 'đ' : 'Liên hệ';
    
    return (
        <div className="p-item js-p-item">
            <Link href={productUrl} className="p-img">
                <img 
                    src={productImage} 
                    alt={productName}
                    width={250} height={250}
                />
            </Link>

            <div className="p-text">
                <div className="p-price-group">
                    {discount > 0 &&
                        <>
                        <del>{formatPrice(marketPrice)} đ</del>
                        <span className="p-discount">-{discount}%</span>
                        </>
                    }
                    <p className="p-price"> {priceView} </p>
                </div>

                <Link href={productUrl} className="p-name">
                    <h3>{productName}</h3>
               </Link>

                <div className="p-btn-group flex items-center justify-between text-16 font-500 leading-[23px]">
                    <div>
                        {quantity > 0 ? 
                            (
                                <p className="m-0 text-[#00AD4F] flex items-center gap-1">
                                    <i className="bx bx-check-circle text-18 w-[18px]"></i>
                                    <span> Sẵn hàng </span>
                                </p>
                            ) : (
                                <p className="m-0 red flex items-center gap-1">
                                    <i className="bx bxs-phone text-18 w-[18px]"></i>
                                    <span> Liên hệ </span>
                                </p> 
                            )
                        }

                        {displayOffer &&
                            <p className="m-0 text-[#E16B10] flex items-center gap-1">
                                <i className="bx bx-gift text-18 w-[18px]"></i>
                                <span> Quà tặng </span>
                            </p>
                        }
                    </div>
                                        
                    <button className={`p-btn bx bg-btn text-white rounded-full w-9 h-9 text-20 ${checkIncart ? 'bx-check' : 'bx-plus' }`} 
                        type="button" aria-label="Mua"
                        style={{ background: `${checkIncart ? '#ccc' : ''}` }}
                        disabled={checkIncart}                        
                        onClick={() => addToCart(productId)}
                    ></button>
                </div>
            </div>

            <div className="p-tooltip hidden">
                <div className="bg-white rounded-[20px] overflow-hidden border-2 border-[#EAECF0] shadow-[0px_6px_8px_-2px_#10182814]">
                    <p className="tooltip-name px-5 py-4 text-white font-600 text-16 leading-[21px] bg-[linear-gradient(180.3deg,#259AFF_-18.56%,_#114CDD_100.92%)] m-0">
                        {productName}
                    </p>

                    <div className="p-4 tooltip-content">
                        <div className="last:border-0 last:p-0 last:m-0 text-16 border-b border-[#DEE4EC] mb-4 pb-4">
                            <p className="m-0 flex items-center flex-wrap gap-1">
                                <b className="font-600"> Giá bán: </b>
                                <b className="font-600 text-[#FF4E2A] text-18"> {priceView} </b>

                                {discount > 0 &&
                                    <>                                    
                                    <del className="text-[#A0A5AC] font-300"> {formatPrice(marketPrice)} đ </del>
                                    <span className="bg-[#FA354A] text-white text-11 px-[6px] leading-[18px] rounded-[20px]">
                                        -{discount}%
                                    </span>
                                    </>
                                }                                
                            </p>

                            {warranty && 
                                <p className="m-0">
                                    <b className="font-600"> Bảo hành: </b>
                                    <span> {warranty} </span>
                                </p>
                            }
                        </div>
                        
                        {displaySummary &&
                            <div className="last:mb-0 mb-6 px-1">
                                <p className="text-16 font-600 flex items-center leading-6 mb-2">
                                    <i className="icons icon-screen"></i>
                                    <span> Thông số sản phẩm </span>
                                </p>

                                <div className="tooltip-spec">
                                    {parse(formatTextList(displaySummary, 5))}
                                </div>
                            </div>
                        }

                        { displayOffer &&
                            <div className="rounded-[12px] bg-[linear-gradient(182.15deg,#FFA480_-18.44%,#EB0C23_60.76%)] p-1 pt-2">
                                <p className="px-2 text-16 font-600 flex items-center leading-5 mb-2 text-white">
                                    <i className="icons icon-gift"></i>
                                    <span> Khuyến mại hấp dẫn </span>
                                </p>

                                <div className="tooltip-offer rounded-[8px] bg-[#FEF2F2] px-2 py-4">
                                    {parse(formatTextList(displayOffer, 5))}
                                </div>
                            </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}