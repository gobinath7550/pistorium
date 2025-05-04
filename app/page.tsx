"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
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
            <section className="overflow-hidden main-banner-section border-b-4 border-[#dcd5c4]">
                <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
                    <div className="relative flex items-center justify-center w-full lg:order-2 lg:w-7/12">
                        <div className="absolute bottom-0 right-0 hidden lg:block">
                            <Image
                                className="object-contain w-auto h-48"
                                src="/curved-lines.png"
                                alt="Curved Lines"
                                width={880}
                                height={1200}
                                priority
                            />
                        </div>
                        <div className="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
                            <h1 className="text-4xl font-bold text-[var(--background)] sm:text-6xl xl:text-7xl font-pacifico">
                                {"Frosted Dreams"}
                                <br />
                                {"& Delicious Bites Await"}
                            </h1>
                            <div className="mt-8 w-full bg-amber-100 rounded-full h-2.5">
                                <div
                                    className="bg-[var(--background)] h-2.5 rounded-full"
                                    ref={progressContent}
                                ></div>
                            </div>
                            <p className="mt-8 text-xl text-black font-poppins">
                                {
                                    "Crafted with passion, baked with love. Experience the joy of freshly baked perfection. Tradition meets taste in every slice."
                                }
                            </p>
                            <a
                                href="#"
                                role="button"
                                className="mt-8 inline-flex items-center justify-center w-full px-8 py-4 font-semibold text-white transition-all duration-200 bg-[var(--background)] border border-transparent rounded-full sm:w-auto cursor-pointer hover:bg-[var(--background)] focus:bg-[var(--background)] font-poppins"
                            >
                                {"Order Now"}
                            </a>
                        </div>
                    </div>
                    <div className="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12 font-poppins">
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
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            onAutoplayTimeLeft={onAutoplayTimeLeft}
                        >
                            <SwiperSlide>
                                <div className="relative overflow-hidden w-full h-full">
                                    <div className="absolute inset-0">
                                        <Image
                                            src="/banner/home-banner-1.JPG"
                                            alt="Chocolate Brownie Cake"
                                            width={780}
                                            height={580}
                                            priority
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                    <div className="absolute bottom-0 left-0">
                                        <div className="p-4 sm:p-6 lg:p-8">
                                            <div className="flex items-center">
                                                <h3 className="font-bold text-white text-3xl md:text-5xl ml-2.5">
                                                    {"Chocolate Brownie Cake"}
                                                </h3>
                                            </div>
                                            <div className="flex items-center my-4">
                                                <h4 className="font-bold text-white text-2xl md:text-4xl ml-2.5">
                                                    <span className="text-orange-500">
                                                        {"Rs."}
                                                    </span>
                                                    {"695 / kg"}
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="relative overflow-hidden w-full h-full">
                                    <div className="absolute inset-0">
                                        <Image
                                            src="/banner/home-banner-2.JPG"
                                            alt="Homemade Brownies"
                                            width={780}
                                            height={580}
                                            priority
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                    <div className="absolute bottom-0 left-0">
                                        <div className="p-4 sm:p-6 lg:p-8">
                                            <div className="flex items-center">
                                                <h3 className="font-bold text-white text-3xl md:text-5xl ml-2.5">
                                                    {"Homemade Brownies"}
                                                </h3>
                                            </div>
                                            <div className="flex items-center my-4">
                                                <h4 className="font-bold text-white text-2xl md:text-4xl ml-2.5">
                                                    <span className="text-orange-500">
                                                        {"Rs."}
                                                    </span>
                                                    {"795 / kg"}
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="relative overflow-hidden w-full h-full">
                                    <div className="absolute inset-0">
                                        <Image
                                            className="dark:invert"
                                            src="/banner/home-banner-3.JPG"
                                            alt="Homemade Red Velvet Brownies"
                                            width={780}
                                            height={580}
                                            priority
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                    <div className="absolute bottom-0 left-0">
                                        <div className="p-4 sm:p-6 lg:p-8">
                                            <div className="flex items-center">
                                                <h3 className="font-bold text-white text-3xl md:text-5xl ml-2.5">
                                                    {
                                                        "Homemade Red Velvet Brownies"
                                                    }
                                                </h3>
                                            </div>
                                            <div className="flex items-center my-4">
                                                <h4 className="font-bold text-white text-2xl md:text-4xl ml-2.5">
                                                    <span className="text-orange-500">
                                                        {"Rs."}
                                                    </span>
                                                    {"899 / kg"}
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
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
                        <a
                            href="#"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                        >
                            <Image
                                className="absolute object-center object-cover w-full h-full group-hover:scale-105 transition-transform"
                                src="/gallery/gallery-1.jpg"
                                alt="Homemade Red Velvet Brownies"
                                width={580}
                                height={480}
                                priority
                            />
                            <div className="pointer-events-none md:translate-y-20 md:group-hover:translate-y-0 absolute inset-0 bg-gradient-to-t from-yellow-950 via-transparent to-transparent opacity-90 md:transition-all"></div>
                            <span className="relative md:translate-y-20 md:group-hover:translate-y-0 ml-4 mb-6 inline-block text-yellow-50 md:ml-5 text-xl md:text-2xl font-extrabold md:transition-all">
                                {"Triple Chocolate Fudge Cake"}
                            </span>
                        </a>
                        <a
                            href="#"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                        >
                            <Image
                                className="absolute object-bottom object-cover w-full h-full group-hover:scale-105 transition-transform"
                                src="/gallery/gallery-2.jpg"
                                alt="Homemade Red Velvet Brownies"
                                width={1280}
                                height={880}
                                priority
                            />
                            <div className="pointer-events-none md:translate-y-20 md:group-hover:translate-y-0 absolute inset-0 bg-gradient-to-t from-yellow-950 via-transparent to-transparent opacity-90 md:transition-all"></div>
                            <span className="relative md:translate-y-20 md:group-hover:translate-y-0 ml-4 mb-6 inline-block text-yellow-50 md:ml-5 text-xl md:text-2xl font-extrabold md:transition-all">
                                {"Dark Forest Fantasy Cake"}
                            </span>
                        </a>
                        <a
                            href="#"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                        >
                            <Image
                                className="absolute object-center object-cover w-full h-full group-hover:scale-105 transition-transform"
                                src="/gallery/gallery-3.jpg"
                                alt="Homemade Red Velvet Brownies"
                                width={1280}
                                height={880}
                                priority
                            />
                            <div className="pointer-events-none md:translate-y-20 md:group-hover:translate-y-0 absolute inset-0 bg-gradient-to-t from-yellow-950 via-transparent to-transparent opacity-90 md:transition-all"></div>
                            <span className="relative md:translate-y-20 md:group-hover:translate-y-0 ml-4 mb-6 inline-block text-yellow-50 md:ml-5 text-xl md:text-2xl font-extrabold md:transition-all">
                                {"Gooey Choco Chunk Cookie"}
                            </span>
                        </a>
                        <a
                            href="#"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                        >
                            <Image
                                className="absolute object-center object-cover w-full h-full hover:scale-105 transition-transform"
                                src="/gallery/gallery-4.jpg"
                                alt="Homemade Red Velvet Brownies"
                                width={680}
                                height={680}
                                priority
                            />
                            <div className="pointer-events-none md:translate-y-20 md:group-hover:translate-y-0 absolute inset-0 bg-gradient-to-t from-yellow-950 via-transparent to-transparent opacity-90 md:transition-all"></div>
                            <span className="relative md:translate-y-20 md:group-hover:translate-y-0 ml-4 mb-6 inline-block text-yellow-50 md:ml-5 text-xl md:text-2xl font-extrabold md:transition-all">
                                {"Classic Minion Celebration Cake"}
                            </span>
                        </a>
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
