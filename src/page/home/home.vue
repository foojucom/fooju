<template>
  <div class="home">
    <app></app>
    <lunbo></lunbo>
    home
    <router-link to="/test">link1</router-link>
  </div>
</template>
<script>
  import app from './header-app.vue'
  import lunBo from './lunbo.vue'
  export default{
//    data () {
//      return {
//
//      }
//    },
    components: {
      app: app,
      lunbo: lunBo
    }
  }
</script>
<style>
  .home{
    width: 400px;
  }
</style>
