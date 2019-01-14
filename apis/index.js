/*
 * @Author: liuxin 
 * @Date: 2018-12-20 23:18:44 
 * @Last Modified by: liuxin
 * @Last Modified time: 2019-01-14 00:17:21
 */

export function fetchList($axios, opt = { page: 1, limit: 5 }) {
  return $axios.get(`/blog/list?page=${opt.page}&limit=${opt.limit}`)
}

export function fetchDetail($axios, title) {
  return $axios.get(`/blog/detail?title=${encodeURIComponent(title)}`)
}