/*
* @Author: webxmsj
* @Date:   2019-07-08 21:18:09
* @Last Modified by:   webxmsj
* @Last Modified time: 2019-07-08 23:07:49
*/
import React, {Component} from 'react';
import {Layout, Menu, Icon, Avatar, Switch} from 'antd';
import RouterView from '@/components/RouterView'
import { Link } from 'dva/router'
import './index.less';
const { SubMenu } = Menu
const {Header, Content, Footer, Sider} = Layout;


class SidebarLayout extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  state = {
    theme: 'dark'
  }
  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light'
    })
  }
  selectMenu = ({keyPath}) => {
    this.props.history.push(keyPath[0])
  }
  render() {
    const children = this.props.RouteMeta.component;
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
          <Menu
            theme={this.state.theme}
            mode="inline"
            defaultSelectedKeys={[this.props.history.location.pathname]}
            defaultOpenKeys={[this.props.match.path.replace('/', '')]}
            onClick={this.selectMenu}
          >
            <Menu.Item key="/welcome">
              <Icon type="user" />
              <span className="nav-text">欢迎</span>
            </Menu.Item>
            <SubMenu key='nodes' title='节点管理'>
              <Menu.Item key="/nodes">节点列表
              </Menu.Item>
            </SubMenu>
            <SubMenu key='article' title='文章管理'>
              <Menu.Item key="/article">文章列表</Menu.Item>
              <Menu.Item key="/article/add">新增文章</Menu.Item>
              <Menu.Item key="/article/edit">编辑文章</Menu.Item>
            </SubMenu>
            <SubMenu key='tag' title='标签管理'>
              <Menu.Item key="/tag">标签列表</Menu.Item>
              <Menu.Item key="/tag/add">新增标签</Menu.Item>
              <Menu.Item key="/tag/edit">编辑标签</Menu.Item>
            </SubMenu>
            <SubMenu title='分类管理'>
              <Menu.Item key="/category">分类列表</Menu.Item>
              <Menu.Item key="/category/add">新增分类</Menu.Item>
              <Menu.Item key="/category/edit">编辑分类</Menu.Item>
            </SubMenu>
            <Menu.Item key="/setting">
              <Icon type="setting" />
              <span className="nav-text">系统设置</span>
            </Menu.Item>
          </Menu>
          <Switch
            checked={this.state.theme === 'dark'}
            onChange={this.changeTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
        </Sider>
        <Layout>
          <Header style={{background: '#fff', padding: 0}} />
          <Content style={{margin: '24px 16px 0'}}>
            <RouterView match={this.props.match} component={children}></RouterView>
          </Content>
          <Footer style={{textAlign: 'center'}}>webxmsj ©2018 Created by webxmsj</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default SidebarLayout;
