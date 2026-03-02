export default function Promotion({ total }: any) {
    return (
        <div className="buildpc-info-group">
            <p>
                Chi phí dự tính:
                <span
                    className="font-600"
                    style={{ color: '#FF4E2A' }}
                >
                    {total.toLocaleString()} đ
                </span>
            </p>

            <div className="buildpc-promotion-content" />
        </div>
    );
}