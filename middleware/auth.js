/*
 * @Author: liuxin 
 * @Date: 2018-12-30 19:25:39 
 * @Last Modified by: liuxin
 * @Last Modified time: 2018-12-30 19:36:23
 */

export default function (context) {
  // context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
  console.log('context-----', context.route)
  // const { path } = context && context.route
  // console.log(path)
  // path === '/tags' && context.redirect(200, '/')
}