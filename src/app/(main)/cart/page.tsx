
import CartHome from "@/components/cart/home";
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Giỏ hàng của bạn",
    description: "",
};

export default function Home() {
    return (
        <CartHome />
    )
}
