import React, { Component } from 'react';
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import {Drawer, Button, Icon, Menu} from 'antd';

class Navbar extends Component {

    state = {
        current: 'mail',
        visible: false
    };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div>
                <nav className="menuBar">
                    <div className="logo">
                        <a href="">MiniXplore</a>
                    </div>
                    <div className="menuCon">
                        <div className="leftMenu">
                            <LeftMenu />
                        </div>
                        <div className="rightMenu">
                            <RightMenu />
                        </div>

                        {/*<Icon type="bars" style={{ fontSize: '20px', color: 'green', fontWeight: 'bold' }} />*/}

                        {/*<Drawer*/}
                        {/*    title="Basic Drawer"*/}
                        {/*    placement="left"*/}
                        {/*    closable={false}*/}
                        {/*    onClose={this.onClose}*/}
                        {/*    visible={this.state.visible}*/}
                        {/*>*/}
                        {/*    <Menu mode="vertical">*/}
                        {/*        <Menu.Item key="home">*/}
                        {/*            <a href="">Home</a>*/}
                        {/*        </Menu.Item>*/}
                        {/*        <Menu.Item key="categories">*/}
                        {/*            <a href="/categories/">Categories</a>*/}
                        {/*        </Menu.Item>*/}
                        {/*        <Menu.Item key="topics">*/}
                        {/*            <a href="/categories/topics/">Topics</a>*/}
                        {/*        </Menu.Item>*/}
                        {/*        <Menu.Item key="mail">*/}
                        {/*            <a href="/login/">Signin</a>*/}
                        {/*        </Menu.Item>*/}
                        {/*        <Menu.Item key="app">*/}
                        {/*            <a href="/signup/">Signup</a>*/}
                        {/*        </Menu.Item>*/}
                        {/*    </Menu>*/}
                        {/*</Drawer>*/}
                        </div>
                </nav>

            </div>
        );
    }
}

export default Navbar;