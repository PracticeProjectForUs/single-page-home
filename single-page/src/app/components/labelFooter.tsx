import Image from "next/image";

export default function LabelFooter() {
    return (
        <div className="relative bg-[#d8c3b6] h-[223px] flex items-center justify-center">
            <Image 
                src="/images/label-footer/home1.png" 
                width={512} 
                height={294} 
                alt="background" 
                className="absolute left-0 bottom-0"
            />
            <div className="relative z-10 text-white text-center">
                <p className="text-4xl italic ">"Believe you can and you're halfway there."</p>
                <p className="text-4xl">— Theodore Roosevelt</p>
            </div>
        </div>
    );
}
