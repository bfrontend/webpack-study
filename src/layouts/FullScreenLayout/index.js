/*
* @Author: webxmsj
* @Date:   2019-07-08 22:02:08
* @Last Modified by:   webxmsj
* @Last Modified time: 2019-07-08 22:55:51
*/
import React from 'react';
import {Layout} from 'antd';
const {Header, Content, Footer} = Layout;
import RouterView from '@/components/RouterView'

const FullScreenLayout = props => {
  const children = props.RouteMeta.component;
  return (
     <RouterView match={props.match} component={children}></RouterView>
  )
}

export default FullScreenLayout;
