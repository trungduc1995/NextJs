export default function ButtonShowMore({
    onClick,
    label = "XEM THÊM",
    loading = false
}) {
    return (
        <div className="text-center mt-4">
            <button
                type="button"
                disabled={loading}
                className="border border-[#0678DB] text-[#0678DB] rounded-[30px] h-10 px-6 hover:bg-[#0678DB] hover:text-white disabled:opacity-50"
                onClick={onClick}
            >
                {loading ? "ĐANG TẢI..." : label}
                <i className="bx bx-chevron-down text-20 align-middle mt-[-3px]" />
            </button>
        </div>
    );
}
