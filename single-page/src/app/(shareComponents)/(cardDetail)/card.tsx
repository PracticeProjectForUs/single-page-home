import Image from "next/image"

interface CardDetailProps {
    key?: string
    height?: number
    width?: number
    path?: string
    alt: string
    // title?: string
    // description?: string
}

export default function Card({key, height, width, path, alt}: CardDetailProps) {
    return (
        <div className='py-2 items-center'>
                <Image
                    key={key}
                    src={`${path}`} 
                    width={height} 
                    height={width} 
                    alt={alt}
                    className="rounded-lg hover:cursor-pointer hover:shadow-lg"
                />
        </div>
    )
}