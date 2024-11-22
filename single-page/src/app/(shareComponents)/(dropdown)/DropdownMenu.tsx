'use client';

import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

export type MenuItem = {
  key: string;
  label: JSX.Element;
  icon?: JSX.Element;
  disabled?: boolean;
  title?: string;
};

interface DropdownMenuProps {
  items: MenuItem[];
  title: string;
}

export default function DropdownMenu({ items, title }: DropdownMenuProps) {
  return (
    <Dropdown menu={{ items }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {title}
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
}
