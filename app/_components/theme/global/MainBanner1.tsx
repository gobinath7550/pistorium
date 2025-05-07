"use client";

import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef } from "react";

export default function MainBanner() {
    const progressCircle = useRef<SVGSVGElement>(null);
    const progressContent = useRef<HTMLDivElement>(null);
    const onAutoplayTimeLeft = (s: SwiperType, time: number, progress: number) => {
        const _progress = 1 - progress;
        progressCircle?.current?.style?.setProperty('--progress', _progress.toString());
        if (progressContent.current != null)
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <section className="min-h-[300] lg:max-h-[800] overflow-hidden">
            <Swiper
                className="min-h-[300] lg:max-h-[800]"
                loop={true}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
            >
                <SwiperSlide className="relative">
                    <Image
                        className="min-h-[300] lg:max-h-[800] w-full object-right lg:object-center object-cover select-none"
                        src="/banner/m-main-banner-1.jpg"
                        alt="Chocolate Brownie Cake"
                        width={1600}
                        height={800}
                        priority
                    />
                    <div className="absolute inset-0">
                        <div className="w-full h-full flex items-center justify-center relative before:content-[''] before:absolute before:inset-0 before:bg-black/40">
                            <h2 className="px-3 text-[var(--foreground)] text-3xl lg:text-7xl text-center relative lg:leading-28 tracking-wide">{"Freshly Baked Happiness"}<br />{"One Slice at a Time"}</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <Image
                        className="min-h-[300] lg:max-h-[800] w-full object-left lg:object-center object-cover select-none"
                        src="/banner/m-main-banner-4.jpg"
                        alt="Homemade Brownies"
                        width={1600}
                        height={800}
                        priority
                    />
                    <div className="absolute inset-0">
                        <div className="w-full h-full flex items-center justify-center relative before:content-[''] before:absolute before:inset-0 before:bg-black/60">
                            <h2 className="text-[var(--foreground)] text-3xl lg:text-7xl text-center relative lg:leading-28 tracking-wide">{"Cakes So Good"}<br />{"You'll Skip Dinner!"}</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <Image
                        className="min-h-[300] lg:max-h-[800] w-full object-center object-cover select-none"
                        src="/banner/m-main-banner-3.jpg"
                        alt="Homemade Red Velvet Brownies"
                        width={1600}
                        height={800}
                        priority
                    />
                    <div className="absolute inset-0 z-20">
                        <div className="w-full h-full flex items-center justify-center relative before:content-[''] before:absolute before:inset-0 before:bg-black/60">
                            <h2 className="text-[var(--foreground)] text-3xl lg:text-7xl text-center relative lg:leading-28 tracking-wide">{"Frosted Dreams"}<br />{" & Delicious Bites Await"}</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </section>
    )
}