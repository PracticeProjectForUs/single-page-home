'use client'
import { useState } from "react";
import { CreditCardOutlined } from '@ant-design/icons';
import { FloatButton, Switch } from 'antd';

export default function FloatButtonHold() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
          <FloatButton.Group
            open={open}
            onOpenChange={setOpen}
            trigger="click"
            style={{ insetInlineEnd: 24 }}
            icon={<CreditCardOutlined />}
            type="primary"
          >
            <FloatButton/>
            <FloatButton/>
            <FloatButton/>
            <FloatButton/>
          </FloatButton.Group>
        </>
    );
}
