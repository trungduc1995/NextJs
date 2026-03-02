import DealPage from "@/components/deal"

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Flash Sale Mỗi Ngày Cực Sốc - Hoàng Hà PC ",
    description: "Flash Sale Mỗi Ngày Cực Sốc - Hoàng Hà PC",
}; 

export default function Home() {
    return(
        <DealPage />
    )
}