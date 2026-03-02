import Contact from "@/components/about/Contact"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Thông tin liên hệ",
    description: "Thông tin liên hệ bao gồm điện thoại, địa chỉ cửa hàng",
};

export default function Home() {
    return <Contact />;
}
