export default function InfoList() {
    const items = [
        {
            id: '1',
            iconClass: 'icon-contact',
            header: '3D Sketch',
            body: 'Contrary to popular belief, Lorem Ipsum is not simply random text',
        },
        {
            id: '2',
            iconClass: 'icon-shield',
            header: 'Product',
            body: 'Contrary to popular belief, Lorem Ipsum is not simply random text',
        },
        {
            id: '3',
            iconClass: 'icon-star',
            header: 'Collection',
            body: 'Contrary to popular belief, Lorem Ipsum is not simply random text',
        },
    ]
    return (
        <div className="flex flex-row p-4 bg-white rounded-lg shadow-md h-full">
            {items.map((item) => (
                <div key={item.id} className="w-72 flex flex-row items-center">
                    <i className={`flex ${item.iconClass} text-[64px] items-center justify-center`} />
                    <div className="flex flex-col px-4">
                        <p className="text-xl">{item.header}</p>
                        <p className="text-xs">{item.body}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}