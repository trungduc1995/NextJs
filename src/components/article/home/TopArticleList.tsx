'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import ArticleItem from "@/components/shared/ArticleItem";

export default function TopArticleList({ item }: any) {

    const leftItems = item.slice(0, 7);
    const rightItems = item.slice(7, 10);

    return (
        <div className="top-article-container container flex flex-wrap gap-6 !mb-2 lg:!mb-6">
            <div className="col-left w-full lg:w-[718px] swiper overflow-hidden relative">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                >
                    {leftItems.map((item: any) => (
                        <SwiperSlide key={item.id}>
                            <Link href={item.url}
                                {...(item.external_url ? {
                                    target: "_blank",
                                    rel: "noopener noreferrer"
                                } : {})}
                            >
                                <Image
                                    src={item.image.original} 
                                    alt={item.title} 
                                    width={100}
                                    height={100}
                                    unoptimized
                                    className="block w-full rounded-[16px]"
                                />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="col-right w-full lg:w-[calc(100%-742px)]">
                <p className="font-600 text-20 leading-6 lg:text-[24px] lg:leading-8 mb-3">
                    Tin nổi bật
                </p>

                <div className="flex flex-col gap-4">
                    {
                        rightItems.map((item: any) => <ArticleItem key={item.id} item={item} />)
                    }
                </div>
            </div>
        </div>
    )
}