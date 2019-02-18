import Vue from 'vue'
import router from './router'
import App from './App.vue'
import store from './store/store.js'
import { Upload,Icon,Form,Input,Radio,RadioGroup,FormItem,Button } from 'element-ui';
Vue.use(Upload)
Vue.use(Icon)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Button)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
