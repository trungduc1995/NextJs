import { CartData } from "@/data/cart";
import { formatPrice } from "@/lib/utils";
import EmptyCart from "./EmptyCart";
import Form from "../form";
import CartItem from "@/components/shared/CartItem"


export default function Home() {

    const hasCart = CartData.data.length;
    if (hasCart == 0 ) {
        return <EmptyCart />
    }

    return (
        <div className="cart-page container">
            <h1 className="text-[#004BA4] leading-10 text-[32px] font-600 mb-6"> Giỏ hàng của tôi </h1>

            <div className="lg:flex flex-wrap items-start justify-between gap-6">
                <div className="col-left w-[calc(100%-464px)]">
                    <div className="hidden lg:flex flex-wrap items-center justify-between gap-4 bg-white rounded-[12px] mb-3 py-3 px-4 lg:text-[16px] font-500 leading-10">
                        <p className="m-0 text-16 lg:text-[18px]"> {hasCart} sản phẩm </p>

                        <button type="button" aria-label="Xóa sản phẩm"
                            className="h-10 border border-[#0678DB] bg-white rounded-[40px] text-[#0678DB] px-6 transition-all duration-100 hover:bg-[#0678DB] hover:text-white"
                        > LÀM TRỐNG GIỎ HÀNG </button>
                    </div>
                    
                    <div className="bg-white rounded-[16px] lg:rounded-[12px] mb-3 p-4">
                        { CartData.data.map((item:any) =>
                            <CartItem item={item} key={item.item_id} />
                        )}
                    </div>

                    <div className="bg-white p-4 lg:pt-5 rounded-[16px] lg:rounded-[12px]">
                        <p className="font-600 text-16 lg:text-[18px] mb-2 lg:mb-4 leading-5 lg:leading-6">
                            Thông tin đơn hàng
                        </p>

                        <div className="flex items-center justify-between gap-3 border-b border-[#D2DAE3] border-dashed pb-4 mb-3 lg:mb-5 leading-5 lg:leading-6 lg:text-[16px]">
                            <p className="m-0"> Tổng tiền </p>
                            <p className="m-0 font-500 text-15 lg:text-[18px]"> 
                                {formatPrice(CartData.cart_summary.total_value)} đ 
                            </p>
                        </div>

                        <div className="flex items-center justify-between gap-3 leading-5 lg:leading-6">
                            <p className="m-0 flex items-center gap-2">
                                <i className="bx bxs-credit-card-alt text-20 text-[#B5BAC1]" />
                                <span> Tổng thanh toán </span>
                            </p>
                            
                            <p className="m-0 text-16 text-[#FF4E2A] font-bold lg:text-[20px]">
                                {formatPrice(CartData.cart_summary.total_value)} <u>đ</u>
                            </p>
                        </div>
                    </div>
                </div>

                <Form />
            </div>
        </div>
    )
}