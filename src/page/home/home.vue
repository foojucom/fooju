<template>
  <div class="home">
    <div>
      <ap></ap>
      <app></app>
      <lunBo></lunBo>
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
  import ap from './app.vue'
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
      ap,
      app,
      lunBo,
      bodyNav,
      touTiao,
      baiKe,
      tuiJian,
      foot
    },
    mounted () {
      this.scroll()
    },
    methods: {
      scroll () {

      }
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
