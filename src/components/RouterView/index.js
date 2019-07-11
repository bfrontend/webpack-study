/*
* @Author: webxmsj
* @Date:   2019-07-08 21:00:00
* @Last Modified by:   webxmsj
* @Last Modified time: 2019-07-11 09:29:39
*/
import React from 'react';
import Welcome from '@/views/welcome'
import {Route} from 'dva/router';
const RouterView = ({match, component}) => {
  return (
    <Route path={`${match.url}`} component={component}></Route>
  )
}

export default RouterView;
