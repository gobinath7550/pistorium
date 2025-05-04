import Image from "next/image";

export default function Thumbnail({ width, height }:{ width: number, height: number }) {
    return (
        <div className="w-28 h-28 md:w-40 md:h-40 overflow-hidden">
            <Image 
                className="rounded-xl w-full h-full object-cover object-center"
                src="/products/opera/opera_cake-main.jpeg"
                alt="Opera Cake"
                width={width}
                height={height}
                priority
            />
        </div>
    )
}