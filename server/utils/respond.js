/*
 * @Author: liuxin 
 * @Date: 2018-12-29 14:39:48 
 * @Last Modified by: liuxin
 * @Last Modified time: 2018-12-30 20:56:16
 */

/**
 * @description 返回的封装方法
 * @date 2018-12-29
 * @class Respond
 * 
 * 0000 成功
 * 0100 暂无数据
 * 9600 请求错误
 * 9999 未登录或会话超时
 */
class Respond {
  constructor(ctx) {
    this.baseRes = {
      code: '0000',
      success: true,
      data: null,
      message: null
    }
    this.ctx = ctx
  }
  result(opt) {
    return this.ctx.body = opt
  }
  log(options) {
    return this.result(Object.assign(this.baseRes, {
      ...options
    }))
  }
  fail(message = '请求失败', code = '9600', data = null) {
    return this.result(Object.assign(this.baseRes, {
      success: false,
      code,
      message,
      data
    }))
  }
  err(message = '数据请求失败', code = '0100', data = null) {
    return this.result(Object.assign(this.baseRes, {
      code,
      message,
      data
    }))
  }
  suc(message = '数据请求成功', data = {}) {
    return this.result(Object.assign(this.baseRes, {
      message,
      data
    }))
  }
}

module.exports = Respond