import { Col, Form, Input, InputNumber, Row } from "antd";
import React from "react";
import { AddProductsFormProps } from "./types";

type Props = {};

export const AddProductsForm = ({
  form,
  handleSubmit,
}: AddProductsFormProps) => {
  return (
    <Form layout="vertical" form={form} onFinish={handleSubmit}>
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true }]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>
      <Row>
        <Col span={12}>
          <Form.Item name="stock" label="Stock" rules={[{ required: true }]}>
            <InputNumber style={{ width: "80%" }} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="price" label="Price" rules={[{ required: true }]}>
            <InputNumber style={{ width: "80%" }} />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
