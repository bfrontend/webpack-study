/*
* @Author: webxmsj
* @Date:   2019-07-03 22:06:08
* @Last Modified by:   webxmsj
* @Last Modified time: 2019-07-03 22:15:37
*/
import axios from 'axios'

const Instance = axios.create({
  baseURL: 'https://api.bfrontend.com',
  timeout: 5000
})
const requestInterceptor = config => config;
const responseInterceptor = response => response.data;
const interceptorError = error => {
  if (error.isAxiosError) {
    return {
      status: error.response.status,
      ...error.response.data
    }
  }
  return error
};
Instance.interceptors.request.use(requestInterceptor, interceptorError);
Instance.interceptors.response.use(responseInterceptor, interceptorError);

export default Instance;
