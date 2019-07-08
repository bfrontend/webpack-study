/*
* @Author: webxmsj
* @Date:   2019-07-08 22:02:08
* @Last Modified by:   webxmsj
* @Last Modified time: 2019-07-08 22:06:44
*/
import React from 'react';
import {Layout} from 'antd';
const {Header, Content, Footer} = Layout;
import RouterView from '@/components/RouterView'

const FullScreenLayout = props => {
  const children = props.RouteMeta.component;
  return (
     <Layout>
      <Header style={{background: '#fff', padding: 0}} />
      <Content style={{margin: '24px 16px 0'}}>
        <RouterView match={props.match} component={children}></RouterView>
      </Content>
      <Footer style={{textAlign: 'center'}}>webxmsj ©2018 Created by webxmsj</Footer>
    </Layout>
  )
}

export default FullScreenLayout;
