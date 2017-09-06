<template>
  <div class="one">
    <div class="total">
      <img src="http://m.fooju.cn/static/img/logo3.759c885.png" alt="">
      <span>
        <p>使用富居APP</p>
        <p>即享个性化推荐</p>
      </span>
      <mt-button type="danger" size="small">立即打开</mt-button>
    </div>
  </div>
</template>

<script>
    export default{}
</script>

<style>
  .one{
    width: 100%;
    height:115px;
    /*border: 1px solid red;*/
    position: relative;
    background-color: #eee;
  }
  .total{
    position: absolute;
    top:0;
    bottom:0;
    left: 0;
    right: 0;
    margin: auto;
    width: 355px;
    height: 85px;
    background-color:white;
    border: 1px solid white;
    border-radius: 10px;
    display: flex;
  }
  .total>img{
    width:58px;
    height: 58px;
    margin:15px 25px 0 15px;
  }
  .total>span p{
    line-height: 8px;
    margin-top: 28px;
  }
  .total>span p:nth-child(2){
    font-size:12px;
    color: #999;;
    margin-top: 5px;
  }
  .total button{
    margin: 25px 20px 0 60px ;
  }
</style>
