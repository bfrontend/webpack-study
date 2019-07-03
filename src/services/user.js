import request from '@/utils/request';

export async function login(username, password) {
  return request.post('/v1/blog/login', {
    userName: username,
    password: password
  });
}


export const to = (promiseIns) => promiseIns.then(res => [null, res]).catch(e => [e]);
