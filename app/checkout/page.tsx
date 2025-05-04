"use client";

import Thumbnail from "../_components/theme/global/Thumbnail";

export default function Checkout() {
    return (
        <div className="mx-auto max-w-[95rem] pt-6 lg:pt-10 px-4 sm:px-6 lg:px-10">
            <div className="min-h-dvh flex flex-col items-center justify-center">
                <section className="border-b-2 mb-6 pb-4 w-full flex justify-between items-center">
                    <h2 className="text-2xl md:text-4xl">
                        <span className="font-bold font-pacifico">{"Pistorium "}</span>
                        <span>{"| Checkout"}</span>
                    </h2>
                    <a href="#" className="w-8 h-8" role="button">
                        <svg className="text-[var(--backgound)]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g> <path d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11M4 7H20M4 7V13C4 19.3668 5.12797 20.5 12 20.5C18.872 20.5 20 19.3668 20 13V7M4 7L5.44721 4.10557C5.786 3.428 6.47852 3 7.23607 3H16.7639C17.5215 3 18.214 3.428 18.5528 4.10557L20 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    </a>
                </section>
                <section className="w-full font-poppins">
                    <div className="grid md:grid-cols-2 gap-5 md:gap-10">
                        <div className="bg-[#fbffd1] rounded-lg p-4 md:p-8 order-2 md:order-1">
                            <form>
                                <h4 className="my-5 mt-0 border-b-2 pb-2 text-lg font-bold text-[#b7b7b7]">{"Customer Details"}</h4>
                                <div className="relative">
                                    <label className="absolute top-1 left-2">
                                        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#b7b7b7]" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g> <path d="M21 8L17.4392 9.97822C15.454 11.0811 14.4614 11.6326 13.4102 11.8488C12.4798 12.0401 11.5202 12.0401 10.5898 11.8488C9.53864 11.6326 8.54603 11.0811 6.5608 9.97822L3 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                                    </label>
                                    <input type="email" name="email" className="outline-2 outline-[#b7b7b7] focus:outline-[var(--background)] placeholder:text-[#b7b7b7] w-full rounded-md p-2 pl-12" placeholder="Email" />
                                </div>
                                <div className="mt-6 md:flex md:gap-6">
                                    <div className="relative">
                                        <label className="absolute top-1 left-2">
                                            <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#b7b7b7]" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g> <path d="M13 7H5.2C4.0799 7 3.51984 7 3.09202 7.21799C2.71569 7.40973 2.40973 7.71569 2.21799 8.09202C2 8.51984 2 9.0799 2 10.2V13.8C2 14.9201 2 15.4802 2.21799 15.908C2.40973 16.2843 2.71569 16.5903 3.09202 16.782C3.51984 17 4.07989 17 5.2 17H13M17 7H18.8C19.9201 7 20.4802 7 20.908 7.21799C21.2843 7.40973 21.5903 7.71569 21.782 8.09202C22 8.51984 22 9.0799 22 10.2V13.8C22 14.9201 22 15.4802 21.782 15.908C21.5903 16.2843 21.2843 16.5903 20.908 16.782C20.4802 17 19.9201 17 18.8 17H17M17 21L17 3M19.5 3.00001L14.5 3M19.5 21L14.5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                        </label>
                                        <input type="text" name="fname" className="outline-2 outline-[#b7b7b7] focus:outline-[var(--background)] placeholder:text-[#b7b7b7] w-full rounded-md p-2 pl-12" placeholder="First Name" />
                                    </div>
                                    <div className="relative mt-6 md:mt-0">
                                        <label className="absolute top-1 left-2">
                                            <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#b7b7b7]" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g> <path d="M13 7H5.2C4.0799 7 3.51984 7 3.09202 7.21799C2.71569 7.40973 2.40973 7.71569 2.21799 8.09202C2 8.51984 2 9.0799 2 10.2V13.8C2 14.9201 2 15.4802 2.21799 15.908C2.40973 16.2843 2.71569 16.5903 3.09202 16.782C3.51984 17 4.07989 17 5.2 17H13M17 7H18.8C19.9201 7 20.4802 7 20.908 7.21799C21.2843 7.40973 21.5903 7.71569 21.782 8.09202C22 8.51984 22 9.0799 22 10.2V13.8C22 14.9201 22 15.4802 21.782 15.908C21.5903 16.2843 21.2843 16.5903 20.908 16.782C20.4802 17 19.9201 17 18.8 17H17M17 21L17 3M19.5 3.00001L14.5 3M19.5 21L14.5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                        </label>
                                        <input type="text" name="lname" className="outline-2 outline-[#b7b7b7] focus:outline-[var(--background)] placeholder:text-[#b7b7b7] w-full rounded-md p-2 pl-12" placeholder="Last Name" />
                                    </div>
                                </div>
                                <h4 className="my-5 mt-10 border-b-2 pb-2 text-lg font-bold text-[#b7b7b7]">{"Delivery Address"}</h4>
                                <div className="relative">
                                    <label className="absolute top-1 left-2">
                                        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#b7b7b7]" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g > <g > <path d="M4 18H14M4 14H20M4 10H14M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>
                                    </label>
                                    <input type="text" name="address1" className="outline-2 outline-[#b7b7b7] focus:outline-[var(--background)] placeholder:text-[#b7b7b7] w-full rounded-md p-2 pl-12" placeholder="Address Line 1" />
                                </div>
                                <div className="mt-5 relative">
                                    <label className="absolute top-1 left-2">
                                        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#b7b7b7]" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g > <g > <path d="M4 18H14M4 14H20M4 10H14M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>
                                    </label>
                                    <input type="text" name="address1" className="outline-2 outline-[#b7b7b7] focus:outline-[var(--background)] placeholder:text-[#b7b7b7] w-full rounded-md p-2 pl-12" placeholder="Address Line 2" />
                                </div>
                                <div className="mt-5 flex gap-6">
                                    <div className="relative">
                                        <label className="absolute top-1 left-2">
                                            <svg className="w-8 h-8 text-[#b7b7b7]" fill="currentColor" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><path d="M10 4L10 20L2.9941406 20L3.1464844 46L17.046875 46L19.046875 46L33 46L47 46L47 8L31 8L31 9L31 28L25.996094 28L25.996094 4.0078125L10 4 z M 12 6L23.996094 6.0078125L23.996094 28L19.013672 28L18.998047 20L18 20L12 20L12 6 z M 15 8L15 10L17 10L17 8L15 8 z M 19.039062 8L19.039062 10L21 10L21 8L19.039062 8 z M 33 10L45 10L45 44L39.960938 44L39.960938 40L38 40L38 44L33 44L33 28L33 10 z M 15 12L15 14L17 14L17 12L15 12 z M 19 12L19 14L21 14L21 12L19 12 z M 36 12.003906L36 14L38 14L38 12.003906L36 12.003906 z M 40.019531 12.007812L40.019531 14.021484L41.980469 14.021484L41.980469 12.007812L40.019531 12.007812 z M 36 16.015625L36 18L38 18L38 16.015625L36 16.015625 z M 40.019531 16.015625L40.019531 18L41.980469 18L41.980469 16.015625L40.019531 16.015625 z M 36 20L36 22L38 22L38 20L36 20 z M 40 20L40 22L41.980469 22L41.980469 20L40 20 z M 5.0058594 22L17.001953 22L17.013672 28L16.998047 28L17.041016 44L11.980469 44L11.980469 40L10.019531 40L10.019531 44L5.1347656 44L5.0058594 22 z M 8 24L8 26.015625L10.039062 26.015625L10.039062 24L8 24 z M 12.039062 24L12.039062 26.015625L14 26.015625L14 24L12.039062 24 z M 36 24.007812L36 25.998047L38 25.998047L38 24.007812L36 24.007812 z M 40 24.007812L40 25.998047L41.980469 25.998047L41.980469 24.007812L40 24.007812 z M 8 27.984375L8 30L10.039062 30L10.039062 27.984375L8 27.984375 z M 12.039062 27.984375L12.039062 30L14 30L14 27.984375L12.039062 27.984375 z M 36 27.992188L36 30.007812L38 30.007812L38 27.992188L36 27.992188 z M 40.019531 27.992188L40.019531 30.007812L41.980469 30.007812L41.980469 27.992188L40.019531 27.992188 z M 19.017578 30L31 30L31 44L26 44L26 40L24 40L24 44L19.042969 44L19.017578 30 z M 8 32L8 34.015625L10.039062 34.015625L10.039062 32L8 32 z M 12.039062 32L12.039062 34.015625L14 34.015625L14 32L12.039062 32 z M 22 32L22 34.015625L24 34.015625L24 32L22 32 z M 26 32L26 34.015625L28 34.015625L28 32L26 32 z M 36 32L36 34.015625L38 34.015625L38 32L36 32 z M 40.019531 32L40.019531 34.015625L41.980469 34.015625L41.980469 32L40.019531 32 z M 22 35.984375L22 38L24 38L24 35.984375L22 35.984375 z M 26 35.984375L26 38L28 38L28 35.984375L26 35.984375 z M 36 35.984375L36 38L38 38L38 35.984375L36 35.984375 z M 40.019531 35.984375L40.019531 38L41.980469 38L41.980469 35.984375L40.019531 35.984375 z"></path></g></svg>
                                        </label>
                                        <input type="text" name="city" className="outline-2 outline-[#b7b7b7] focus:outline-[var(--background)] placeholder:text-[#b7b7b7] w-full rounded-md p-2 pl-12" placeholder="City" />
                                    </div>
                                    <div className="relative">
                                        <label className="absolute top-[5.5px] left-2">
                                            <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#b7b7b7]" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 16.5017C14.4853 16.5017 16.5 14.487 16.5 12.0017C16.5 9.5164 14.4853 7.50168 12 7.50168C9.51472 7.50168 7.5 9.5164 7.5 12.0017C7.5 14.487 9.51472 16.5017 12 16.5017ZM12 14.5034C10.6184 14.5034 9.49832 13.3833 9.49832 12.0017C9.49832 10.62 10.6184 9.5 12 9.5C13.3816 9.5 14.5017 10.62 14.5017 12.0017C14.5017 13.3833 13.3816 14.5034 12 14.5034Z" fill="currentColor"></path> <path fillRule="evenodd" clipRule="evenodd" d="M11 1C11 0.447715 11.4477 0 12 0C12.5523 0 13 0.447715 13 1V2.04938C17.7244 2.51844 21.4816 6.27558 21.9506 11H23C23.5523 11 24 11.4477 24 12C24 12.5523 23.5523 13 23 13H21.9506C21.4816 17.7244 17.7244 21.4816 13 21.9506V23C13 23.5523 12.5523 24 12 24C11.4477 24 11 23.5523 11 23V21.9506C6.27558 21.4816 2.51844 17.7244 2.04938 13H1C0.447715 13 0 12.5523 0 12C-1.19209e-07 11.4477 0.447715 11 1 11H2.04938C2.51844 6.27558 6.27558 2.51844 11 2.04938V1ZM12 20.0016C7.58083 20.0016 3.99839 16.4192 3.99839 12C3.99839 7.58083 7.58083 3.99839 12 3.99839C16.4192 3.99839 20.0016 7.58083 20.0016 12C20.0016 16.4192 16.4192 20.0016 12 20.0016Z" fill="currentColor"></path> </g></svg>
                                        </label>
                                        <input type="text" name="lname" className="outline-2 outline-[#b7b7b7] focus:outline-[var(--background)] placeholder:text-[#b7b7b7] w-full rounded-md p-2 pl-12" placeholder="State" />
                                    </div>
                                </div>
                                <div className="mt-5 flex gap-6">
                                    <div className="relative">
                                        <label className="absolute top-1 left-2">
                                            <svg viewBox="0 0 28 28" className="w-7 h-7 text-[#b7b7b7]" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path clipRule="evenodd" d="M10 7.88974C11.1046 7.88974 12 6.98912 12 5.87814C12 4.76716 11.1046 3.86654 10 3.86654C8.89543 3.86654 8 4.76716 8 5.87814C8 6.98912 8.89543 7.88974 10 7.88974ZM10 6.5822C10.3866 6.5822 10.7 6.26698 10.7 5.87814C10.7 5.4893 10.3866 5.17408 10 5.17408C9.6134 5.17408 9.3 5.4893 9.3 5.87814C9.3 6.26698 9.6134 6.5822 10 6.5822Z" fill="currentColor" fillRule="evenodd"></path><path clipRule="evenodd" d="M5.15 5.62669C5.15 3.0203 7.37393 1 10 1C12.6261 1 14.85 3.0203 14.85 5.62669C14.85 6.06012 14.8114 6.53528 14.7269 7.03578L18 7.8588L25.7575 5.90818C26.0562 5.83306 26.3727 5.90057 26.6154 6.09117C26.8581 6.28178 27 6.57423 27 6.88395V23.9826C27 24.4441 26.6877 24.8464 26.2425 24.9584L18.2425 26.97C18.0833 27.01 17.9167 27.01 17.7575 26.97L10 25.0193L2.24254 26.97C1.94379 27.0451 1.6273 26.9776 1.38459 26.787C1.14187 26.5964 1 26.3039 1 25.9942V8.89555C1 8.43402 1.3123 8.03172 1.75746 7.91978L5.2731 7.03578C5.18863 6.53528 5.15 6.06012 5.15 5.62669ZM10 2.70986C8.20779 2.70986 6.85 4.06691 6.85 5.62669C6.85 7.21686 7.5125 9.57287 9.40979 11.3615C9.74241 11.6751 10.2576 11.6751 10.5902 11.3615C12.4875 9.57287 13.15 7.21686 13.15 5.62669C13.15 4.06691 11.7922 2.70986 10 2.70986ZM5.80904 8.97453L3.22684 9.62382C3.09349 9.65735 3 9.77726 3 9.91476V24.3212C3 24.5165 3.18371 24.6598 3.37316 24.6121L8.77316 23.2543C8.90651 23.2208 9 23.1009 9 22.9634V13.2506C7.40353 12.024 6.39235 10.4792 5.80904 8.97453ZM11 13.2506V22.9634C11 23.1009 11.0935 23.2208 11.2268 23.2543L16.6268 24.6121C16.8163 24.6598 17 24.5165 17 24.3212V9.91477C17 9.77726 16.9065 9.65735 16.7732 9.62382L14.191 8.97453C13.6076 10.4792 12.5965 12.024 11 13.2506ZM25 22.9634C25 23.1009 24.9065 23.2208 24.7732 23.2543L19.3732 24.6121C19.1837 24.6598 19 24.5165 19 24.3212V9.91477C19 9.77726 19.0935 9.65736 19.2268 9.62382L24.6268 8.26599C24.8163 8.21835 25 8.36159 25 8.55693V22.9634Z" fill="currentColor" fillRule="evenodd"></path></g></svg>
                                        </label>
                                        <input type="text" name="city" className="outline-2 outline-[#b7b7b7] focus:outline-[var(--background)] placeholder:text-[#b7b7b7] w-full rounded-md p-2 pl-12" placeholder="Country" />
                                    </div>
                                    <div className="relative">
                                        <label className="absolute top-1 left-2">
                                            <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#b7b7b7]" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g> <path fillRule="evenodd" clipRule="evenodd" d="M12.2848 18.9935C12.1567 19.0875 12.0373 19.1728 11.9282 19.2493C11.8118 19.1721 11.6827 19.0833 11.5427 18.9832C10.8826 18.5109 10.0265 17.8176 9.18338 16.9529C7.45402 15.1792 6 12.9151 6 10.5C6 7.18629 8.68629 4.5 12 4.5C15.3137 4.5 18 7.18629 18 10.5C18 12.8892 16.4819 15.1468 14.6893 16.9393C13.8196 17.8091 12.9444 18.5099 12.2848 18.9935ZM19.5 10.5C19.5 16.5 12 21 12 21C11.625 21 4.5 16.5 4.5 10.5C4.5 6.35786 7.85786 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5ZM13.5 10.5C13.5 11.3284 12.8284 12 12 12C11.1716 12 10.5 11.3284 10.5 10.5C10.5 9.67157 11.1716 9 12 9C12.8284 9 13.5 9.67157 13.5 10.5ZM15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5Z" fill="currentColor"></path> </g></svg>
                                        </label>
                                        <input type="text" name="lname" className="outline-2 outline-[#b7b7b7] focus:outline-[var(--background)] placeholder:text-[#b7b7b7] w-full rounded-md p-2 pl-12" placeholder="Pincode" />
                                    </div>
                                </div>
                                <div className="mt-5 relative">
                                    <label className="absolute top-1 left-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" xmlnsXlink="http://www.w3.org/1999/xlink" width="900" height="600" viewBox="-45 -30 90 60" fill="#07038D">
                                            <path fill="#FFF" d="m-45-30h90v60h-90z"/>
                                            <path fill="#FF6820" d="m-45-30h90v20h-90z"/>
                                            <path fill="#046A38" d="m-45 10h90v20h-90z"/>
                                            <circle r="9.25"/>
                                            <circle fill="#FFF" r="8"/>
                                            <circle r="1.6"/>
                                            <g id="d">
                                                <g id="c">
                                                    <g id="b">
                                                        <g id="a">
                                                            <path d="m0-8 .3 4.81409L0-.80235-.3-3.18591z"/>
                                                            <circle transform="rotate(7.5)" r="0.35" cy="-8"/>
                                                        </g>
                                                        <use xlinkHref="#a" transform="scale(-1)"/>
                                                    </g>
                                                    <use xlinkHref="#b" transform="rotate(15)"/>
                                                </g>
                                                <use xlinkHref="#c" transform="rotate(30)"/>
                                            </g>
                                            <use xlinkHref="#d" transform="rotate(60)"/>
                                            <use xlinkHref="#d" transform="rotate(120)"/>
                                        </svg>
                                    </label>
                                    <input type="number" name="address1" className="outline-2 outline-[#b7b7b7] focus:outline-[var(--background)] placeholder:text-[#b7b7b7] w-full rounded-md p-2 pl-12" placeholder="Phone" />
                                </div>
                                <h4 className="my-5 mt-10 border-b-2 pb-2 text-lg font-bold text-[#b7b7b7]">{"Shipment"}</h4>
                                <div className="flex justify-start items-center gap-3">
                                    <input id="shpping-1" type="radio" name="payment" className="w-4 h-4" value="rarozpay" />
                                    <label htmlFor="shpping-1">Free</label>
                                </div>
                                <div className="mt-3 flex justify-start items-center gap-3">
                                    <input id="shpping-2" type="radio" name="payment" className="w-4 h-4" value="rarozpay" />
                                    <label htmlFor="shpping-2">{"Gift Wrap (Rs.50)"}</label>
                                </div>
                                <h4 className="my-5 mt-10 border-b-2 pb-2 text-lg font-bold text-[#b7b7b7]">{"Payment"}</h4>
                                <div className="flex justify-start items-center gap-3">
                                    <input id="payment-1" type="radio" name="payment" className="w-4 h-4" value="rarozpay" />
                                    <label htmlFor="payment-1">Razorpay</label>
                                </div>
                                <div className="mt-6 flex justify-start items-center gap-3">
                                    <button className="bg-[var(--background)] w-full flex gap-2 items-center justify-center text-yellow-50 font-bold font-poppins text-md md:text-xl px-6 py-6 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-100 focus:ring-offset-2">
                                        {"Pay Now"}
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="p-2 md:p-0 order-1 md:order-2">
                            <h3 className="text-xl md:text-3xl text-left font-extrabold border-b-2 mb-4 pb-3">{"Summary"}</h3>
                            <div className="grid grid-cols-4 gap-2 md:gap-4 rounded-lg">
                                <div className="col-span-1 w-full overflow-hidden rounded-lg">
                                    <Thumbnail width={144} height={144} />
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
                        </div>
                    </div>
                </section>
                <section className="w-full my-6 mt-8 md:mt-12">
                    <p className="text-sm text-[var(--background)] text-center block">
                        <a href="https://pagedone.io/">{"Pistorium @"}</a> {"2024, All rights reserved."}
                    </p>
                </section>
            </div>
        </div>
    )
}