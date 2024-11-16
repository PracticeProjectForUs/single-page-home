'use client'

import { Input, Space } from 'antd';
import type { GetProps } from 'antd';

type SearchProps = GetProps<typeof Input.Search>;
const { Search } = Input;

const onSearch: SearchProps['onSearch'] = (value) => console.log(value);

export default function SearchBar() {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <Space direction="vertical">
                <Search
                    placeholder="search"
                    onSearch={onSearch}
                    style={{ width: 588 }}
                    size="large" 
                />
            </Space>
        </div>
    );
}
