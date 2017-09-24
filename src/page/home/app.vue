<template>
  <div class="on">
    <img src="http://m.fooju.cn/static/img/logo3.759c885.png" alt="">
    <span>使用富居APP</span>
    <mt-button type="danger" size="small">立即打开</mt-button>
  </div>
</template>

<script>
  export default{}
</script>

<style>
  .on{
    width: 100%;
    height: 85px;
    position: relative;
    display: none;
  }
  .on>img{
    height: 58px;
    width: 2rem;
    position: absolute;
    top:10px;
    left: 15px;
    /*margin:10px 25px 0 -90px;*/
  }
  .on>span{
    color: #999;
    position: absolute;
    top:13px;
    left: 90px;
    font-size: 20px;
    height:58px;
    line-height: 58px;
    /*margin:-50px 10px 20px 0;*/
  }
  .on>button{
    float: right;
    margin:25px 1rem;
  }
</style>
