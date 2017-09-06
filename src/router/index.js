import Vue from 'vue'
import Router from 'vue-router'
import Main from '../page/main/main.vue'
import Home from '../page/home/home.vue'
import House from '../page/house/house.vue'
import My from '../page/my/my.vue'
import Tools from '../page/tools/tools.vue'
import Test from '../page/home/test.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      component: Main,
      children: [
        {
          path: 'home',
          component: Home
        },
        {
          path: 'house',
          component: House
        },
        {
          path: 'my',
          component: My
        },
        {
          path: 'tools',
          component: Tools
        }
      ]
    },
    {
      path: '/test',
      component: Test
    }
  ]
})
