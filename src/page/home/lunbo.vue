<template>
  <div class="page-swipe">
    <mt-swipe :auto="2000" class="mint-swipe">
      <mt-swipe-item>
        <div class="ll"></div>
      </mt-swipe-item>
      <mt-swipe-item>
        <div class="ll"></div>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    }
  }
</script>

<style scoped>
  .page-swipe{
    /*height: 287px;*/
    /*position: relative;*/
    /*transform: translateY(-50px);*/
  }
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
  .aaa{
    position: fixed;
    z-index: 100;
  }
</style>
