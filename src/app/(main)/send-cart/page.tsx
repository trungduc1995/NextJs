
import SendResult from "@/components/cart/send";
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Gửi đơn hàng",
    description: "",
};

export default function SendCartPage() {
    return (
        <SendResult />
    )
}
