import Image from "next/image";

export default function Backgroud() {
    return (
        <Image 
        src="/images/bg.png" 
        width={10000} 
        height={1000} 
        alt="background"
        className="w-full h-full"
        />
    )
}