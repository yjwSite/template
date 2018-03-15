/**
 * 作者 ：食草狂魔
 *
 * 日期 ：2017/12/08
 *
 * 描述 ：子路由 - 产品模块
 */
const DetailPage = () => import('@/pages/product/detail.vue')
const ProductListPage = () => import('@/pages/product/productList.vue')

// 二级子模块 - 购物车
import shopCart from './shopcart/shopCart'

export default [{
  path: '/product/detail',
  name: 'product-detail',
  component: DetailPage
},{
  path: '/product/list',
  name: 'product-list',
  component: ProductListPage
},
  ...shopCart
]
