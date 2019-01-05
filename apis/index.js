/*
 * @Author: liuxin 
 * @Date: 2018-12-20 23:18:44 
 * @Last Modified by: liuxin
 * @Last Modified time: 2019-01-05 19:14:11
 */

// export function fetchInfo($axios) {
//   return $axios.$get('https://api.lxinr.top/github/search?key=vue')
// }

// export function fetchMd($axios) {
//   return $axios.get('/api/blog')
// }

export function fetchList($axios) {
  return $axios.get('/blog/list')
}

export function fetchDetail($axios, title) {
  return $axios.get(`/blog/detail?title=${encodeURIComponent(title)}`)
}