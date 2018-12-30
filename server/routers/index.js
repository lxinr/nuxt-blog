/*
 * @Author: liuxin 
 * @Date: 2018-12-20 23:15:33 
 * @Last Modified by: liuxin
 * @Last Modified time: 2018-12-30 21:42:42
 */

const Router = require('koa-router')
const router = new Router()
const { List, Detail, UploadBlog } = require('../controllers/blog')

router.get('/api/info', (ctx) => {
  ctx.body = {
    code: '0000',
    message: '这是我的胡'
  }
})

router.get('/api/bloglist', List)
router.get('/api/blogdetail', Detail)
router.get('/api/blogupload', UploadBlog)

module.exports = router