
import ForgotPassword from "@/components/customer/ForgotPassword";
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Quên mật khẩu",
    description: "",
};

export default function Home() {
    return (
        <ForgotPassword />
    )
}
