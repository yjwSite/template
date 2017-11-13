/**
 * 作者 ：食草狂魔
 *
 * 日期 ：2017/10/18
 *
 * 描述 ：全局状态树
 */
import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    fileServer: 'http://172.16.126.140/image'
  },
  modules: {
    home
  }
})

export default store
