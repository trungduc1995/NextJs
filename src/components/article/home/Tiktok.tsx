import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

export default function Tiktok() {

    return (
        <div className="article-tiktok-container py-8 lg:py-16">
            <div className="group-title flex items-center justify-between flex-wrap gap-4 mb-6">
                <h2 className="flex items-center m-0 leading-8 font-600 text-20 text-[#004BA4] gap-[10px] lg:gap-4 lg:text-[32px] lg:leading-10">
                    <i className="lazy bg-no-repeat bg-center bg-[length:100%_100%] w-8 h-8 lg:w-12 lg:h-12"
                        style={{ backgroundImage: 'url(images/logo-tiktok.png)' }}
                    />
                    <span> Tiktok Channel </span>
                </h2>

                <div className="flex flex-wrap items-center justify-center text-center bg-[#DCE8FF] rounded-[16px_0_] leading-5 lg:leading-6 lg:text-[16px] gap-3 lg:w-[823px] w-full p-3 lg:p-4">
                    <i className="icons icon-finger !w-6 !h-6 animation-wiggle" />
                    <div className="lg:flex flex-wrap">
                        <p className="m-0 mr-1">
                            Theo dõi kênh tiktok của Hoàng hà PC:
                        </p>

                        <Link
                            href="https://www.tiktok.com/@hoangha.pc"
                            target="_blank"
                            rel="nofollow"
                            className="text-[#0678DB] font-600 table lg:text-[16px]"
                        >
                            ORIGINAL SOUND - HOÀNG HÀ PC
                        </Link>
                    </div>
                </div>
            </div>

            <div className="swiper overflow-hidden" id="js-tiktok-slide">
                <Swiper
                    spaceBetween={16}
                    slidesPerView={1.7}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    speed={1000}
                    breakpoints= {{
                        414: {
                            slidesPerView: 2
                        },
                        576: {
                            slidesPerView: 3
                        },
                        768: {
                            slidesPerView: 4
                        },
                        1024: {
                            slidesPerView: 6
                        }
                    }}
                >
                    <SwiperSlide>
                        <Link href="https://www.tiktok.com/@hoangha.pc/video/7260350983039945985" rel="nofollow" target="_blank">
                            <span className="block relative mb-2 rounded-[12px] overflow-hidden pb-[344px]">
                                <img src="https://hoanghapccdn.com/media/lib/27-07-2023/don-hang-sieu-vip-pro.jpg" alt="tiktok video" width="1" height="1" className="block lazy w-full absolute h-full object-cover" />
                            </span>

                            <span className="block leading-[22px] font-600 text-16">Đơn hàng cho công ty VIP PRO</span>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href="https://www.tiktok.com/@hoangha.pc/video/7259685093806034177" rel="nofollow" target="_blank">
                            <span className="block relative mb-2 rounded-[12px] overflow-hidden pb-[344px]">
                                <img src="https://hoanghapccdn.com/media/lib/27-07-2023/don-hang-khach-vip.jpg" alt="tiktok video" width="1" height="1" className="block lazy w-full absolute h-full object-cover" />
                            </span>

                            <span className="block leading-[22px] font-600 text-16"> Đơn hàng đặc biệt cho khách vip </span>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href="https://www.tiktok.com/@hoangha.pc/video/7259272220093041926" rel="nofollow" target="_blank">
                            <span className="block relative mb-2 rounded-[12px] overflow-hidden pb-[344px]">
                                <img src="https://hoanghapccdn.com/media/lib/27-07-2023/don-pc-200-trieu.jpg" alt="tiktok video" width="1" height="1" className="block lazy w-full absolute h-full object-cover" />
                            </span>

                            <span className="block leading-[22px] font-600 text-16"> Đơn PC hơn 200 củ </span>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href="https://www.tiktok.com/@hoangha.pc/video/7256640817752820997" rel="nofollow" target="_blank">
                            <span className="block relative mb-2 rounded-[12px] overflow-hidden pb-[344px]">
                                <img src="https://hoanghapccdn.com/media/lib/27-07-2023/don-pc-300-trieu.jpg" alt="tiktok video" width="1" height="1" className="block lazy w-full absolute h-full object-cover" />
                            </span>

                            <span className="block leading-[22px] font-600 text-16"> Đơn hàng hơn 300 củ có gì? </span>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href="https://www.tiktok.com/@hoangha.pc/video/7249589730000522501" rel="nofollow" target="_blank">
                            <span className="block relative mb-2 rounded-[12px] overflow-hidden pb-[344px]">
                                <img src="https://hoanghapccdn.com/media/lib/27-07-2023/pc-dau-than.jpg" alt="tiktok video" width="1" height="1" className="block lazy w-full absolute h-full object-cover" />
                            </span>

                            <span className="block leading-[22px] font-600 text-16"> PC Full trắng vừa đẹp vừa khỏe </span>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link href="https://www.tiktok.com/@hoangha.pc/video/7245136755375049989" rel="nofollow" target="_blank">
                            <span className="block relative mb-2 rounded-[12px] overflow-hidden pb-[344px]">
                                <img src="https://hoanghapccdn.com/media/lib/27-07-2023/pc-80-trieu-co-gi.jpg" alt="tiktok video" width="1" height="1" className="block lazy w-full absolute h-full object-cover" />
                            </span>

                            <span className="block leading-[22px] font-600 text-16"> PC 80 củ có gì? </span>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}