import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "404 - Không tìm thấy trang | Hoàng Hà PC",
    description: "hoanghapc",
};

export default function NotFound() {
    return (
        <div className="error-page bg-white py-10">
            <div className="container">
                <div className="text-18 text-dark text-center pt-4 pb-5">
                    <img src="/images/404-page-1.png" alt="Không tìm thấy" width={1} height={1} className="block w-auto h-auto m-auto" style={{ maxWidth: 600 }} />
                    <h1 className="text-36 mt-5"> Không Tìm Thấy </h1>
                    <p className="py-4">
                        Xin lỗi, nhưng trang bạn yêu cầu không tìm thấy hoặc đã bị xóa bỏ. Vui lòng thử lại.
                    </p>
                    <Link className="red" href="https://hoanghapc.vn">
                        <b>← Quay lại trang chủ</b>
                    </Link>
                </div>
            </div>
        </div>

    );
}
