
import RegisterPage from "@/components/customer/Register"
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Đăng nhập tài khoản",
    description: "",
};

import "@/styles/customer.css";

export default function Home() {
    return (
        <RegisterPage />
    )
}
