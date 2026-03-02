import ProductSearch from "@/components/search"

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Danh sách tìm kiếm ",
    description: "Danh sách kết quả thỏa mãn",
};   

export default function Search() {
    return(
        <ProductSearch />
    )
}