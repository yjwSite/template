/**
 * 作者 ：食草狂魔
 *
 * 日期 ：2018/3/15
 *
 * 描述 ：状态树模块product模块下二级子模块shopCart
 */
export default {
  namespaced: true,
  state: {
    shopCartList: []
  },
  mutations: {
    updateShopCart (state, obj) {
      state.shopCartList = obj.shopCartList
    }
  },
  actions: {
    addShopCart ({ state, commit, rootState }, obj) {
      commit('updateShopCart', obj)
    },
    removeShopCart ({ state, commit, rootState }, obj) {
      commit('updateShopCart', obj)
    }
  }
}
