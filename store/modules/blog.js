/*
 * @Author: liuxin 
 * @Date: 2019-01-13 23:20:44 
 * @Last Modified by: liuxin
 * @Last Modified time: 2019-01-13 23:34:43
 */

export default {
  state: {
    blogPage: 1,
    blogListInfo: null,
    blogList: [],
    blogAllList: {},
    blogContent: {}
  },
  getters: {
    
  },
  mutations: {
    setListInfo (state, info) {
      console.log('info-------', info)
      state.blogListInfo = info
    },
    setAllList (state, { page, list}) {
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
  },
  actions: {

  }
}