<template>
  <div>
    <div class="bb">
      <div class="jian">
        <span>热门推荐</span>
        <a href="">更多{{}}</a>
      </div>
      <div class="btn">
        <button>二手房</button>
        <button>新房</button>
        <button>租房</button>
      </div>
    </div>
    <div>
      argaer
    </div>
  </div>
</template>

<script>
    export default{}
</script>

<style>
  .bb{
    height: 95px;
    width: 100%;
    border-bottom: 1px solid #eee;
  }
  .jian{
    height:45px;
  }
  .jian span{
    float: left;
    font-size: 18px;
    margin: 10px;
  }
  .jian a{
    float: right;
    font-size: 14px;
    color: #999;
    margin: 12px 15px 10px 0;
  }
  .btn{
    float: left;
  }
  .btn button{
    float: left;
    width:85px;
    height: 33px;
    margin: 0 20px;
    border: 1px solid red;
    background-color:white;;
    border-radius: 10px;
    font-weight: 600;
  }
</style>
