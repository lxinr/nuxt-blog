/*
 * @Author: liuxin 
 * @Date: 2018-12-20 23:32:48 
 * @Last Modified by: liuxin
 * @Last Modified time: 2019-01-14 00:02:38
 */

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    info: null,
    scrollTop: 0,
    blogPage: 1,
    blogListInfo: null,
    blogList: [],
    blogAllList: {},
    blogContent: {},
    blogAllContent: {}
  },
  mutations: {
    setInfo (state, info) {
      console.log('info-------', info)
      state.info = info
    },
    setListInfo (state, info) {
      // console.log('info-------', info)
      state.blogListInfo = info
    },
    setAllList (state, { page, list}) {
      // console.log('info-------', info)
      state.blogList = list
      state.blogAllList[page] = list
    },
    setList (state, list) {
      state.blogList = list
    },
    setBlogPage (state, page) {
      state.blogPage = page
    },
    setContent (state, con) {
      state.blogContent = con || {}
    },
    setAllBlogContent (state, { title, data }) {
      state.blogContent = data
      state.blogAllContent[title] = data
    },
    setScrollTop (state, top) {
      state.scrollTop = top || 0
    }
  }
})

export default store