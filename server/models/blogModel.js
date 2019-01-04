/*
 * @Author: liuxin 
 * @Date: 2018-12-30 20:41:30 
 * @Last Modified by: liuxin
 * @Last Modified time: 2018-12-30 21:09:08
 */

const mongoose = require('mongoose')
// const { SERVER_DB }  = require('../config')
const blogConn = mongoose.createConnection('mongodb://47.106.34.145:27017/myblog', {useNewUrlParser: true})
const Schema = mongoose.Schema

const blogSchema = new Schema({
  title: {
    type: String
  },
  subTitle: {
    type: String
  },
  blogTag: {
    type: String
  },
  listImg: {
    type: String,
    default: ''
  },
  bImg: {
    type: String,
    default: ''
  },
  author: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    default: ''
  },
  create_time: {
    type: Date,
    default: Date.now()
  }
})

exports.Blog = blogConn.model('posts', blogSchema)