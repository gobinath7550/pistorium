"use client";
import { Dispatch, SetStateAction, useState } from "react";
import Thumbnail from "./Thumbnail";
import Link from 'next/link';

const NavLink = ({ href, name }: { href:string, name:string }) => {
    return (
        <Link href={href} title={name} className="text-base text-white transition-all duration-200 border-transparent border-b-[1px] hover:border-white focus:border-white font-bold w-fit">
            {name}
        </Link>
    )
}

const SliderNavLink = ({ href, name, setIsOpenMenuSlider }: { href:string, name:string, setIsOpenMenuSlider: Dispatch<SetStateAction<boolean>> }) => {
    return (
        <Link href={href} title={name} className="text-base text-white transition-all duration-200 border-transparent border-b-[1px] hover:border-white focus:border-white font-bold w-fit" onClick={(e) => {
            e.preventDefault();
            setIsOpenMenuSlider(false);
            const target = document.querySelector(href);
            if (target) {
                setTimeout(() => {
                    target.scrollIntoView({ behavior: "smooth" });
                }, 0);
            }
        }}>
            {name}
        </Link>
    )
}

export default function Header() {
    const [isMiniCartShow, setIsMiniCartShow] = useState(false);
    const [isOpenMenuSlider, setIsOpenMenuSlider] = useState(false);

    return (
        <>
        <header className="sticky top-0 shadow-2xl bg-[var(--background)] z-50 font-poppins">
            <div className="px-4 mx-auto max-w-[105rem] sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between h-16 lg:h-20">
                    <div className="flex items-center justify-center gap-3">
                        <Link href={"#"} className="lg:hidden cursor-pointer" onClick={(e) => {
                                e.preventDefault();
                                setIsOpenMenuSlider(prevState => !prevState)
                        }}>
                            <svg className="w-8 h-8 text-" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g> <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        </Link>
                        <Link href={"/"} title="Pistorium" className="flex">
                            <span className=" tracking-widest font-bold text-white text-3xl font-pacifico">{"Pistorium"}</span>
                        </Link>
                    </div>
                    <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10 tracking-wide">
                        <NavLink href={"#brownies"} name="Brownies" />
                        <NavLink href={"#cakes"} name="Cakes" />
                        <NavLink href={"#theme-cakes"} name="Theme cakes" />
                        <NavLink href={"#cookies"} name="Cookies" />
                        <NavLink href={"#chocolates"} name="Chocolates" />
                        <NavLink href={"#exotic-desserts"} name="Exotic desserts" />
                    </div>
                    <div className="ml-16 flex gap-6">
                        <Link href={"tel:9089909009"} title="Call" className="w-7.5 h-7.5" role="button">
                            <svg className="text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g> <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"></path> </g></svg>
                        </Link>
                        <div className="relative w-8 h-8">
                            <Link href={"#"} title="Cart" className="w-8 h-8" role="button" onClick={(e) => {
                                e.preventDefault();
                                setIsMiniCartShow(prevState => !prevState)
                            }}>
                                <svg className="text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g> <path d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11M4 7H20M4 7V13C4 19.3668 5.12797 20.5 12 20.5C18.872 20.5 20 19.3668 20 13V7M4 7L5.44721 4.10557C5.786 3.428 6.47852 3 7.23607 3H16.7639C17.5215 3 18.214 3.428 18.5528 4.10557L20 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            </Link>
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
                                            <Link href={"/checkout"} role="button" title="Checkout" className="bg-[var(--background)] flex gap-2 justify-center items-center text-white py-4 rounded-lg w-full text-center focus:outline-none focus:ring-2 focus:ring-yellow-100 focus:ring-offset-2">
                                                {"Go To Checkout"}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        <div className={isOpenMenuSlider ? `lg:hidden shadow-2xl fixed top-0 left-0 min-h-dvh min-w-3/4 bg-[var(--background)] z-50 translate-x-0 transition-all` : `lg:hidden shadow-2xl fixed top-0 left-0 min-h-dvh min-w-3/4 bg-[var(--background)] z-50 -translate-x-[100%] transition-all`}>
            <div className="p-5 relative">
                <Link href={"/"} title="Pistorium" className="absolute top-2 right-2 flex border-2 rounded-full p-2" onClick={(e) => {
                        e.preventDefault();
                        setIsOpenMenuSlider(false)
                }}>
                    <svg viewBox="0 0 24 24" className="text-white w-3 h-3" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g> <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="currentColor"></path> </g></svg>
                </Link>
                <Link href={"/"} title="Pistorium" className="flex border-b-1 pb-3 mt-6">
                    <span className="tracking-widest font-bold text-white text-2xl font-pacifico">{"Pistorium"}</span>
                </Link>
                <div className="flex flex-col gap-3 mt-5">
                    <SliderNavLink href={"#brownies"} name="Brownies" setIsOpenMenuSlider={setIsOpenMenuSlider} />
                    <SliderNavLink href={"#cakes"} name="Cakes" setIsOpenMenuSlider={setIsOpenMenuSlider} />
                    <SliderNavLink href={"#theme-cakes"} name="Theme cakes" setIsOpenMenuSlider={setIsOpenMenuSlider} />
                    <SliderNavLink href={"#cookies"} name="Cookies" setIsOpenMenuSlider={setIsOpenMenuSlider} />
                    <SliderNavLink href={"#chocolates"} name="Chocolates" setIsOpenMenuSlider={setIsOpenMenuSlider} />
                    <SliderNavLink href={"#exotic-desserts"} name="Exotic desserts" setIsOpenMenuSlider={setIsOpenMenuSlider} />
                </div>
                <h4 className="text-xl font-bold border-b-1 text-white mt-8 mb-4 pb-2">{"Follow Us"}</h4>
                <div className="flex space-x-5 justify-start items-center mb-14">
                    <Link href="#" className="block text-yellow-50 transition-all duration-500 hover:text-indigo-600 ">
                        <svg className="w-[1.588rem] h-[1.588rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                            <path d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z" fill="currentColor"/>
                        </svg>
                    </Link>
                    <Link href="#" className="block text-yellow-50 transition-all duration-500 hover:text-indigo-600 ">
                        <svg className="w-[1.570rem] h-[1.570rem] " viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.76556 14.8811C9.76556 12.3243 11.8389 10.2511 14.3972 10.2511C16.9555 10.2511 19.03 12.3243 19.03 14.8811C19.03 17.4379 16.9555 19.5111 14.3972 19.5111C11.8389 19.5111 9.76556 17.4379 9.76556 14.8811ZM7.26117 14.8811C7.26117 18.82 10.456 22.0129 14.3972 22.0129C18.3385 22.0129 21.5333 18.82 21.5333 14.8811C21.5333 10.9422 18.3385 7.7493 14.3972 7.7493C10.456 7.7493 7.26117 10.9422 7.26117 14.8811ZM20.1481 7.46652C20.148 7.79616 20.2457 8.11843 20.4288 8.39258C20.6119 8.66674 20.8723 8.88046 21.177 9.00673C21.4817 9.133 21.8169 9.16614 22.1405 9.10196C22.464 9.03778 22.7612 8.87916 22.9945 8.64617C23.2278 8.41318 23.3868 8.11627 23.4513 7.79299C23.5157 7.46972 23.4829 7.13459 23.3568 6.83C23.2307 6.5254 23.017 6.26502 22.7428 6.08178C22.4687 5.89853 22.1463 5.80065 21.8164 5.80052H21.8158C21.3737 5.80073 20.9497 5.9763 20.637 6.28867C20.3243 6.60104 20.1485 7.02467 20.1481 7.46652ZM8.78274 26.1863C7.42782 26.1246 6.69138 25.8991 6.20197 25.7085C5.55314 25.4561 5.0902 25.1554 4.60346 24.6696C4.11672 24.1839 3.81543 23.7216 3.56395 23.0732C3.37317 22.5843 3.14748 21.8481 3.08588 20.494C3.01851 19.03 3.00506 18.5902 3.00506 14.8812C3.00506 11.1722 3.01962 10.7336 3.08588 9.26841C3.14759 7.9143 3.37495 7.17952 3.56395 6.68919C3.81654 6.04074 4.11739 5.57808 4.60346 5.09163C5.08953 4.60519 5.55203 4.30408 6.20197 4.05274C6.69116 3.86208 7.42782 3.63652 8.78274 3.57497C10.2476 3.50763 10.6877 3.49419 14.3972 3.49419C18.1068 3.49419 18.5473 3.50874 20.0134 3.57497C21.3683 3.63663 22.1035 3.86385 22.5941 4.05274C23.243 4.30408 23.7059 4.60585 24.1926 5.09163C24.6794 5.57741 24.9796 6.04074 25.2322 6.68919C25.4229 7.17808 25.6486 7.9143 25.7102 9.26841C25.7776 10.7336 25.7911 11.1722 25.7911 14.8812C25.7911 18.5902 25.7776 19.0287 25.7102 20.494C25.6485 21.8481 25.4217 22.5841 25.2322 23.0732C24.9796 23.7216 24.6787 24.1843 24.1926 24.6696C23.7066 25.155 23.243 25.4561 22.5941 25.7085C22.105 25.8992 21.3683 26.1247 20.0134 26.1863C18.5485 26.2536 18.1084 26.2671 14.3972 26.2671C10.686 26.2671 10.2472 26.2536 8.78274 26.1863ZM8.66768 1.0763C7.18823 1.14363 6.17729 1.37808 5.29443 1.72141C4.3801 2.07597 3.60608 2.55163 2.83262 3.32341C2.05916 4.09519 1.58443 4.86997 1.22966 5.78374C0.88612 6.66663 0.651535 7.67641 0.584162 9.15497C0.515676 10.6359 0.5 11.1093 0.5 14.8811C0.5 18.6529 0.515676 19.1263 0.584162 20.6072C0.651535 22.0859 0.88612 23.0955 1.22966 23.9784C1.58443 24.8916 2.05927 25.6673 2.83262 26.4387C3.60597 27.2102 4.3801 27.6852 5.29443 28.0407C6.17896 28.3841 7.18823 28.6185 8.66768 28.6859C10.1502 28.7532 10.6232 28.77 14.3972 28.77C18.1713 28.77 18.645 28.7543 20.1268 28.6859C21.6063 28.6185 22.6166 28.3841 23.5 28.0407C24.4138 27.6852 25.1884 27.2105 25.9618 26.4387C26.7353 25.667 27.209 24.8916 27.5648 23.9784C27.9083 23.0955 28.144 22.0857 28.2103 20.6072C28.2777 19.1252 28.2933 18.6529 28.2933 14.8811C28.2933 11.1093 28.2777 10.6359 28.2103 9.15497C28.1429 7.6763 27.9083 6.66608 27.5648 5.78374C27.209 4.87052 26.7341 4.09641 25.9618 3.32341C25.1896 2.55041 24.4138 2.07597 23.5011 1.72141C22.6166 1.37808 21.6062 1.14252 20.1279 1.0763C18.6461 1.00897 18.1724 0.992188 14.3983 0.992188C10.6243 0.992188 10.1502 1.00785 8.66768 1.0763Z" fill="currentColor"/>
                            </svg>
                            
                    </Link>
                    <Link href="#" className="block text-yellow-50 transition-all duration-500 hover:text-indigo-600 ">
                        <svg className="w-[0.838rem] h-[1.525rem]" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.7926 14.4697L14.5174 9.86889H10.0528V6.87836C10.0528 5.62033 10.6761 4.39105 12.6692 4.39105H14.7275V0.473179C13.5289 0.282204 12.3177 0.178886 11.1037 0.164062C7.42917 0.164062 5.0302 2.37101 5.0302 6.36077V9.86889H0.957031V14.4697H5.0302V25.5979H10.0528V14.4697H13.7926Z" fill="currentColor"/>
                        </svg>
                    </Link>
                    <Link href="#" className="block text-yellow-50 transition-all duration-500 hover:text-indigo-600 ">
                        <svg className="w-[1.775rem] h-[1.275rem]" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M26.3106 1.27838C27.5782 1.62071 28.5745 2.61957 28.9113 3.88573C29.524 6.18356 29.524 10.9809 29.524 10.9809C29.524 10.9809 29.524 15.7782 28.9113 18.076C28.5698 19.3469 27.5735 20.3457 26.3106 20.6834C24.0186 21.2977 14.8226 21.2977 14.8226 21.2977C14.8226 21.2977 5.63122 21.2977 3.33456 20.6834C2.06695 20.3411 1.07063 19.3422 0.73385 18.076C0.121094 15.7782 0.121094 10.9809 0.121094 10.9809C0.121094 10.9809 0.121094 6.18356 0.73385 3.88573C1.07531 2.61488 2.07162 1.61602 3.33456 1.27838C5.63122 0.664062 14.8226 0.664062 14.8226 0.664062C14.8226 0.664062 24.0186 0.664062 26.3106 1.27838ZM19.5234 10.9809L11.885 15.403V6.55872L19.5234 10.9809Z" fill="currentColor"/>
                        </svg>    
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}