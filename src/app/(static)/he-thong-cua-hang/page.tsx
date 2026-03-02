import HeThongCuaHang from "@/components/static/store";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hệ Thống Cửa Hàng - Hoàng Hà PC",
    description: "Hệ Thống Cửa Hàng máy tính với 4 Showroom lớn Hoàng Hà PC Chuyên cung cấp máy tính cao cấp, máy tính đồ họa và linh kiện máy tính uy tín.",
};
    
export default function Home() {
    return <HeThongCuaHang />;
}
