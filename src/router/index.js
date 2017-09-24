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
import sou from '../page/home/nav/sou.vue'
import oldDetail from '../page/home/nav/oldDetail.vue'
import plat from '../page/home/nav/plat.vue'
import bakeOld from '../page/home/wikipedia/old.vue'
import baiKeSearch from '../page/home/wikipedia/baiKeSearch.vue'
import baiKeDetail from '../page/home/wikipedia/baiKeDetail.vue'
import test from '../page/home/lunbotu.vue'
import area from '../page/home/area.vue'
import villageSou from '../page/home/villageSou.vue'
import logo from '../page/home/nav/logo.vue'
import bill from '../page/home/nav/bill.vue'
import orderAgent from '../page/home/nav/orderAgent.vue'
import schedule from '../page/home/nav/schedule.vue'
Vue.use(Router)

export default new Router({
  // modes: 'history',
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
      path: '/sousou',
      component: sou
    },
    {
      path: '/plat',
      component: plat
    },
    {
      path: '/bakeOld',
      component: bakeOld
    },
    {
      path: '/oldDetail',
      name: 'oldDetail',
      component: oldDetail
    },
    {
      path: '/ershou',
      component: ershou
    },
    {
      path: '/testt',
      component: test,
      meta: {
        auth: true
      }
    },
    {
      path: '/baiKeSearch',
      component: baiKeSearch
    },
    {
      path: '/area',
      component: area
    },
    {
      path: '/villageSou',
      component: villageSou
    },
    {
      path: '/logo',
      component: logo
    },
    {
      path: '/bill',
      component: bill
    },
    {
      path: '/orderAgent',
      component: orderAgent
    },
    {
      path: '/schedule',
      component: schedule
    },
    {
      path: '/baiKeDetail',
      name: 'baiKeDetail',
      component: baiKeDetail
    }
  ]
})

