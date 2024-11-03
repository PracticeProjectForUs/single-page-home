'use client';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

interface MenuItem {
  key: string;
  label: JSX.Element;
  icon?: JSX.Element;
  disabled?: boolean;
}

export default function NavBar() {
  const items: MenuItem[] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
  ];

  return (
    <nav className="flex h-16 items-center">
      <div className="w-16">Logo</div>
      <ul className="flex gap-4">
        <li><a href="#">Model</a></li>
        <li><a href="#">Works and opinions</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <div>
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Hover me
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </ul>
    </nav>
  );
}
