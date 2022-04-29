import React from 'react'

const Post = () => {
  return (
    <div>
                <Form layout='vertical'>
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
    </div>
  )
}

export default Post