import Info from "@/components/about/Info"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Giới Thiệu Về Hoàng Hà PC",
    description: "Hoàng Hà PC được thành lập vào năm 2008. Đến nay, Hoàng Hà PC đã trở thành công ty hàng đầu trong lĩnh vực kinh doanh máy tính tại Việt Nam.",
};

export default function Home() {
    return <Info />;
}
