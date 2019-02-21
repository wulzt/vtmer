import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui';
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css';
import 'jquery'

import qs from 'qs'
import Axios from 'axios'
/*Vue.prototype.$axios=Axios;
//Axios.defaults.baseURL = 'https://vtmer.erienniu.xyz/api/';
Axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
Axios.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';

// 添加一个请求拦截器
Axios.interceptors.request.use(function (config) {
  if(config.method=="post" || config.method=="put"){
    config.data=qs.stringify(config.data);
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

Vue.config.productionTip = false*/

Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
