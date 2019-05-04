/*
 * @Author: liuxin 
 * @Date: 2018-12-20 23:18:44 
 * @Last Modified by: liuxin
 * @Last Modified time: 2019-04-03 16:31:02
 */

export function fetchList($axios, opt) {
  const { page = 1, limit = 6 } = opt || {}
  return $axios.get(`/blog/list?page=${page}&limit=${limit}`)
}

export function fetchDetail($axios, title) {
  return $axios.get(`/blog/detail?title=${encodeURIComponent(title)}`)
}
