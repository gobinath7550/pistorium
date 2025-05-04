"use client";

import { useState } from "react";
import Thumbnail from "./Thumbnail";

const Link = ({ name }: { name:string }) => {
    return (
        <a href="#" title="" className="text-base text-white transition-all duration-200 border-transparent border-b-[1px] hover:border-white focus:border-white font-bold">
            {name}
        </a>
    )
}

export default function Header() {
    const [isMiniCartShow, setIsMiniCartShow] = useState(false);

    return (
        <header className="sticky top-0 shadow-2xl bg-[var(--background)] z-50 font-poppins">
            <div className="px-4 mx-auto max-w-[105rem] sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between h-16 lg:h-20">
                    <div className="flex-shrink-0">
                        <a href="/" title="Pistorium" className="flex">
                            <span className=" tracking-widest font-bold text-white text-3xl font-pacifico">{"Pistorium"}</span>
                        </a>
                    </div>
                    <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10 tracking-wide">
                        <Link name="Brownies" />
                        <Link name="Cakes" />
                        <Link name="Theme cakes" />
                        <Link name="Cookies" />
                        <Link name="Chocolates" />
                        <Link name="Exotic desserts" />
                    </div>
                    <div className="ml-16 flex gap-6">
                        <a href="#" className="w-7.5 h-7.5" role="button">
                            <svg className="text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g> <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"></path> </g></svg>
                        </a>
                        <div className="relative w-8 h-8">
                            <a href="#" className="w-8 h-8" role="button" onClick={(e) => {
                                e.preventDefault();
                                setIsMiniCartShow(prevState => !prevState)
                            }}>
                                <svg className="text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g> <path d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11M4 7H20M4 7V13C4 19.3668 5.12797 20.5 12 20.5C18.872 20.5 20 19.3668 20 13V7M4 7L5.44721 4.10557C5.786 3.428 6.47852 3 7.23607 3H16.7639C17.5215 3 18.214 3.428 18.5528 4.10557L20 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            </a>
                            {isMiniCartShow && (
                                <div className="absolute top-9 right-0 shadow-2xl rounded-xl">
                                    <div className="bg-yellow-50 rounded-xl p-4 md:p-8 text-[var(--background)] overflow-hidden min-w-80 md:min-w-xl before:content-[''] before:absolute before:w-4 before:h-4 before:-top-1 before:right-2 before:bg-yellow-50 before:rotate-45">
                                        <h3 className="text-xl md:text-3xl text-center font-extrabold border-b-2 mb-6 pb-6 font-pacifico">{"Cart Summary"}</h3>
                                        <div className="grid grid-cols-4 gap-2 md:gap-4 rounded-lg">
                                            <div className="col-span-1 w-full overflow-hidden rounded-lg">
                                                <Thumbnail width={174} height={174} />
                                            </div>
                                            <div className="col-span-2">
                                                <h4 className="text-md md:text-xl font-bold leading-6">{"Homemade Brownies"}</h4>
                                                <p className="text-xs md:text-sm mt-2">{"SKU: HMB-267"}</p>
                                                <p className="text-xs md:text-sm">{"Qty: 1"}</p>
                                            </div>
                                            <div className="col-span-1 text-right">
                                                <p className="text-md  md:text-lg text-nowrap font-bold">{"Rs: 499"}</p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-4 gap-4 mt-4 pt-2 md:pt-4 md:mt-8 border-t-2">
                                            <div className="col-span-3">
                                                <p className="text-lg md:text-2xl text-nowrap font-bold">{"Total"}</p>
                                            </div>
                                            <div className="col-span-1 text-right">
                                                <p className="text-lg md:text-2xl text-nowrap font-bold">{"Rs: 499"}</p>
                                            </div>
                                        </div>
                                        <div className="mt-4 md:mt-8">
                                            <button className="bg-[var(--background)] flex gap-2 justify-center items-center text-white py-4 rounded-lg w-full text-center focus:outline-none focus:ring-2 focus:ring-yellow-100 focus:ring-offset-2">
                                                {"Go To Checkout"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}