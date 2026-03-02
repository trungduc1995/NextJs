export default function Newsletter() {
    return (
        <div className="footer-newsletter-container py-12 mt-16">
            <div className="container flex flex-wrap items-center justify-between gap-12 relative z-[1]">
                <i className="lazy icon-newsletter" style={{ backgroundImage: 'url(/images/footer-newsletter.png)' }}></i>

                <p className="m-0 text-white font-600 text-20">Hãy để lại Email để nhận thông báo Khuyến mại hấp dẫn hoặc tư vấn miễn phí từ Hoàng Hà PC!</p>

                <form className="w-[756px] flex items-center flex-wrap justify-between gap-3 text-16 font-500">
                    <input type="text" placeholder="Địa chỉ email của bạn" className="border-2 border-transparent bg-white w-[576px] rounded-[40px] h-[52px] px-4 placeholder:font-normal placeholder:text-[#718096] placeholder:text-[16px]" />
                    <button type="button" aria-label="Đăng ký nhận tin" className="uppercase w-[168px] h-[52px] rounded-[40px] bg-white text-[#0678DB] gap-2 flex items-center justify-center border-0">
                        Gửi ngay <i className="icons icon-plane"></i>
                    </button>

                    <p className="m-0 text-[#ffc403]"> </p>
                </form>
            </div>
        </div>
    )
}