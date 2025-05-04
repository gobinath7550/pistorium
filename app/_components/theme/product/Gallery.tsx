"use client";

import { useState } from "react";
import Image from "next/image";
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export default function Gallery() {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

    return (
        <div className="w-full md:w-1/2 mb-8 px-6 md:px-8 product-gallery-block">
            <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
            >
                <SwiperSlide>
                    <Image 
                        className="rounded-xl"
                        src="/products/opera/opera_cake-main.jpeg"
                        alt="Opera Cake"
                        width={1480}
                        height={680}
                        priority
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image 
                        className="rounded-xl"
                        src="/products/opera/opera_cake-main.jpeg"
                        alt="Opera Cake"
                        width={1480}
                        height={680}
                        priority
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image 
                        className="rounded-xl"
                        src="/products/opera/opera_cake-main.jpeg"
                        alt="Opera Cake"
                        width={1480}
                        height={680}
                        priority
                    />
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={20}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mt-4"
            >
                <SwiperSlide>
                    <Image 
                        className="rounded-xl"
                        src="/products/opera/opera_cake-main.jpeg"
                        alt="Opera Cake"
                        width={1480}
                        height={680}
                        priority
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image 
                        className="rounded-xl"
                        src="/products/opera/opera_cake-main.jpeg"
                        alt="Opera Cake"
                        width={1480}
                        height={680}
                        priority
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image 
                        className="rounded-xl"
                        src="/products/opera/opera_cake-main.jpeg"
                        alt="Opera Cake"
                        width={1480}
                        height={680}
                        priority
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}