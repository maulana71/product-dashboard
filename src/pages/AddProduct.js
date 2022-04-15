import React, { useState } from 'react';
import { Form, Input, Button, Radio } from 'antd';


        
export default function AddProduct ()  {

    return (
        <Form>
      
      <Form.Item label="Product Name">
        <Input name='product_name' placeholder="input nama product" />
      </Form.Item>
      <Form.Item label="Price">
        <Input name='price' placeholder="input harga" />
      </Form.Item>
      <Form.Item label="Color">
        <Input name='color' placeholder="input warna" />
      </Form.Item>
      <Form.Item label="Department">
        <Input name='department' placeholder="input department" />
      </Form.Item>
      <Form.Item >
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
    )
}
        
