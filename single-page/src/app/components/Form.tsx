import { Button, Form, Input, InputNumber } from 'antd';

export default function FormInput() {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };
      
      const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not a valid email!',
          number: '${label} is not a valid number!',
        },
        number: {
          range: '${label} must be between ${min} and ${max}',
        },
      };
      
      const onFinish = (values: any) => {
        console.log(values);
      };
      
    return (
        <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{ maxWidth: 600 }}
    validateMessages={validateMessages}
  >
    <Form.Item name={['user', 'firstName']} label="First Name" rules={[{ required: false }]}>
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'lastName']} label="Last Name" rules={[{ type: 'email' }]}>
      <Input />
    </Form.Item>
    {/* <Form.Item name={['user', 'number']} label="Phone Number" rules={[{ type: 'number', min: 0, max: 99 }]}>
      <InputNumber />
    </Form.Item> */}
    <Form.Item name={['user', 'number']} label="Phone Number" rules={[{ type: 'email' }]}>
      <Input />
    </Form.Item>
    {/* <Form.Item name={['user', 'website']} label="Website">
      <Input />
    </Form.Item> */}
    <Form.Item name={['user', 'text']} label="Comment">
      <Input.TextArea />
    </Form.Item>
    {/* <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item> */}
  </Form>
    )
}