import { Button, Form, Input, message } from "antd";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const [form] = Form.useForm();
  let navigate = useNavigate();

  async function onFinish(value) {
    try {
      await axios.post(
        "https://618f1fd450e24d0017ce1601.mockapi.io/products",
        value
      );
      form.resetFields();
      message.success("data berhasil ditambahkan");
      navigate("/");
    } catch (error) {
      message.error(error.message);
    }
  }

  return (
    <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off">
      <Form.Item
        label="Nama Produk"
        name="product_name"
        rules={[
          {
            required: true,
            message: "silahkan masukan nama produk",
          },
        ]}
      >
        <Input placeholder="input nama produk" />
      </Form.Item>
      <Form.Item
        label="Harga"
        name="price"
        rules={[
          {
            required: true,
            message: "silahkan masukkan harga",
          },
        ]}
      >
        <Input input placeholder="input harga" />
      </Form.Item>
      <Form.Item
        label="Warna"
        name="color"
        rules={[
          {
            required: true,
            message: "silahkan masukan warna",
          },
        ]}
      >
        <Input placeholder="input warna" />
      </Form.Item>
      <Form.Item
        label="Brand/Merek"
        name="department"
        rules={[
          {
            required: true,
            message: "silahkan masukan nama brand/merek",
          },
        ]}
      >
        <Input placeholder="input nama brand/merek" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
