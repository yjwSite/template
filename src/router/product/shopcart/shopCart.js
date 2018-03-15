/**
 * 作者 ：食草狂魔
 *
 * 日期 ：2018/3/15
 *
 * 描述 ：二级子模块 - 购物车
 */
const ShopCartPage = () => import('@/pages/product/shopcart/shopCart.vue')

export default [{
  path: '/product/shopcart',
  name: 'product-shopcart',
  component: ShopCartPage
}]
