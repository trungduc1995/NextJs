import Link from "next/link";

export default function otherHeader() {
    return (
        <>
            <div>
                <div className="global-header-container global-another-header">
                    <div className="container d-flex align-items-center justify-content-between position-relative">
                        <a href="/" className="logo-header">
                            <img src="/images/logo.png" 
                                alt="HoangHaPc" 
                                width={247} 
                                height={96} 
                                className="d-block h-auto w-auto m-auto" />
                        </a>

                        <div className="another-header-right">
                            <Link href="/he-thong-cua-hang" className="header-item font-700"> Hệ thống Showroom </Link>
                            <Link href="/huong-dan-mua-tra-gop" className="header-item font-700"> Trả góp </Link>
                            <Link href="/chinh-sach-bao-hanh" className="header-item font-700"> Bảo hành </Link>
                            <Link href="/lien-he" className="header-item font-700"> Liên hệ </Link>

                            <div className="header-item">
                                <p className="box-title text-white font-700 m-0 cursor-pointer"> Hotline </p>
                                
                                <div className="list-hotline-group">
                                    <div className="item">
                                        <span className="num">1</span>
                                        <span className="txt-phone">Hỗ Trợ Kỹ Thuật - Bảo Hành: 19006100</span>
                                    </div>
                                    <div className="item">
                                        <span className="num">2</span>
                                        <span className="txt-phone">Hotline Hà Nội (Mr. Long): 0969.123.666</span>
                                    </div>
                                    <div className="item">
                                        <span className="num">3</span>
                                        <span className="txt-phone">Hotline Hà Nội (Mr. Nghĩa): 0396.122.999</span>
                                    </div>
                                    <div className="item">
                                        <span className="num">4</span>
                                        <span className="txt-phone">Hotline Hà Nội (Mr. Huy): 0396.138.999</span>
                                    </div>
                                    <div className="item">
                                        <span className="num">5</span>
                                        <span className="txt-phone">Hotline Hà Nội (Mr. Duy): 0396.178.999</span>
                                    </div>
                                    <div className="item">
                                        <span className="num">6</span>
                                        <span className="txt-phone">Hotline Hà Nội (Mr. Thụ): 0922.635.999</span>
                                    </div>
                                    <div className="item">
                                        <span className="num">7</span>
                                        <span className="txt-phone">Hotline Nghệ An (Mr. Hưng): 0988.163.666</span>
                                    </div>
                                    <div className="item">
                                        <span className="num">8</span>
                                        <span className="txt-phone">Hotline Nghệ An (Mr. Xuân Huy): 0356.072.072</span>
                                    </div>
                                    <div className="item">
                                        <span className="num">9</span>
                                        <span className="txt-phone">Hotline Hồ Chí Minh (Mr. Bình): 0968.123.666</span>
                                    </div>
                                    <div className="item">
                                        <span className="num">10</span>
                                        <span className="txt-phone">Hotline Hồ Chí Minh (Mr. Khanh): 0379.260.260</span>
                                    </div>
                                    <div className="item">
                                        <span className="num">11</span>
                                        <span className="txt-phone">Hotline Hồ Chí Minh (Mr. Kiên): 0359.072.072</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="global-header-block" style={{ height: 60 }} />
            </div>

        </>
    )
}