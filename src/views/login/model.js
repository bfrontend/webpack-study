import {routerRedux} from 'dva/router';
import { login } from '@/services/user'

export default {
    namespace: 'login',
    state: {
      userInfo: {}
    },
    effects: {
      * goHome({payload},{call, put}){
        const data = yield call(login, payload);
        if (data.success) {
          yield put({
            type: 'updateUserInfo',
            payload: data
          });
          localStorage.setItem('token', data.token)
          yield put(routerRedux.push(`welcome`))
        }
        return data;
      },
      * logOut({payload}, {call, put}) {
        localStorage.removeItem('token')
        yield put(routerRedux.push(`login`))
      }
    },
    reducers: {
      updateUserInfo(state, action) {
        return {
          ...state,
          userInfo: action.payload
        }
      }
    }
  };
