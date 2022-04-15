import { Table, Tag, Space } from 'antd';


function Product ()    {
    const columns = [
        {
          title: 'Product Name',
          dataIndex: 'product_name',
          key: 'product_name',
        },{
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
          },{
            title: 'Color',
            dataIndex: 'color',
            key: 'color',
          },{
            title: 'Departmen',
            dataIndex: 'department',
            key: 'department',
          },
      ];
      
      const data = [
        {
            "product_name": "IPhone X",
            "price": "922.00",
            "color": "lime",
            "department": "Electronics"
        },
        {
            "product_name": "Nokia neframe",
            "price": "922.00000000000000",
            "color": "limesssesese",
            "department": "Electronics enci"
          },
          {
            "product_name": "IPhone 12 promagh",
            "price": "92222e232.00",
            "color": "lime",
            "department": "Electronics"
          },


          
      ];
      
      
    return (
        <div>
            <h2>ini halaman Product</h2>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default Product;