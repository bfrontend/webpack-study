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
import './index.less';

const {ConnectedRouter} = routerRedux;

export default function Router({history}) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path='/login' component={Login}/>
        <Route path="/home" component={Home} />
        <Route path="/welcome" component={Welcome} />
      </Switch>
    </ConnectedRouter>
  );
}

Router.propTypes = {
  history: PropTypes.object
};
