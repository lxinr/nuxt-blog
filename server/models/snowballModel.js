// /*
//  * @Author: liuxin 
//  * @Date: 2018-12-29 14:47:03 
//  * @Last Modified by:   liuxin 
//  * @Last Modified time: 2018-12-29 14:47:03 
//  */

// const mongoose = require('mongoose')
// const config  = require('../config/db')
// const snowConn = mongoose.createConnection(config['SNOW_BALL'])
// const Schema = mongoose.Schema

// const publicSchema = new Schema({
//   id: {
//     type: Number,
//     index: true
//   },
//   category: {
//     type: Number
//   },
//   column: {
//     type: String,
//     default: ''
//   },
//   data: {
//     type: Object,
//     default: ''
//   }
// })

// const articleSchema = new Schema({
//   art_id: {
//     type: String
//   },
//   title: {
//     type: String
//   },
//   target: {
//     type: String,
//     index: true
//   },
//   author: {
//     type: String,
//     default: ''
//   },
//   avatar: {
//     type: String,
//     default: ''
//   },
//   create_time: {
//     type: String,
//     default: ''
//   },
//   datail: {
//     type: String,
//     default: ''
//   },
//   href: {
//     type: String,
//     default: ''
//   },
// })

// exports.Pubilc = snowConn.model('lists', publicSchema)
// exports.Article = snowConn.model('articles', articleSchema)