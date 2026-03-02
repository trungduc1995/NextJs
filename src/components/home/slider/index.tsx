'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { banner } from '@/data/banner'
import ImageItem from '@/components/shared/ImageItem';
import ImageList from './ImageList';

export default function Slider() {
    const bannerSlider = banner.homepage['2022_home_slider'] ?? [];
    const bannerRight  = banner.homepage['2022_home_right_slider'] ?? [];
    const bannerUnder  = banner.homepage['2022_home_under_slider'] ?? [];
    const underSlider  = banner.homepage['2022_4_under_slider'] ?? [];

    return(
        <div className="home-banner-container mb-10 min-h-[845px]">
            <div className="banner-slider gap-4 grid grid-cols-3 w-[932px] m-[auto_0_auto_auto]">
                <div className="home-banner-left col-span-2 custom-dots relative group ">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 3000 }}
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation={{
                            prevEl: ".custom-nav .swiper-button-prev",
                            nextEl: ".custom-nav .swiper-button-next",
                        }}
                        pagination={{ clickable: true }}
                    >
                        {
                            bannerSlider.map((item:any) => 
                                <SwiperSlide key={item.id}>
                                    <ImageItem item={item} />
                                </SwiperSlide>
                            )
                        }
                    </Swiper>

                    <div className="custom-nav hidden">
                        <div
                            className="button-icon swiper-button-prev"
                            role="button"
                            aria-label="Previous slide"
                        />
                        <div
                            className="button-icon swiper-button-next"
                            role="button"
                            aria-label="Next slide"
                        />
                    </div>
                </div>

                <ImageList 
                    data={bannerRight} 
                    className="home-banner-right col-span-1"
                />

                <ImageList 
                    data={bannerUnder} 
                    className="grid grid-cols-3 gap-4 col-span-3"
                />
            </div>
            

            <ImageList 
                data={underSlider} 
                className="grid grid-cols-4 gap-4 mt-4"
            />
        </div>
    )
}