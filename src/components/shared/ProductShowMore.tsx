interface ButtonShowMoreProps {
    onClick: () => void;
    label?: string;
    loading?: boolean;
    displayCount: number;
    total: number;
}

export default function ButtonShowMore({
    onClick,
    label = "TẢI THÊM",
    loading = false,
    displayCount,
    total
}: ButtonShowMoreProps) {
    
    return (
        <div className="text-center mt-12">
            <button
                type="button"
                disabled={loading}
                className="mb-3 bg-btn text-white rounded-[30px] h-10 font-500 text-16 table max-w-[240px] w-full m-auto"
                aria-label="Xem thêm"
                onClick={onClick}
            >
                {loading ? "ĐANG TẢI..." : label}
                <i className="bx bx-chevron-down text-20 align-middle mt-[-3px]" />
            </button>

            <p className="text-14 leading-[18px] m-0">
                Hiển thị {displayCount} trên tổng số {total} sản phẩm
            </p>
        </div>
    );
}
