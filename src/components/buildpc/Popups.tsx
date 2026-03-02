export default function Popups({ onRebuild }: any) {

    return (<>
        {/* Rebuild */}
        <div className="buildpc-popup-container buildpc-popup-rebuild text-black" id="popup-rebuild_config">
            <div className="popup-content-group">
                <i className="fa fa-exclamation-circle" />
                <b>LÀM MỚI</b>
                <p>Cảnh báo: Toàn bộ linh kiện của bộ PC hiện tại sẽ bị xóa đi</p>

                <div className="popup-btn-group">
                    <button className="btn-cancel" data-fancybox-close> Hủy </button>

                    <button
                        className="btn-red"
                        style={{ background: '#FA354A', color: '#fff' }}
                        onClick={() => {
                            onRebuild();
                        }}>
                        Xác nhận
                    </button>
                </div>
            </div>
        </div>

        {/* error */}
        <div className="buildpc-popup-container buildpc-popup-rebuild" id="fancybox-opps">
            <div className="popup-content-group">
                <i className="fa fa-exclamation-circle" />
                <b>OPPS...</b>
                <p>Bạn chưa chọn sản phẩm nào</p>
                <div className="popup-btn-group">
                    <button className="btn-red js-close-popup" style={{ background: '#FA354A', color: '#fff' }} onClick={() => { /* Fancybox.close(); */ }}> OK </button>
                </div>
            </div>
        </div>

        {/* Popup variant */}
        <div className="popup-select-variant-container" id="js-popup-select-variant-container">
            <div className="popup-select-content">
                <div className="popup-title">
                    <p className="m-0 font-600 text-20">CHỌN CẤU HÌNH</p>
                    <a href="javascript:void(0)" 
                    onClick={() => { /*  $('.popup-select-variant-container').hide(); $('#js-product-selected-info-holder, #js-variant-containe').html('');*/ }} className="bx bx-x font-600" />
                </div>
                <div id="js-product-selected-info-holder">{/* load variant item */} </div>
                <div className="popup-select-holder" id="js-variant-container">{/* load variant list */} </div>
                <button type="button" className="popup-select-btn">CHỌN CẤU HÌNH NÀY</button>
            </div>
        </div>
    </>)
}