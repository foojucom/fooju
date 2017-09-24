<template>
  <div class="home">
    <div id="zz">
      <ap></ap>
      <app></app>
      <!--<lunBo></lunBo>-->
      <lunbotu id="lunbotu"></lunbotu>
      <bodyNav id="bodyNav"></bodyNav>
      <touTiao></touTiao>
      <baiKe></baiKe>
      <tuiJian></tuiJian>
      <foot></foot>
    </div>
  </div>
</template>
<script>
  import ap from './app.vue'
  import app from './header-app.vue'
  import lunBo from './lunbo.vue'
  import lunbotu from './lunbotu.vue'
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
      lunbotu,
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
<<<<<<< HEAD
    width: 27rem;
    margin: auto;
=======
    width: 100%;
    height: 100%;
>>>>>>> 27e9cb28f62eb0660b490e3dab870bb361cd1014
  }
  @media screen and (max-width: 2048px)and (min-width: 1024px){
    .home{ width: 768px}
  }
  @media screen and (max-width: 1024px)and (min-width: 768px){
    .home{ width: 768px}
  }
  @media screen and (max-width: 768px) and (min-width: 480px){
    .home{ width: 27rem; }
  }
  @media screen and (max-width: 480px) and (min-width: 320px){
    .home{ width: 27rem; }
  }
  @media screen and (max-width: 320px) and (min-width: 240px){
    .home{ width: 27rem; }
  }
  @media screen and (max-width: 240px) {
    .home{ width: 27rem; }
  }
  #zz{
    height: auto;
  }
  #appafter{
    float: left;
    /*z-index: 1;*/
  }
  #lunbotu{
    z-index: 10;
    display: block;
    width: 100%;
  }
  #bodyNav{
    /*margin-top: 310px;*/
  }
</style>
