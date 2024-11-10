'use client';

import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

export type MenuItem = {
  key: string;
  label: JSX.Element;
  icon?: JSX.Element;
  disabled?: boolean;
};

interface DropdownMenuProps {
  items: MenuItem[];
}

export default function DropdownMenu({ items }: DropdownMenuProps) {
  return (
    <Dropdown menu={{ items }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          More
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
}
