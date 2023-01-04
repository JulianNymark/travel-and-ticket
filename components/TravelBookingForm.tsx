import React from 'react';
import { Button, Checkbox, DatePicker, Form, Input } from 'antd';
import { APISearch } from '../utils/requests';

export const TravelBookingForm: React.FC<{setTripData: any}> = ({setTripData}) => {
  const onFinish = async (values: any) => {
    console.log('Success:', values);
    const tripData = await (await APISearch(values)).json();
    setTripData(tripData);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="From"
        name="from"
        rules={[{ required: true, message: 'Please input your current location!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="To"
        name="to"
        rules={[{ required: true, message: 'Please input your target destination!' }]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item
        label="Start"
        name="startTime">
        <DatePicker showTime />
      </Form.Item>

      <Form.Item
        label="End"
        name="endTime">
        <DatePicker showTime />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Search
        </Button>
      </Form.Item>
    </Form>
  );
};
