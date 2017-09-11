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
  /*.on{*/
    /*width: 100%;*/
    /*height:85px;*/
    /*position: relative;*/
    /*background-color: #eee;*/
  /*}*/
  /*.tota{*/
    /*position: absolute;*/
    /*top:0;*/
    /*bottom:0;*/
    /*left: 0;*/
    /*right: 0;*/
    /*margin: auto;*/
    /*width: 100%;*/
    /*height: 85px;*/
    /*background-color:white;*/
    /*border: 1px solid white;*/
    /*border-radius: 10px;*/
    /*display: flex;*/
  /*}*/
  /*.tota>img{*/
    /*width:58px;*/
    /*height: 58px;*/
    /*margin:15px 25px 0 20px;*/
  /*}*/
  /*.tota>span p{*/
    /*line-height: 8px;*/
    /*margin-top: 38px;*/
    /*color: #999;*/
    /*font-size: 20px;*/
  /*}*/
  /*.tota>span p:nth-child(2){*/
    /*font-size:12px;*/
    /*color: #999;;*/
    /*margin-top: 5px;*/
  /*}*/
  /*.tota button{*/
    /*margin: 25px 20px 0 100px ;*/
  /*}*/
  .on{
    width: 100%;
    height: 85px;
    position: relative;
    display: none;
  }
  .on>img{
    height: 58px;
    width: 58px;
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
    margin:25px 15px;
  }
</style>
