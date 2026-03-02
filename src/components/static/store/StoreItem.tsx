'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function StoreItem({ item, storeId }: any) {

    return (
        <>
            <div className="showroom-item">
                <div className="container grid grid--content-1">
                    <div className="showroom-contact p-4">
                        <p className="font-weight-bold color-primary mb-1">
                            {
                                storeId === 4 ? 'Trung Tâm Bảo Hành' : 'Showroom bán hàng'
                            }
                        </p>

                        <h4 className="text-28 font-weight-bold mb-3 uppercase">
                            {item.district}
                        </h4>

                        <ul className="contact-list d-flex flex-column mb-3">
                            <li className="d-flex align-items-center">
                                <i className="static-icons static-icon-phone" />
                                <a className="text-14" href={`tel:${item.tel}`}>
                                    Điện thoại: {item.tel}
                                </a>
                            </li>

                            <li className="d-flex align-items-center">
                                <i className="static-icons static-icon-mail" />
                                <a className="text-14" href={`mailto:${item.email}`}>
                                    Email: {item.email}
                                </a>
                            </li>

                            <li className="d-flex align-items-center">
                                <i className="static-icons static-icon-clock" />
                                <p className="text-14 m-0">
                                    Thời gian làm việc: {item.time}
                                </p>
                            </li>
                        </ul>

                        <div className="js-footer-map-item my-4 relative">
                            <iframe
                                src={item.map}
                                width={490}
                                height={324}
                                className="m-0"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>

                    <div className="showroom-image p-4">
                        <div className="showroom-image-content">
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={1}
                                loop={true}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false
                                }}
                                modules={[Navigation, Pagination, Autoplay]}
                                navigation={{
                                    prevEl: ".swiper-button-prev",
                                    nextEl: ".swiper-button-next",
                                }}
                                pagination={{ clickable: true }}
                            >
                                {item.images.map((image: string, index: number) =>
                                    <SwiperSlide key={index}>
                                        <img
                                            src={image}
                                            alt="Showroom Hoàng Hà PC"
                                        />
                                    </SwiperSlide>
                                )}
                            </Swiper>

                            <div className="showroom-image-bottom d-flex align-items-center">
                                <div className="showroom-image-bottom-logo">
                                    <i className="static-icons static-icon-logo-small" />
                                </div>

                                <p className="showroom-image-bottom-text d-flex text-20 font-weight-600">
                                    <i className="static-icons static-icon-location-small" />
                                    <span> {item.address} </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}