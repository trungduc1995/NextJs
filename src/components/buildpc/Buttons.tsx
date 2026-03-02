export default function Buttons() {
    return (
        <div className="buildpc-btn-action">
            <button className="item" data-action="create-image">
                Tải ảnh cấu hình <i className="bxr bx-chevron-down" />
            </button>

            <button className="item" data-action="download-excel">
                Tải file excel cấu hình  <i className="bxr bx-chevron-down" />
            </button>

            <button className="item" data-action="view">
                <i className="bx bx-window " /> Xem & In
            </button>

            <button className="item btn-cart" data-action="add-cart">
                <i className="icon-cart" /> Thêm vào giỏ hàng
            </button>
        </div>
    )
}