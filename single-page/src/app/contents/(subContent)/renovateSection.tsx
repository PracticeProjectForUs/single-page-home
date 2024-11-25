import { capitalizeWords } from "@/app/(shareFunction)/(capital)/capitalIncludeSecond";
import Link from "next/link";



interface CardDetailProps {
    key: string
    width?: number
    path?: string
    alt?: string
    title?: string
    description?: string
}
export default function RenovateSection() {
    return (
        <div className="w-3/5">
            <header className="flex justify-between items-end">
                <p className="text-2xl font-bold">Renovate Room</p>
                <p className="hover:cursor-pointer underline">
                    <Link href="#">{capitalizeWords("view all")}</Link>
                </p>
            </header>
        </div>
    )
}