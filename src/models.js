/*
* @Author: webxmsj
* @Date:   2019-07-11 08:26:53
* @Last Modified by:   webxmsj
* @Last Modified time: 2019-07-11 09:31:42
*/
import {routerRedux} from 'dva/router';
const defaultModel = {
  namespace: 'authority',
  state: {
  },
  subscriptions: {
    setup({dispatch, history}) {
      history.listen(location => {
        const token = localStorage.getItem('token')
        if (location.pathname === '/' || location.pathname === '/login') {
          if (token) {
            dispatch({
              type: 'loginSuccess',
            });
          }
        } else {
          if (!token) {
            dispatch({
              type: 'loginFail',
            });
          }
        }
      });
    },
  },
  effects: {
    * loginFail({payload},{call, put}) {
      yield put(routerRedux.push(`login`))
    },
    * loginSuccess({payload},{call, put}) {
      yield put(routerRedux.push(`welcome`))
    }
  },
  reducers: {}
}
const  context = require.context("./views",true,/model\.js$/);
const models = context.keys().map(key => context(key).default);
export default [defaultModel, ...models];
