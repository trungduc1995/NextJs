

import Layout from "@/components/account";
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Tài khoản của tôi",
    description: "Thông tin tài khoản người dùng",
};    

export default function Home() {
    return (
        <Layout />
    )
}
