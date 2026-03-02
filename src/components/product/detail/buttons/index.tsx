'use client';
import { useCart } from '@/hooks/useCart';

export default function Buttons( {item}:any ) {
    const { addToCart } = useCart();
    return (
        <>
            <div className="pd-button-group my-5 gap-2 grid grid-cols-2 text-18 font-500">
                <button
                    type="button"
                    className="col-span-2 uppercase rounded-[12px] text-white h-[52px] border border-[#FFD83E] bg-[linear-gradient(148.21deg,#FFD83E_-14.02%,#FF4E2A_70.14%)]"
                    aria-label="Mua sản phẩm"
                    onClick={() => addToCart(item, 1, '/cart')}
                >
                    Mua ngay
                </button>

                <button
                    type="button"
                    className="col-span-1 flex items-center justify-center uppercase rounded-[12px] text-white h-[52px] border border-[#259AFF] bg-[linear-gradient(165.29deg,#259AFF_8.53%,#114CDD_93.19%)]"
                    aria-label="Mua sản phẩm"
                    onClick={() => addToCart(item)}
                >
                    <i className="icons icon-cart !w-[22px] !h-[22px] mr-[6px]" />
                    <span> Thêm vào giỏ </span>
                </button>

                <a href='https://hoanghapc.vn/huong-dan-mua-tra-gop' target='_blank'
                    className="col-span-1 flex items-center justify-center uppercase rounded-[12px] text-white h-[52px] border border-[#259AFF] bg-[linear-gradient(165.29deg,#259AFF_8.53%,#114CDD_93.19%)]"
                >
                    <i className="icons icon-card w-[22px] h-[22px] mr-[6px]" />
                    <span> Mua trả góp </span>
                </a>
            </div>
        </>
    )
}