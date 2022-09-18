import axios from 'axios'
import { Loading } from 'element-ui';

const instance = axios.create({
  baseURL: 'http://leju.bufan.cloud/',  //基准地址
  timeout: 3000  // 等待超时时间
})

var loading;
instance.interceptors.request.use(config => {

  //开启加载loading....
  loading = Loading.service({
    lock: true,
    text: '努力加载中....',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  });
  let token =localStorage.getItem('token')
  if(token){
    config.headers.token=token
  }

  return config;
}, err => {
  return Promise.reject(err)
})

//响应拦截器
instance.interceptors.response.use(response => {
  //关闭loading
  loading.close();
  return response;

}, err => {
  loading.close();
  return Promise.reject(err)
})

export default instance;