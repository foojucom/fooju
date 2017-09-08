<template>
  <div class="home">
    <div>
      <app></app>

      <lunbo></lunbo>
      <bodyNav></bodyNav>
      <touTiao></touTiao>
      <baiKe></baiKe>
      <tuiJian></tuiJian>
      <foot></foot>
    </div>
    <router-link to="/test">link1</router-link>
  </div>
</template>
<script>
  import app from './header-app.vue'
  import lunBo from './lunbo.vue'

  import bodyNav from './nav/list.vue'
  import touTiao from './toutiao.vue'
  import baiKe from './baiKe.vue'
  import tuiJian from './tuiJian.vue'
  import foot from './foot.vue'
  export default{
//    data () {
//      return {
//
//      }
//    },
    components: {
      app: app,
      lunbo: lunBo,
      bodyNav,
      touTiao,
      baiKe,
      tuiJian,
      foot
    }
  }
</script>
<style>
  .home{
    width: 400px;

  }
  .home>div{
    height: auto;
    overflow: scroll;
  }
</style>
