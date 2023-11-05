import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: false,
    topL: []
  },
  getters: {
  },
  mutations: {
    setTop (state, payload) {
      state.topL = payload
      console.log('x', payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
