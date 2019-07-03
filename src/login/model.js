import {routerRedux} from 'dva/router';
import { login } from '@/services/user'

export default {
    namespace: 'login',
    state: {
    },
    effects: {
      * goHome({payload},{put}){
        const {username, password} = payload;
        const data = yield login(username, password);
        if (data.success) {
          yield put(routerRedux.push(`home`));
        } else {
          console.log(data)
        }
      }
    },
    reducers: {
    }
  };
