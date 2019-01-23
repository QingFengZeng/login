import { Menu, Dropdown } from 'antd';
import React, { Component } from 'react'
import './Nav.css'

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menu:
                (<Menu>
                    <Menu.Item>
                        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
                    </Menu.Item>
                    <Menu.Item>
                        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
                    </Menu.Item>
                    <Menu.Item>
                        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
                    </Menu.Item>
                </Menu>)
        }
    }

    render() {
        return (
            <div className="navbar">
                <div className="Nav_logo">SANO</div>
                <Dropdown overlay={this.state.menu}>
                    <a className="ant-dropdown-link Nav_Title_Ul" href="javascrpt:;">
                        轻纺标准 
                    </a>
                </Dropdown>
                <div>
                    <a href="javascrpt:;" className="Nav_login">登录</a>
                </div>
            </div>
        )

    }
}

export default Nav;

