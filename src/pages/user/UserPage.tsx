import React from 'react';
import { useState } from 'react';
import { useStore } from 'effector-react';
import style from './UserPage.module.css'
import {Layout, Menu, Breadcrumb, Image} from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { DonutChart } from '../../components/charts/index'
import logo from "../../images/logo_sider.png";
import {$currentUser} from "../../store/users";
import {BarChart} from "../../components/charts/bar/BarChart";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const UserPage = () => {
  const currentUser = useStore($currentUser)
  console.log(currentUser)
  const [state, setState] = useState(false)

  const handleCollapse = () => {
    setState(!state);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={state} onCollapse={handleCollapse}>
        <div className={style.logoContainer}>
          <Image
            width={150}
            src={logo}
            preview={false}
            alt="more bread logo"
          />
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>{currentUser}</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360, width: 1600, height: 6000 }}>
            {currentUser ? `Привет, ${currentUser}` : `Необходимо авторизоваться`}
            <BarChart/>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Больше хлеба ©2022</Footer>
      </Layout>
    </Layout>
  );
}