/**
 * 作者 ：食草狂魔
 *
 * 日期 ：2017/11/13
 *
 * 描述 ：路由配置
 */
import Vue from 'vue'
import Router from 'vue-router'

// 产品模块
import product from './product/product'
// 用户模块
import user from './user/user'

// 路由中间件
import middlewares from '../middlewares'

// 一级页面
const Index = () => import('@/pages/home/index.vue')
// 布局页面
const Layout = () => import('@/pages/layout.vue')

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
      children: [
        ...product,
        ...user
      ]
    }
  ]
})

router.beforeEach(middlewares)

export default router
