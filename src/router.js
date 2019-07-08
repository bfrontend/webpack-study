import React from 'react';
import PropTypes from 'prop-types';
import {
  routerRedux,
  Route,
  Switch
} from 'dva/router';
import Home from './views/home';
import Login from './views/login';
import Welcome from './views/welcome'
import Setting from '@/views/setting'
import Nodes from '@/views/nodes'
import Article from '@/views/article'
import Tag from '@/views/tags'
import Category from '@/views/category'
import DefaultLayout from '@/layouts/SidebarLayout'
import './index.less';

const {ConnectedRouter} = routerRedux;

const routes = [{
  path: '/',
  component: Login,
  exact: true
}, {
  path: '/login',
  component: Login
}, {
  path: '/nodes',
  component: Nodes
}, {
  path: '/welcome',
  component: Welcome
}, {
  path: '/setting',
  component: Setting
}, {
  path: '/article',
  component: Article
}, {
  path: '/category',
  component: Category
}, {
  path: '/tag',
  component: Tag
}]

export default function Router({history}) {
  const componentLayout = (item,props) => {
    if (item.layout) {
      return <item.layout {...props} RouteMeta={item} />
    } else {
      return <DefaultLayout {...props} RouteMeta={item} />
    }
  }
  return (
    <ConnectedRouter history={history}>
      <Switch>
        {
          routes.map(item => {
            return (
              <Route exact={item.exact} path={item.path} render={props => componentLayout(item, props)}></Route>
            )
          })
        }
      </Switch>
    </ConnectedRouter>
  );
}

Router.propTypes = {
  history: PropTypes.object
};
