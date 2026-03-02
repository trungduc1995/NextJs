import RecruitPage from "../../../components/recruit";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tuyển dụng nhân sự - Cơ hội việc làm tại Hoàng Hà PC",
    description: "Tìm kiếm việc làm tại Hoàng Hà PC",
};

export default function Home() {
    return <RecruitPage />;
}
