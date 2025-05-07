"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import MainBanner1 from "./_components/theme/global/MainBanner1";
import PageRender from "./_components/theme/PageRender";
import CollectionSlider from "./_components/theme/global/CollectionSlider";

export default function Home() {
    const progressContent = useRef<HTMLDivElement>(null);
    const onAutoplayTimeLeft = (s: SwiperType, time: number, progress: number) => {
        if (progressContent?.current?.textContent != null) {
            progressContent.current.style.width = `${
                100 - Math.ceil(progress * 100)
            }%`;
        }
    };

    return (
        <PageRender>
            <MainBanner1 />
            <section className="categories-slider-section">
                <div className="mx-auto max-w-[105rem] pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8">
                    <CollectionSlider id="brownies" title="Brownies" />
                </div>
            </section>
            <section className="promotion-banner-slider-section">
                <div className="mx-auto max-w-[105rem] pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8">
                    <Swiper
                        className="w-full h-full"
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                    >
                        <SwiperSlide>
                            <Image
                                className="rounded-2xl h-[34rem] object-cover border-4 border-[var(--background)]"
                                src="/banner/home-banner-4.JPG"
                                alt="birthday-party-cupcakes-assortment"
                                width={1680}
                                height={890}
                                priority
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                className="rounded-2xl h-[34rem] object-cover border-4 border-[var(--background)]"
                                src="/banner/home-banner-5.jpg"
                                alt="candle-cupcake-cakestand-against-blue-background"
                                width={1680}
                                height={890}
                                priority
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section className="categories-slider-section">
                <div className="mx-auto max-w-[105rem] pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8">
                    <CollectionSlider id="cakes" title="Cakes" />
                </div>
            </section>
            <section className="font-poppins">
                <div className="mx-auto max-w-[105rem] pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                        <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                            <Image
                                className="absolute object-center object-cover w-full h-full group-hover:scale-105 transition-transform"
                                src="/gallery/gallery-1.jpg"
                                alt="Homemade Red Velvet Brownies"
                                width={580}
                                height={480}
                                priority
                            />
                            <div className="pointer-events-none md:translate-y-20 md:group-hover:translate-y-0 absolute inset-0 bg-gradient-to-t from-yellow-950 via-transparent to-transparent opacity-90 md:transition-all"></div>
                            <span className="relative md:translate-y-20 md:group-hover:translate-y-0 ml-4 mb-6 inline-block text-[var(--foreground)] md:ml-5 text-xl md:text-2xl font-extrabold md:transition-all">
                                {"Triple Chocolate Fudge Cake"}
                            </span>
                        </div>
                        <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                            <Image
                                className="absolute object-bottom object-cover w-full h-full group-hover:scale-105 transition-transform"
                                src="/gallery/gallery-2.jpg"
                                alt="Homemade Red Velvet Brownies"
                                width={1280}
                                height={880}
                                priority
                            />
                            <div className="pointer-events-none md:translate-y-20 md:group-hover:translate-y-0 absolute inset-0 bg-gradient-to-t from-yellow-950 via-transparent to-transparent opacity-90 md:transition-all"></div>
                            <span className="relative md:translate-y-20 md:group-hover:translate-y-0 ml-4 mb-6 inline-block text-[var(--foreground)] md:ml-5 text-xl md:text-2xl font-extrabold md:transition-all">
                                {"Dark Forest Fantasy Cake"}
                            </span>
                        </div>
                        <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                            <Image
                                className="absolute object-center object-cover w-full h-full group-hover:scale-105 transition-transform"
                                src="/gallery/gallery-3.jpg"
                                alt="Homemade Red Velvet Brownies"
                                width={1280}
                                height={880}
                                priority
                            />
                            <div className="pointer-events-none md:translate-y-20 md:group-hover:translate-y-0 absolute inset-0 bg-gradient-to-t from-yellow-950 via-transparent to-transparent opacity-90 md:transition-all"></div>
                            <span className="relative md:translate-y-20 md:group-hover:translate-y-0 ml-4 mb-6 inline-block text-[var(--foreground)] md:ml-5 text-xl md:text-2xl font-extrabold md:transition-all">
                                {"Gooey Choco Chunk Cookie"}
                            </span>
                        </div>
                        <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                            <Image
                                className="absolute object-center object-cover w-full h-full hover:scale-105 transition-transform"
                                src="/gallery/gallery-4.jpg"
                                alt="Homemade Red Velvet Brownies"
                                width={680}
                                height={680}
                                priority
                            />
                            <div className="pointer-events-none md:translate-y-20 md:group-hover:translate-y-0 absolute inset-0 bg-gradient-to-t from-yellow-950 via-transparent to-transparent opacity-90 md:transition-all"></div>
                            <span className="relative md:translate-y-20 md:group-hover:translate-y-0 ml-4 mb-6 inline-block text-[var(--foreground)] md:ml-5 text-xl md:text-2xl font-extrabold md:transition-all">
                                {"Classic Minion Celebration Cake"}
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="categories-slider-section">
                <div className="mx-auto max-w-[105rem] pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8">
                    <CollectionSlider id="theme-cakes" title="Theme Cakes" />
                </div>
            </section>
        </PageRender>
    );
}
