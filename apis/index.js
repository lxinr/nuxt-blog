/*
 * @Author: liuxin 
 * @Date: 2018-12-20 23:18:44 
 * @Last Modified by: liuxin
 * @Last Modified time: 2018-12-30 22:10:47
 */

export function fetchInfo($axios) {
  return $axios.$get('https://api.lxinr.top/github/search?key=vue')
}

export function fetchMd($axios) {
  return $axios.get('http://192.168.0.104:3003/api/blog')
}

export function fetchList($axios) {
  return $axios.get('http://192.168.0.104:3003/api/bloglist')
}

export function fetchDetail($axios, id) {
  return $axios.get(`http://192.168.0.104:3003/api/blogdetail?id=${id}`)
}