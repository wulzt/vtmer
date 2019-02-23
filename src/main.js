import Vue from 'vue'
import router from './router'
import App from './App.vue'
import store from './store/store.js'
import axios from 'axios'

import { Upload,Icon,Form,Input,Radio,RadioGroup,FormItem,Button } from 'element-ui';
Vue.use(Upload)
Vue.use(Icon)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Button)

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
