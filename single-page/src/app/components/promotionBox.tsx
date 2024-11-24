import BoxDetail from "../(shareComponents)/(boxDetail)/boxDetail";

interface PropertyBox {
    key: string;
    title: string;
    description: string;
    colorBg: string;
    icon?: JSX.Element;
    width?: string;
    height?: string;
}

export default function PromotionBox() {
    const items: PropertyBox[] = [
        {
            key: "1",
            title: "title detail",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
            colorBg: "6578CE",
            icon: <i className="icon-pie-chart text-6xl" />,
            width: "full",
            height: "full",
        },
        {
            key: "2",
            title: "title detail",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
            colorBg: "E9BEA6",
            icon: <i className="icon-infomation text-6xl" />,
            width: "full",
            height: "full",
        },
        {
            key: "3",
            title: "title main",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
            colorBg: "EF4444",
            icon: <i className="icon-document text-6xl" />,
            width: "full",
            height: "full",
        },
    ];

    return (
        <div className="flex flex-row gap-4 justify-center w-3/5 h-[450px]">
            <div className="flex flex-col gap-4 w-2/5">
                <BoxDetail {...items[0]} />
                <BoxDetail {...items[1]} />
            </div>
            <div className="flex items-center w-3/5">
                <BoxDetail {...items[2]} />
            </div>
        </div>
    );
}
