'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

const PhotoSwipeImage = dynamic(
    () => import('./PhotoSwipeImage'),
    { ssr: false }
)

export default function ProductImage({ data }: any) {
    const images: string[] = Array.from(
        new Set([
            data.productImage.large.replace('250_', ''),
            ...(data.imageCollection?.map((i: any) =>
                i.image.large.replace('250_', '')
            ) || [])
        ])
    )

    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <>
            <div className="pd-image-top mb-4">
                <PhotoSwipeImage
                    images={images}
                    activeIndex={activeIndex}
                />
            </div>

            <div className="pd-gallery-list">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={12}
                    slidesPerView={5}
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={img}>
                            <img
                                src={img}
                                onClick={() => setActiveIndex(index)}
                                className={`cursor-pointer border rounded-md
                                    ${activeIndex === index
                                        ? 'border-[#0678DB]'
                                        : 'border-transparent'}`}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}
