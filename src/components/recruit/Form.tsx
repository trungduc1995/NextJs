export default function RecruitForm() {
    return (
        <>
            <div className="recruit-form-group">
                <div className="recruit-form-holder">
                    <label>
                        <input type="text" className="input-text text-capitalize" id="js-info-name" placeholder="Nhập họ và tên" />
                        <span className="readonly">*</span>
                    </label>

                    <label>
                        <input type="text" className="input-text" id="js-info-email" placeholder="Nhập địa chỉ email" />
                        <span className="readonly">*</span>
                    </label>

                    <label>
                        <input type="text" className="input-text" id="js-info-tel" placeholder="Nhập số điện thoại" />
                        <span className="readonly">*</span>
                    </label>
                    
                    <label style={{ border: 0 }}>
                        <input type="file" className="hidden"/>
                        <span className="btn-upload d-block cursor-pointer"> Click để tải lên CV của bạn </span>
                    </label>
                    
                </div>
                <button type="button" className="btn-submit block w-full"> Ứng tuyển ngay </button>
            </div>
        </>
    )
}