import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function Dashboard({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    console.log(collapsed);
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link to="/"> Product</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            <Link to="add">Add Product</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<EditOutlined />}>
            <Link to="edit/:id">Edit Product</Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="Anggota">
            <Menu.Item key="3">Evan Bebek</Menu.Item>
            <Menu.Item key="4">Indra sales mandiri</Menu.Item>
            <Menu.Item key="5">Akbar si Laper</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team RRQ</Menu.Item>
            <Menu.Item key="8">Team Evos</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Kantor
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>{children}</Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Dashboard;
