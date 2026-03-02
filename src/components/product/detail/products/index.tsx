'use client';
import { useEffect, useState, useMemo } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ProductHistory } from "@/data/products/productHistory";
import ProductItem from "@/components/shared/ProductItem"

export default function ProductTab({ item }: any) {
    const RelatedData = item.product || [];
    const HistoryData = ProductHistory.list || [];

    const [active, setActive] = useState<number>(1);
    useEffect(() => {
        if (RelatedData.length > 0) {
            setActive(1);
        } else if (HistoryData.length > 0) {
            setActive(2);
        } else {
            setActive(0);
        }
    }, [RelatedData, HistoryData]);

    const products = useMemo(() => {
        if (active === 1) return RelatedData;
        if (active === 2) return HistoryData;
        return [];
    }, [active, RelatedData, HistoryData]);

    if (active > 0) {
        return (
            <div className="pd-product-container bg-white px-6 py-8 rounded-[24px]">
                <div className="pd-tab-group relative flex mb-8 border-b border-[#DEE4EC] font-600 text-24 gap-10 leading-[31px] pb-5">
                    {RelatedData.length > 0 &&
                        <button type="button" aria-label="tab"
                            className={active === 1 ? 'current' : ''}
                            onClick={() => setActive(1)}
                        > Sản phẩm tương tự </button>
                    }

                    {HistoryData.length > 0 &&
                        <button type="button" aria-label="tab"
                            className={active === 2 ? 'current' : ''}
                            onClick={() => setActive(2)}
                        > Sản phẩm đã xem </button>
                    }
                </div>

                <div className="relative z-[1] bg-white relative min-h-[300px] js-product-holder">
                    <Swiper
                        key={active}
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={5}
                        loop={products.length > 5 ? true : false}
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
                        {products.map((item: any) =>
                            <SwiperSlide key={item.id}>
                                <ProductItem item={item} />
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
            </div>
        )
    }
}