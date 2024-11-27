import { capitalizeWords } from "@/app/(shareFunction)/(capital)/capitalIncludeSecond";
import CardDetail from "@/app/(shareComponents)/(cardDetail)/cardDetail";
import Link from "next/link";
import Pagination from "@/app/(shareComponents)/(pagination)/pagination";


interface CardDetailProps {
    key: string
    width?: number
    path?: string
    alt?: string
    title?: string
    description?: string
}
export default function ProjectSection() {
    const items: CardDetailProps[] = [
        {
            key: "1",
            width: 240,
            path: "/images/new-proj/new_project1.png",
            alt: "new_project1",
            title: "Europe Street beat",
            description: "www.pexels.com",
        },
        {
            key: "2",
            width: 240,
            path: "/images/new-proj/new_project2.png",
            alt: "new_project2",
            title: "Europe Street beat",
            description: "www.pexels.com",
        },
        {
            key: "3",
            width: 240,
            path: "/images/new-proj/new_project3.png",
            alt: "new_project3",
            title: "Europe Street beat",
            description: "www.pexels.com",
        },
        {
            key: "4",
            width: 240,
            path: "/images/new-proj/new_project4.png",
            alt: "new_project4",
            title: "Europe Street beat",
            description: "www.pexels.com",
        },
        {
            key: "5",
            width: 240,
            path: "/images/new-proj/new_project5.png",
            alt: "new_project5",
            title: "Europe Street beat",
            description: "www.pexels.com",
        },
        {
            key: "6",
            width: 240,
            path: "/images/new-proj/new_project6.png",
            alt: "new_project6",
            title: "Europe Street beat",
            description: "www.pexels.com",
        },
        {
            key: "7",
            width: 240,
            path: "/images/new-proj/new_project7.png",
            alt: "new_project7",
            title: "Europe Street beat",
            description: "www.pexels.com",
        },
        {
            key: "8",
            width: 240,
            path: "/images/new-proj/new_project8.png",
            alt: "new_project8",
            title: "Europe Street beat",
            description: "www.pexels.com",
        },
    ]
    return (
        <div className="w-3/5">
            <header className="flex justify-between items-end">
                <p className="text-2xl font-bold">New Project</p>
                <p className="hover:cursor-pointer underline">
                    <Link href="#">{capitalizeWords("view all")}</Link>
                </p>
            </header>
            <div className="flex flex-wrap justify-between">
                {items.map((item) => (
                    <CardDetail
                        key={item.key}
                        width={item.width}
                        path={item.path}
                        alt={item.alt}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
            <div className="flex justify-end mt-4">
                <Pagination />
            </div>
        </div>
    )
}