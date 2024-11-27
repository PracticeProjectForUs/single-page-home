import Card from "@/app/(shareComponents)/(cardDetail)/card";
import { capitalizeWords } from "@/app/(shareFunction)/(capital)/capitalIncludeSecond";
import Pagination from "@/app/(shareComponents)/(pagination)/pagination";
import Link from "next/link";



interface CardDetailProps {
    key: string
    height?: number
    width?: number
    path?: string
    alt: string
}
export default function RenovateSection() {
    const items: CardDetailProps[] = [
        {
            key: "1",
            width: 435,
            height: 435,
            path: "/images/renovate-room/renovate-1.png",
            alt: "renovate1"
        },
        {
            key: "2",
            width: 200,
            height: 200,
            path: "/images/renovate-room/renovate-2.png",
            alt: "renovate2"
        },
        {
            key: "3",
            width: 200,
            height: 200,
            path: "/images/renovate-room/renovate-3.png",
            alt: "renovate3"
        },
        {
            key: "4",
            width: 200,
            height: 200,
            path: "/images/renovate-room/renovate-4.png",
            alt: "renovate4"
        },
        {
            key: "5",
            width: 200,
            height: 200,
            path: "/images/renovate-room/renovate-5.png",
            alt: "renovate5"
        },
        {
            key: "6",
            width: 200,
            height: 200,
            path: "/images/renovate-room/renovate-6.png",
            alt: "renovate6"
        },
        {
            key: "7",
            width: 200,
            height: 200,
            path: "/images/renovate-room/renovate-7.png",
            alt: "renovate7"
        }
    ]
    return (
        <div className="w-3/5">
            <header className="flex justify-between items-end">
                <p className="text-2xl font-bold">Renovate Room</p>
                <p className="hover:cursor-pointer underline">
                    <Link href="#">{capitalizeWords("view all")}</Link>
                </p>
            </header>
            <div className="flex flex-row">
                <div className="flex items-center justify-center mr-8 ">
                    <Card 
                        key={items[0].key} 
                        height={items[0].height} 
                        width={items[0].width} 
                        path={items[0].path} 
                        alt={items[0].alt}
                    />
                </div>
                <div className="flex justify-center">
                    <div className="grid grid-cols-3 gap-4">
                        {items.slice(1).map((item) => (
                            <Card 
                                key={item.key} 
                                height={item.height} 
                                width={item.width} 
                                path={item.path} 
                                alt={item.alt}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex justify-end mt-4">
                <Pagination />
            </div>
        </div>
    )
}