
import DesignerTool from "@/components/designer-tool";
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "PC Đồ Họa Tool | Chọn cấu hình theo phần mềm ",
    description: "Công cụ chọn PC đồ họa theo phần mềm: Photoshop, Illustrator, Lumion, AutoCAD… Đề xuất cấu hình chuẩn cho thiết kế 2D, 3D, CAD và render.",
};    

export default function Home() {    

    return (
        <DesignerTool />
    )
}
