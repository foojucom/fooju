import Vue from 'vue'
import Router from 'vue-router'
import Main from '../page/main/main.vue'
import Home from '../page/home/home.vue'
import House from '../page/house/house.vue'
import My from '../page/my/my.vue'
import Tools from '../page/tools/tools.vue'
import Test from '../page/home/test.vue'
import ershou from '../page/home/nav/ershou.vue'
import dian from '../page/home/nav/dian.vue'
import New from '../page/home/nav/new.vue'
import map from '../page/home/nav/map.vue'
import qu from '../page/home/nav/qu.vue'
import xue from '../page/home/nav/xue.vue'
import zu from '../page/home/nav/zu.vue'
import tuo from '../page/home/nav/tuo.vue'
import sousuo from '../page/home/nav/sousuo.vue'
import oldDetail from '../page/home/nav/oldDetail.vue'
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
      path: '/dian',
      component: dian
    },
    {
      path: '/qu',
      component: qu
    },
    {
      path: '/map',
      component: map
    },
    {
      path: '/test',
      component: Test
    },
    {
      path: '/new',
      component: New
    },
    {
      path: '/tuo',
      component: tuo
    },
    {
      path: '/zu',
      component: zu
    },
    {
      path: '/xue',
      component: xue
    },
    {
      path: '/sou',
      component: sousuo
    },
    {
      path: '/oldDetail',
      component: oldDetail
    },
    {
      path: '/ershou',
      component: ershou
    }
  ]
})
