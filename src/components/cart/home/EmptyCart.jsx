import Link from "next/link";

export default function EmptyCart() {
    return (
        <div className="text-center px-3">
            <div className="mb-4">
                <img src="images/cart-empty.png" className="block m-auto" />
            </div>
            <p className="mt-10 mb-6 text-20 font-600">
                Không có sản phẩm nào trong giỏ hàng của bạn !
            </p>
            <Link href="/"
                className="inline-flex items-center bg-btn text-white leading-[52px] font-500 text-18 rounded-[50px] px-6"
            >
                VỀ TRANG CHỦ <i className="bx bx-arrow-up-right-stroke text-30" />
            </Link>
        </div>
    )
}