/*
 * @Author: liuxin 
 * @Date: 2018-12-21 00:09:44 
 * @Last Modified by: liuxin
 * @Last Modified time: 2018-12-21 00:16:02
 */

export default function ({ $axios, redirect }) {
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    } else if (code === 404) {
      redirect('/404')
    } else {
      redirect('/404')
    }
  })
}