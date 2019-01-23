import {
    Form, Icon, Input, Button
} from 'antd';
import React from 'react'
import './Login.css'
import loginAjax from '../../ajax/ajax'
import Nav from '../nav/Nav'

// action
export function loginAction(id, pwd) {
    return async (dispatch, getState) => {
        // 先接收login接口返回的用户信息
        const userInfo = await loginAjax(id, pwd);
        await dispatch({
            type: "LOGIN",
            userInfo
        })
    }
}

// // reducer
// const defaultUserState = {
//     code: "",
//     msg: "",
// };

// export function userReducers(state = defaultUserState, action) {
//     switch (action.type) {
//         case "LOGIN":
//             // 使用登录的用户信息覆盖默认用户信息
//             return { ...state, ...action.userInfo };
//         default:
//             return state;
//     }
// }

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                loginAjax(values.id, values.pwd)
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="Login_Container">
                <Nav />
                <div className="login-form">
                    <Form onSubmit={this.handleSubmit}>
                        <div className="login-form-header">
                            <div className="header_logo">
                                <span>登录SANO</span>
                            </div>
                            <div className="wechat_login">
                                <a href="https://open.weixin.qq.com/connect/qrconnect?appid=wx6df83da3d6f3b3bf&redirect_uri=https%3A%2F%2Fwww.sanoind.com%2Fapi%2Fuser%2FloginTwo&response_type=code&scope=snsapi_login&state=https%3A%2F%2Fwww.sanoind.com%2Ffront%2Flogin#wechat_redirect" >微信登录个人账号</a>
                                <a href="https://open.weixin.qq.com/connect/qrconnect?appid=wx6df83da3d6f3b3bf&redirect_uri=https%3A%2F%2Fwww.sanoind.com%2Fapi%2Fuser%2FloginTwo&response_type=code&scope=snsapi_login&state=https%3A%2F%2Fwww.sanoind.com%2Ffront%2Flogin#wechat_redirect">微信登录公司账号</a>
                            </div>
                        </div>
                        <Form.Item>
                            {getFieldDecorator('id', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('pwd', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" block className="login-form-button" onClick={this.loginAjax}>
                                登录
                    </Button>
                        </Form.Item>
                    </Form>
                </div>

            </div>
        );
    }

}

const WrappedLogin = Form.create({ name: 'horizontal_login' })(Login);

export default WrappedLogin