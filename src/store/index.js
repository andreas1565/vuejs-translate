import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    locale: process.env.VUE_APP_I18N_LOCALE
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
