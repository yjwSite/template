/**
 * 作者 ：食草狂魔
 *
 * 日期 ：2017/11/13
 *
 * 描述 ：路由配置
 */
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/home/index.vue'
import Layout from '@/pages/layout.vue'
import Product from './product/product'
import checkToken from './checkToken'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home-index',
      component: Index
    },
    {
      path: '/manage',
      name: 'manage',
      component: Layout,
      children:[
        ...Product
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  let allow = false
  let partten = ['^/login']
  partten.forEach(item => {
    // item里都是非受限模块
    var reg = new RegExp(item)
    if (reg.test(to.fullPath)) {
      allow = true
    }
  })

  if(allow){
    // console.log(`不需要鉴权`)
    next()
  }
  else{
    // console.log(`需要鉴权`, to.fullPath)
    checkToken(to, from, next)
    // next()
  }
})

export default router
