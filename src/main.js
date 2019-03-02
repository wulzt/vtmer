import Vue from 'vue'
import router from './router'
import App from './App.vue'
import store from './store/store.js'
import axios from 'axios'
import VueClipboard from 'vue-clipboard2'

import { Upload,Icon,Form,Input,Radio,RadioGroup,FormItem,Button,Loading, } from 'element-ui';
Vue.use(Upload)
Vue.use(Icon)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Button)
Vue.use(VueClipboard)
Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;

import {Tabs,TabPane,Steps,Step,Row,Col} from 'element-ui';
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Steps);
Vue.use(Step);
Vue.use(Row);
Vue.use(Col);

axios.defaults.withCredentials=true;
Vue.prototype.axios = axios


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
