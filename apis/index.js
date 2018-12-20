/*
 * @Author: liuxin 
 * @Date: 2018-12-20 23:18:44 
 * @Last Modified by: liuxin
 * @Last Modified time: 2018-12-21 00:30:20
 */

export function fetchInfo($axios) {
  return $axios.$get('https://api.lxinr.top/github/search?key=vue')
}