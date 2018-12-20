/*
 * @Author: liuxin 
 * @Date: 2018-12-20 23:15:33 
 * @Last Modified by: liuxin
 * @Last Modified time: 2018-12-20 23:18:14
 */

const Router = require('koa-router')
const router = new Router()

router.get('/api/info', (ctx) => {
  ctx.body = {
    code: '0000',
    message: '这是我的胡'
  }
})

module.exports = router