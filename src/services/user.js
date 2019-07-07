import request from '@/utils/request';

export async function login(data) {
  return request.post('/v1/blog/login', data);
}
export const to = (promiseIns) => promiseIns.then(res => [null, res]).catch(e => [e]);
