import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Sidebar extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={{ background: '#fff' }} >
                    <div className="logo1">Blog</div>
                    <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Icon type="dashboard" />
                            <span>Dashboard</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="container" />
                            <span>Post</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="message" />
                            <span>Comments</span>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Icon type="cluster" />
                            <span>Subscribers</span>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Icon type="stock" />
                            <span>Analytics</span>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Icon type="user" />
                            <span>Users</span>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <Icon type="tool" />
                            <span>Tools</span>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <Icon type="setting" />
                            <span>Settings</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Content style={{ margin: '16px' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Sidebar
