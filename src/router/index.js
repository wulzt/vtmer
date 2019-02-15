import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Works from '../components/Works'
import Join from '../components/Join'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'*',
      name:'home',
      component:Home
    },
    {
      path:'/works',
      name:'works',
      component:Works
    },
    {
      path:'/join',
      name:'join',
      component:Join
    }
  ]
})
