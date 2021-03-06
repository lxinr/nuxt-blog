/*
 * @Author: liuxin 
 * @Date: 2018-12-21 00:09:44 
 * @Last Modified by: liuxin
 * @Last Modified time: 2019-01-05 21:58:20
 */

export default function ({ $axios, redirect }) {
  $axios.onResponse(res => {
    return res.data
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    } else if (code === 404) {
      return { statusCode: 404 }
    } else {
      redirect('/404')
    }
  })
}