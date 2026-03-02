import BuildPc from "@/components/buildpc"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Xây Dựng Cấu Hình PC, Build PC Chuẩn Nhất✔️Giá Rẻ",
    description: "Xây dựng cấu hình máy tính PC chuyên nghiệp ✳️ máy tính đồ họa, máy tính làm việc giá rẻ ✳️ Build PC.",
}; 

import "@/styles/buildpc.css";

export default function Home() {
    return(
        <BuildPc />
    )
}