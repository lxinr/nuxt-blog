/*
 * @Author: liuxin 
 * @Date: 2018-12-30 16:15:52 
 * @Last Modified by: liuxin
 * @Last Modified time: 2018-12-30 22:19:51
 */

const hightlight = require('highlight.js')
const fs = require('fs-extra')
const path = require('path')
const marked = require('marked')
const { Blog } = require('../models/blogModel')
// const Respond = require('../utils/respond')

marked.setOptions({
  highlight: function (code) {
    return hightlight.highlightAuto(code).value
  }
})

const filterLists = {
  __v: false,
  content: false,
  bImg: false
}

exports.UploadBlog = async (ctx) => {
  // const respond = new Respond(ctx)
  const res = await fs.readFileSync(path.join('./', 'static/test.md'))
  const blog = new Blog({
    title: '前端知识点记录 —— css篇之二',
    subTitle: '补充在实际使用中利用css实现的一些功能的方法',
    listImg: 'https://file.lxinr.top/blog/post-bg-index.jpg',
    bImg: 'https://file.lxinr.top/blog/post-bg-rwd.jpg',
    author: 'liux',
    content: res.toString()
  })

  await blog.save( async (err) => {
    console.log('___----')
  })

  ctx.body = {
    code: '0000',
    msg: '成功'
  }
} 

exports.List = async (ctx) => {
  await Blog.find({}, filterLists, (err, result) => {
    ctx.body = {
      code: '0000',
      content: result.map(item => {
        return item
      })
    }
  })
}

exports.Detail = async (ctx) => {
  const { id = '' } = ctx.query
  await Blog.findOne({_id:  id}, { _id: false, __v: false, listImg: false }, (err, result) => {
    if(result) {
      result.content = marked(result.content)
    }
    ctx.body = {
      code: '0000',
      content: result
    }
  })
}