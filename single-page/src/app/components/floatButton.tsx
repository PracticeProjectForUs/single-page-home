'use client'
import { useState } from "react";
import { ConfigProvider } from 'antd';
import { CreditCardOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

export default function FloatButtonHold() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#B2BCE7',
                },
            }}
        >
            <FloatButton.Group
                open={open}
                onOpenChange={setOpen}
                trigger="click"
                style={{ insetInlineEnd: 24 }}
                icon={<CreditCardOutlined />}
                type="primary"
            >
                <FloatButton />
                <FloatButton />
                <FloatButton />
                <FloatButton />
            </FloatButton.Group>
        </ConfigProvider>
    );
}
