/**
 * 作者 ：食草狂魔
 *
 * 日期 ：2017/12/18
 *
 * 描述 ：中间件索引
 */
export default (to, from, next) => {
  let allow = false
  let partten = ['^/login']
  partten.forEach(item => {
    // item里都是非受限模块
    var reg = new RegExp(item)
    if (reg.test(to.fullPath)) {
      allow = true
    }
  })

  if (allow) {
    // console.log(`不需要鉴权`)
    next()
  } else {
    // console.log(`需要鉴权`, to.fullPath)
    // checkToken(to, from, next)
    next()
  }
}
