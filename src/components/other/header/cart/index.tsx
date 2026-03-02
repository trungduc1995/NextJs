import Link from "next/link";
import { formatPrice } from "@/lib/utils";

export default function CartItem({item}:any) {
    
    const { in_cart , item_info } = item;

    return(
        <div className="cart-item">
            <Link href={item_info.productUrl} className="cart-img">
                <img 
                    src={item_info.productImage.small} 
                    alt={item_info.productName} 
                    width={100} 
                    height={100} 
                />
            </Link>

            <div className="cart-text">
                <Link href={item_info.productUrl} className="d-block font-700" style={{ marginBottom: "5px" }}>
                    {item_info.productName}
                </Link>

                <p className="m-0 d-flex justify-content-between">
                    <b>x{in_cart.quantity}</b>
                    <b className="red">
                        {in_cart.total_price > 0 ? formatPrice(in_cart.total_price) +'đ' : 'Liên hệ'} 
                    </b>
                </p>
            </div>
        </div>
    )
}