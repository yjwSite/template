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
import middlewares from '../middlewares'

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

router.beforeEach(middlewares)

export default router
