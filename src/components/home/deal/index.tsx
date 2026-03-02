'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { dealList } from "@/data/deals"
import DealItem from "@/components/shared/DealItem"
import Link from 'next/link';

export default function Collection() {
    
    const data = dealList.filter(item => item.total > 0) ?? [];

    return (
        data.map( (item:any) => (
            <div className="home-deal-container my-[3rem]" key={item.collection_info.id}>
                <div className="deal-container p-4 pt-6 rounded-[12px]" style={{ backgroundImage: 'url(images/bg-deal-home.png)' }}>
                    <div className="group-title flex items-center justify-between mb-6 text-white relative z-[1]">
                        <div className="flex items-center flex items-center">
                            <div className="flex items-center">
                                <i className="icon-bolt lazy mr-2" style={{ backgroundImage: 'url(images/icon-bolt.png)' }}></i>
                                <p className="m-0 mr-5 font-600 text-[32px]"> {item.collection_info.title} </p>
                            </div>

                            <div className="deal-time-holder">
                                <p> 00 </p> <p> 00 </p> <p> 00 </p> <p> 00 </p>
                            </div>
                        </div>

                        <Link href='/deal' className="text-16 font-600"> Xem tất cả <i className="bx bx-chevron-right align-middle ml-[-2px] mt-[-1px]"></i>  </Link>
                    </div>

                    <div className="group relative z-[1] bg-white rounded-[12px] relative min-h-[450px] px-4 pt-6 pb-8">
                        <div className="custom-nav hidden">
                            <div className="button-icon swiper-button-prev"></div>
                            <div className="button-icon swiper-button-next"></div>
                        </div>

                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={24}
                            slidesPerView={5}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                prevEl: '.custom-nav .swiper-button-prev',
                                nextEl: '.custom-nav .swiper-button-next',
                            }}
                            breakpoints={{
                                1600: {
                                    slidesPerView: 6,
                                },
                            }}                        
                        >
                            { item.list.map( (deal:any) => 
                                <SwiperSlide key={deal.id}>
                                    <DealItem item={deal} />
                                </SwiperSlide>
                            )}
                        </Swiper>
                        
                    </div>
                </div>
            </div>
        ))
    )
}