import Link from "next/link";
import { formatPrice } from "@/lib/utils"
import CartItem from "@/components/other/header/cart/index"
import { CartData } from '@/data/cart';

export default function Cart() {

    const productsInCart = CartData.data;
    const totalPrice     = CartData.cart_summary.total_value;
    const totalItems     = CartData.data.length;
    const hasProducts    = totalItems > 0;
    
    return (
        <>
            <div className="header-cart-item">
                <Link href="/cart" rel="nofollow" className="flex items-center">
                    <i className="icon-cart relative mr-[10px]">
                        <b className="js-cart-count cart-count">{totalItems}</b>
                    </i>
                    <span className="text"> Giỏ <br />Hàng </span>
                </Link>

                {hasProducts && 
                    <div className="header-cart-hover">
                        <div className="cart-items-holder">
                            {productsInCart.map((item:any) =>
                                <CartItem key={item.item_id} item={item} />
                            )}
                        </div>

                        <div className="cart-price-hover">
                            <p className="grey m-0 text-right">
                                Tổng tiền hàng
                                (<span className="red">
                                    <span className="js-cart-count">{totalItems}</span> sản phẩm
                                </span>):
                                <span className="red text-18 font-600" style={{ verticalAlign: "top" }}>
                                    {formatPrice(totalPrice)}đ
                                </span>
                            </p>
                            <Link href="/cart" className="d-block text-center text-white btn-goCart"> THANH TOÁN NGAY </Link>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}