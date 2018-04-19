/**
 * 作者 ：食草狂魔
 *
 * 日期 ：2017/11/21
 *
 * 描述 ：页面token验证
 */
import authAPIs from '../api/auth/authAPIs'
export default (to, from, next) => {
  // console.log("userId", localStorage)
  if (localStorage.token) {
    authAPIs.checkToken({
      token: 'token'
    }).then(({ data }) => {
      // if(data.code == 10012) {
      //   next()
      // }
      // else{
      //   next({
      //     path: '/login',
      //     query: { redUrl: to.fullPath }
      //   })
      // }
      next()
    }).catch(ex => {
      next()
    })
  } else {
    next(false)
    next({
      path: '/login',
      query: { redUrl: to.fullPath }
    })
  }
}
