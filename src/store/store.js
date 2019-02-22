import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
  whatBg:true,
  name:'',
  phone: 0,
  group:-1,
  editItem:'',
}

const mutations={

}

export default new Vuex.Store({
  state,
  mutations
})
