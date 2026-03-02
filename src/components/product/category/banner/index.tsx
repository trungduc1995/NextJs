'use client';

import Link from "next/link";
import Image from 'next/image';
import { banner } from "@/data/banner";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function Banner( {id}:any ) {
    const { banner_category_2020 } = banner.product_list;

    const categoryBanner = banner_category_2020.filter((item: any) => {
        const category_list = item.category_list.split(',');
        return category_list.includes(String(id));
    });

    return (
        <div className="custom-dots overflow-hidden relative mb-6" id="js-category-banner">
            <Swiper
                speed={1000}
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                    prevEl: ".custom-dots .swiper-button-prev",
                    nextEl: ".custom-dots .swiper-button-next",
                }}
                pagination={{ clickable: true }}
            >
                {
                    categoryBanner.map((item:any) => 
                        <SwiperSlide key={item.id}>
                            <Link href={item.desUrl}>
                                <Image 
                                    src={item.fileUrl} 
                                    alt={item.name} 
                                    width={100} 
                                    height={100} 
                                    className="block w-full rounded-[24px]"
                                    unoptimized
                                />
                            </Link>
                        </SwiperSlide>
                    )
                }
                
            </Swiper>
        </div>
    )
}