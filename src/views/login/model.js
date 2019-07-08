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
          yield put(routerRedux.push(`welcome`))
        } else {
          console.log(data)
        }
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
