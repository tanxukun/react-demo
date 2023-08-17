import './css/index.scss';
import * as React from 'react';
import { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Link, Route, Routes } from 'react-router-dom';
import Demo1 from './app/Demo1';
import Demo2 from './app/Demo2';
import { useSelector } from 'react-redux';

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [nav, setNav] = useState<string>(location.pathname.replace('/', '') || 'demo1');
    const title = useSelector((state: any) => state.title.value);
    const {
      token: { colorBgContainer },
    } = theme.useToken();
  
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical">{title}</div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[nav]}
            items={[
              {
                key: 'demo1',
                icon: <UserOutlined />,
                label: <Link to='/'>nav 1</Link>,
              },
              {
                key: 'demo2',
                icon: <VideoCameraOutlined />,
                label: <Link to='/demo2'>nav 2</Link>,
              },
              {
                key: 'demo3',
                icon: <UploadOutlined />,
                label: <Link to='/demo15'>nav 3</Link>,
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Routes>
                <Route path='/' element={<Demo1 />}></Route>
                <Route path='/demo2' element={<Demo2 />}></Route>
                <Route path='*' element={<Demo1 />}></Route>
            </Routes>
          </Content>
        </Layout>
      </Layout>
    );
  };

  export default App;