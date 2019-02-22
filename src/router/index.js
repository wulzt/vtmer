import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../components/Home')
const Works = () => import('../components/Works')
const Join = () => import('../components/Join')
const Touch = () => import('../components/Touch')
const Admin = () => import('../components/Admin')
const Upload = () => import('../components/Upload')
const Interview = () => import('../components/Interview')
const CheckIn = () => import('../components/CheckIn')
const WaitNumber = () => import('../components/WaitNumber')

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
      path:'/touch',
      name:'touch',
      component:Touch
    },
    {
      path:'/join',
      name:'join',
      component:Join
    },
    {
      path:'/admin',
      name:'admin',
      component:Admin
    },
    {
      path:'/upload',
      name:'upload',
      component:Upload
    },
    {
      path:'/interview',
      name:'interview',
      component:Interview
    },
    {
      path:'/checkIn',
      name:'checkIn',
      component:CheckIn
    },
    {
      path:'/waitNumber',
      name:'waitNumber',
      component:WaitNumber
    },

  ]
})
