import { capitalizeWords } from "@/app/(shareFunction)/(capital)/capitalIncludeSecond";

interface BoxDetailProps {
    key: string;
    title: string;
    description: string;
    colorBg: string;
    icon?: JSX.Element;
    width?: string
    height?: string
}

export default function BoxDetail({ key, title, description, colorBg, icon, width, height }: BoxDetailProps) {
    return (
        <div
            key={key}
            style={{ backgroundColor: `#${colorBg}` }}
            className={`"p-4 rounded-xl shadow w-${width} h-${height} relative`}
        >
            <div className="text-3xl text-white font-bold p-4">
                {capitalizeWords(title)}
            </div>
            <div className="text-white p-4">{description}</div>
            <div 
                className="absolute bottom-0 right-0 p-4 text-white">
                    {icon}
            </div>
        </div>
    );
}
