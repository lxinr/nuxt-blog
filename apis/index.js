/*
 * @Author: liuxin 
 * @Date: 2018-12-20 23:18:44 
 * @Last Modified by: liuxin
 * @Last Modified time: 2019-01-05 19:14:11
 */

export function fetchList($axios) {
  return $axios.get('/blog/list')
}

export function fetchDetail($axios, title) {
  return $axios.get(`/blog/detail?title=${encodeURIComponent(title)}`)
}