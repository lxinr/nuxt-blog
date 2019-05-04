/*
 * @Author: liuxin 
 * @Date: 2019-02-13 19:33:33 
 * @Last Modified by: liuxin
 * @Last Modified time: 2019-04-04 17:42:28
 */

export default ({app: {router}, env: {nodeEnv}}) => {
  // 每次路由变更时进行pv统计
  // 且仅在生产环境统计
  nodeEnv === 'production' && router.afterEach((to, from) => {
    // console.log('ahhaha--------', nodeEnv)
    /* 告诉增加一个PV */
    try {
      console.log('__-router-----', to.fullPath)
      window._hmt = window._hmt || []
      window._hmt.push(['_trackPageview', to.fullPath])
    } catch (e) {
    }
  })
}