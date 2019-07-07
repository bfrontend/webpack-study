import React, {Component} from 'react';
import {connect} from 'dva';
import {Layout, Menu, Icon, Avatar} from 'antd';
const { SubMenu } = Menu
import './index.less';

import GgEditor from '@/components/GgEditor'
import { Link, BrowserRouter } from 'dva/router';

const {Header, Content, Footer, Sider} = Layout;
@connect(state => ({home: state.home}))
class Home extends Component {
  selectMenu = ({keyPath}) => {
    this.props.history.push(keyPath[0])
  }
  render() {
    return (
      <Layout className="home">
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
        >
          <div className="logo">
            <Avatar
              size={80}
              src="https://imgoss.bfrontend.com/2019-06-30-233119.jpg"
            />
          </div>
          <Menu theme="dark"
            mode="inline"
            defaultSelectedKeys={[this.props.history.location.pathname]}
            onSelect={this.selectMenu}
          >
            <Menu.Item key="/welcome">
              <Icon type="user" />
              <span className="nav-text">欢迎</span>
            </Menu.Item>
            <SubMenu title='节点管理'>
              <Menu.Item key="/home">节点列表</Menu.Item>
            </SubMenu>
            <SubMenu title='文章管理'>
              <Menu.Item key="/article">文章列表</Menu.Item>
            </SubMenu>
            <SubMenu title='标签管理'>
              <Menu.Item key="/article">标签列表</Menu.Item>
            </SubMenu>
            <SubMenu title='分类管理'>
              <Menu.Item key="/article">分类列表</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{background: '#fff', padding: 0}} />
          <Content style={{margin: '24px 16px 0'}}>
            <div style={{background: '#fff', minHeight: 360, height: '100%' }}>
              <GgEditor />
            </div>
          </Content>
          <Footer style={{textAlign: 'center'}}>webxmsj ©2018 Created by webxmsj</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Home;
