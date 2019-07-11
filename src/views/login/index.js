import React, {Component} from 'react';
import {connect} from 'dva';
import {Form, Icon, Input, Button, Layout, Avatar, message} from 'antd';
import './index.less';
@connect(state => ({login: state.login}))
@Form.create()
class Login extends Component {
	constructor(props) {
		super(props);
	}
	handleSubmit = e => {
		e.preventDefault();
		const {dispatch} = this.props;
		this.props.form.validateFields((err, values) => {
			if (!err) {
				const res = dispatch({
					type: 'login/goHome',
					payload: values
				}).then(result => {
					if (!result.success) {
						message.error(result.message);
					}
				})
			}
		});
	};
	render() {
		const {getFieldDecorator} = this.props.form;
		return (
			<Layout className="login">
				<Form onSubmit={this.handleSubmit} className="login-form">
					<Form.Item>
						{getFieldDecorator('userName', {
							rules: [{required: true, message: 'Please input your username!'}]
						})(
							<Input
								style={{width: 200}}
								prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />}
								placeholder="admin"
							/>,
						)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('password', {
							rules: [{required: true, message: 'Please input your Password!'}]
						})(
							<Input
								style={{width: 200}}
								prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}} />}
								type="password"
								placeholder="123"
							/>,
						)}
					</Form.Item>
					<Button style={{width: 200}} type="primary" htmlType="submit" className="login-form-button">
						登录
					</Button>
					<div>
						<p className='infomessage'>其他方式登录</p>
						<Avatar className='other-item'>Q</Avatar>
						<Avatar className='other-item'>W</Avatar>
						<Avatar className='other-item'>脸</Avatar>
					</div>
				</Form>
			</Layout>
		);
	}
}

export default Login;
