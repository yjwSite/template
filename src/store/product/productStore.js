/**
 * 作者 ：食草狂魔
 *
 * 日期 ：2018/3/15
 *
 * 描述 ：状态树模块-product
 */
import shopCartStore from './shopcart/shopCartStore'

export default {
  namespaced: true,
  state: {
    // 模块全局状态
  },
  modules: {
    shopCartStore
  }
}
