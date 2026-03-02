'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { categories } from "@/data/categories"
import { productList } from '@/data/products/productList';
import CategoryIcon from "./CategoryIcon"
import ProductItem from "@/components/shared/ProductItem"
import Link from 'next/link';

export default function ProductCategories() {

    const { all_category } = categories.product;
    const featuredCategories = all_category.filter((item: any) => item.is_featured === 1);

    return (
        featuredCategories.map((item: any) => {

            const categoryProducts = productList.filter(
                (product: any) => product.id === item.id
            );
            
            return(
                <div className="home-product-container my-8" key={item.id}>
                
                    <div className="bg-white rounded-[24px] my-8 p-6">        
                        <div className="flex items-center justify-between flex-wrap mb-5 gap-3">
                            <div className="group-title flex items-center">
                                <h2 className="font-600 text-[28px] leading-9 text-[#004BA4] m-0"> {item.title} </h2>

                                <CategoryIcon item={item.id} />
                            </div>

                            <div className="flex flex-wrap items-center justify-end gap-2 leading-[30px] text-[#0678DB] font-600 text-16">
                                {item.children.length > 0 &&
                                    item.children
                                        .slice(0, 4)
                                        .map((child: any) => 
                                        <Link href={child.url} key={child.id}
                                            className="px-2 rounded-[30px] bg-[#EAF1FF]"
                                        > {child.title} </Link>
                                    )
                                }
                                <Link href={item.url}> Xem tất cả <i className="bx bx-chevron-right text-20 align-middle"></i> </Link>
                            </div>
                        </div>

                        <div className="relative z-[1] bg-white relative min-h-[300px] js-product-holder group">
                            <div className="custom-nav hidden">
                                <div className="button-icon swiper-button-prev"></div>
                                <div className="button-icon swiper-button-next"></div>
                            </div>

                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={24}
                                slidesPerView={5}
                                // loop={categoryProducts[0].list?.length > 5}
                                loop={false}
                                // autoplay={{
                                //     delay: 3000,
                                //     disableOnInteraction: false,
                                // }}
                                autoplay={false}
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
                                {categoryProducts[0].list.map( (item:any) => 
                                    <SwiperSlide key={item.id}>    
                                        <ProductItem item={item} />
                                    </SwiperSlide>
                                )}
                            </Swiper>
                        </div>
                    </div>
                </div>
            )

        }) 
    )
}


