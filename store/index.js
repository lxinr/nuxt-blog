/*
 * @Author: liuxin 
 * @Date: 2018-12-20 23:32:48 
 * @Last Modified by: liuxin
 * @Last Modified time: 2018-12-20 23:38:30
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    info: null
  },
  mutations: {
    setInfo (state, info) {
      console.log('info-------', info)
      state.info = info
    }
  }
})

export default store