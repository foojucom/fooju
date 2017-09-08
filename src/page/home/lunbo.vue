<template>
  <div class="page-swipe">
    <mt-swipe :auto="2000" class="mint-swipe">
      <mt-swipe-item>
        <div class="ll">
          <search></search>
        </div>
        <!--<img src="http://www.fooju.cn//fjw/uploads/ad/20170829/59a4d284d95c6.png" alt="">-->
      </mt-swipe-item>
      <mt-swipe-item>
        <div class="ll">
          <search></search>
        </div>
        <!--<img src="http://www.fooju.cn//fjw/uploads/ad/20170829/59a4d284d95c6.png" alt="">-->
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  import search from './search.vue'
  export default {
    data () {
      return {

      }
    },
    components: {
      search
    }
  }
</script>

<style scoped>
  .ll{
    width: 100%;
    height: 100%;
    background: url(http://www.fooju.cn//fjw/uploads/ad/20170829/59a4d284d95c6.png);
    background-size:100% 100%;
  }
  img{
    width:100%;
    height: 287px;
  }
  .mint-swipe{
    width: 100%;
    height: 287px;
  }
</style>
