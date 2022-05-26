import { Button, Form, Input, message } from "antd";
import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

export default function EditProduct() {
  const [form] = Form.useForm();
  let navigate = useNavigate();
  const { state } = useLocation();
  const { id } = useParams();

  console.log(id);
  console.log(state);

  form.setFieldsValue({
    product_name: state.product_name,
    price: state.price,
    color: state.color,
    department: state.department,
  });

  async function onFinish(value) {
    try {
      await axios.put(
        `https://618f1fd450e24d0017ce1601.mockapi.io/products/${id}`,
        value
      );
      form.resetFields();
      message.success("data berhasil diubah");
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
            message: "silahkan masukan brand/merek",
          },
        ]}
      >
        <Input placeholder="input nama brand/merek" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Edit
        </Button>
      </Form.Item>
    </Form>
  );
}
