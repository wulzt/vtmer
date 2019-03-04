import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
  backendUrl:"https://vtmer.com",
  whatBg:true,
  name:'',
  phone: 0,
  group:-1,
  editItem:'',
  avatar:'',
}

const mutations={

}

export default new Vuex.Store({
  state,
  mutations
})
