export default function PageInfo(){
    return(
        <div className="global-footer-container bg-[#0719A7] relative py-16 text-white text-14 lg:text-[16px] leading-[18px] lg:leading-[22px]">
            <div className="bg-oval"></div>
            <div className="container relative z-[2]">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8 lg:mb-10">
                    <div className="footer-item">
                        <p className="uppercase font-600 mb-4"> Về Hoàng Hà PC </p>

                        <div className="inline-grid gap-3 font-500">
                            <a href="/gioi-thieu"> Về Chúng Tôi </a>
                            <a href="/tuyen-dung"> Tuyển Dụng </a>
                            <a href="/he-thong-cua-hang"> Hệ thống showroom </a>
                            <a href="/tin-tuc"> Tin tức </a>
                        </div>
                    </div>

                    <div className="footer-item">
                        <p className="uppercase font-600 mb-4"> Hỗ trợ khách hàng </p>

                        <div className="inline-grid gap-3 font-500">
                            <a href="/huong-dan-mua-hang-online">Hướng dẫn mua hàng Online</a>
                            <a href="/phuong-thuc-thanh-toan">Hướng dẫn thanh toán</a>
                            <a href="/huong-dan-mua-tra-gop">Hướng dẫn mua trả góp</a>
                        </div>
                    </div>

                    <div className="footer-item">
                        <p className="uppercase font-600 mb-4"> Chính sách </p>

                        <div className="inline-grid gap-3 font-500">
                            <a href="/chinh-sach-bao-hanh">Chính sách bảo hành</a>
                            <a href="/chinh-sach-bao-mat">Chính sách bảo mật</a>
                            <a href="/van-chuyen-giao-nhan">Chính sách vận chuyển, giao nhận</a>
                        </div>
                    </div>

                    <div className="footer-item">
                        <p className="uppercase font-600 mb-4"> Cộng đồng  </p>

                        <div className="inline-grid gap-3 font-500">
                            <a href="https://www.facebook.com/hoanghapc" target="_blank" rel="nofollow noopener noreferrer"> Hoàng Hà PC Fanpage </a>
                            <a href="" target="_blank" rel="nofollow noopener noreferrer"> Phát Triển Hệ Thống Dữ Liệu </a>
                            <a href="" target="_blank" rel="nofollow noopener noreferrer"> Phát Triển Trải nghiệm Người dùng </a>
                        </div>
                    </div>
                </div>

                <div className="footer-contact-info mb-8 lg:mb-10">
                    <p className="mb-2 font-600 lg:text-[16px] lg:mb-4 uppercase"> Email liên hệ </p>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-6">
                        <div className="rounded-[12px] lg:rounded-[16px] bg-[rgba(255,255,255,0.1)] p-4 lg:p-6">
                            <p className="flex items-center gap-2 font-500 uppercase mb-2">
                                <i className="icons icon-puzzle rounded-full !w-6 !h-6"></i>
                                <span > Hợp Tác Phát Triển: </span>
                            </p>

                            <a href="mailto:hoanghapcws@gmail.com" className="opacity-[0.8] transition-all hover:opacity-[1] text-16"> hoanghapcws@gmail.com </a>
                        </div>

                        <div className="rounded-[12px] lg:rounded-[16px] bg-[rgba(255,255,255,0.1)] p-4 lg:p-6">
                            <p className="flex items-center gap-2 font-500 uppercase mb-2">
                                <i className="icons icon-discount rounded-full !w-6 !h-6"></i>
                                <span > Liên Hệ Báo Giá: </span>
                            </p>

                            <a href="mailto:kinhdoanh@hoanghapc.vn" className="opacity-[0.8] transition-all hover:opacity-[1] text-16"> kinhdoanh@hoanghapc.vn </a>
                        </div>

                        <div className="rounded-[12px] lg:rounded-[16px] bg-[rgba(255,255,255,0.1)] p-4 lg:p-6">
                            <p className="flex items-center gap-2 font-500 uppercase mb-2">
                                <i className="icons icon-shield rounded-full !w-6 !h-6"></i>
                                <span > Hỗ Trợ Bảo Hành: </span>
                            </p>

                            <a href="mailto:baohanh@hoanghapc.vn" className="opacity-[0.8] transition-all hover:opacity-[1] text-16"> baohanh@hoanghapc.vn </a>
                        </div>
                    </div>
                    
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 lg:gap-8">
                    <div className="flex items-center gap-4 lg:gap-8">
                        <p className="m-0 text-12 leading-[15px] lg:text-[14px] lg:leading-[18px] opacity-80">
                            CÔNG TY TNHH DỊCH VỤ VÀ CÔNG NGHỆ HOÀNG HÀ<br/>
                            Giấy chứng nhận đăng ký kinh doanh số: 0107406972, được Sở Kế hoạch và Đầu tư Tp. Hà Nội cấp
                        </p>

                        <a href="http://online.gov.vn/Home/WebDetails/46319" target="_blank" rel="nofollow noopener noreferrer" className="w-[120px]">
                            <img src="/images/global-footer-bct.png" loading="lazy" alt="Bct" width="1" height="1" className="lazy d-block w-auto h-auto" />
                        </a>
                    </div>

                    <div className="flex items-center gap-3">
                        <a href="" target="_blank" rel="nofollow noopener noreferrer" className="icons icon-linkedin !w-6 !h-6" aria-label="Social Media"></a>
                        <a href="" target="_blank" rel="nofollow noopener noreferrer" className="icons icon-facebook !w-6 !h-6" aria-label="Social Media"></a>
                        <a href="" target="_blank" rel="nofollow noopener noreferrer" className="icons icon-zalo !w-6 !h-6" aria-label="Social Media"></a>
                        <a href="" target="_blank" rel="nofollow noopener noreferrer" className="icons icon-gmail !w-6 !h-6" aria-label="Social Media"></a>
                    </div>
                </div>
            </div>
        </div>
    )
}