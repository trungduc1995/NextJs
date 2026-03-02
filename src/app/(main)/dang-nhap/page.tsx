
import LoginPage from "@/components/customer/Login";
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Đăng nhập tài khoản",
    description: "",
};

import "@/styles/customer.css";

export default function Home() {
    return (
        <LoginPage />
    )
}
