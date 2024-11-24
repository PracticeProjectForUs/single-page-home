
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';

interface CardDetailProps {
    key: string
    width?: number
    path?: string
    alt?: string
    title?: string
    description?: string
}

export default function CardDetail({key, width, path, alt, title, description}: CardDetailProps) {
    return (
        <div className='py-4'>
            <Card
                key={key}
                hoverable
                style={{ width: width }}
                cover={<img alt={alt} src={`${path}`} />}
            >
                <Meta 
                    title={title} 
                    description={description} 
                />
            </Card>
        </div>
    )
}