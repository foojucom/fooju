// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './store/store'
import md5 from 'js-md5'
Vue.config.productionTip = false
Vue.use(Mint)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  md5,
  template: '<App/>',
  components: { App }
})

router.beforeEach(function (to, from, next) {
  if (to.meta.auth) {
    if (sessionStorage.getItem('user')) {
      next()
    } else {
      next('/logo?redirect=' + to.fullPath)
    }
  } else {
    next()
  }
})
