/**
 * 作者 ：食草狂魔
 *
 * 日期 ：2017/11/13
 *
 * 描述 ：路由配置
 */
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index.vue'
import ProductDetail from '@/pages/product/detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home-index',
      component: Index
    },
    {
      path: '/product/detail',
      name: 'product-detail',
      component: ProductDetail
    }
  ]
})
