// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// vuex
import store from './store'

// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

// moment
import moment from 'moment'

// ueditor
import '../static/js/lib/ueditor/ueditor.config.js'
import '../static/js/lib/ueditor/ueditor.all.js'
import '../static/js/lib/ueditor/lang/zh-cn/zh-cn.js'
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
moment.locale('zh-cn')
Vue.prototype.$moment = moment

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
