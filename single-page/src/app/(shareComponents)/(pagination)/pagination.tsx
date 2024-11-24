'use client'
import { Pagination as AntdPagination } from 'antd';

export default function MyPagination() {
    return <div>
        <AntdPagination defaultCurrent={1} total={50} />
    </div>
}