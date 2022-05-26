import { Table, message, Button } from "antd";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function Product() {
  const [product, setProduct] = useState([]);
  const [refect, setRefect] = useState(0);

  let navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://618f1fd450e24d0017ce1601.mockapi.io/products"
        );
        setProduct(response.data);
      } catch (e) {
        console.error(e);
      }
    }

    fetchData();
  }, [refect]);

  async function deleteProduct(id) {
    try {
      await axios.delete(
        `https://618f1fd450e24d0017ce1601.mockapi.io/products/${id}`
      );
      setRefect(refect + 1);
      message.success("BERHASIL delete");
    } catch (error) {
      console.log(error);
    }
  }

  const columns = [
    {
      title: "Nama Produk",
      dataIndex: "product_name",
      key: "product_name",
    },
    {
      title: "Harga",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Warna",
      dataIndex: "color",
      key: "color",
    },
    {
      title: "Brand/Merek",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Hapus Produk",
      render: (record) => {
        return (
          <Button
            onClick={() => deleteProduct(record.id)}
            type="primary"
            danger
            shape="circle"
            icon={<DeleteOutlined />}
          />
        );
      },
    },
    {
      title: "Edit Produk",
      render: (record) => {
        return (
          <Button
            onClick={() => navigate(`/edit/${record.id}`, { state: record })}
            type="primary"
            shape="circle"
            icon={<EditOutlined />}
          />
        );
      },
    },
  ];

  return (
    <div>
      <h2>ini halaman Product</h2>
      <Table scroll={{ x: 800 }} columns={columns} dataSource={product} />
    </div>
  );
}

export default Product;
