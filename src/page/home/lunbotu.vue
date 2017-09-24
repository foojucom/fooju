<template>
  <div id="app">
    <div class="box">
      <div>
        <router-link to="/area">
          <span>呼和浩特市</span>
          <img src="./img/aa.png" alt="">
        </router-link>
      </div>
      <div>
        <router-link to="/villageSou">
          <img src="./img/logo.png" alt="">
          <input type="text" placeholder="输入小区进行搜索">
        </router-link>
      </div>
    </div>
    <div class="swipe-wrapper">
      <mt-swipe :auto="2000" ref="swipeWrapper">
        <mt-swipe-item class="swip-item-1 item">
          <img src="http://www.fooju.cn//fjw/uploads/ad/20170829/59a4d284d95c6.png" alt="">
        </mt-swipe-item>
        <mt-swipe-item class="swip-item-2 item"><img src="http://www.fooju.cn//fjw/uploads/ad/20170829/59a4d284d95c6.png" alt=""></mt-swipe-item>
        <mt-swipe-item class="swip-item-3 item"><img src="http://www.fooju.cn//fjw/uploads/ad/20170829/59a4d284d95c6.png" alt=""></mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        url: ['', '']
      }
    },
    methods: {
      data () {
        return {

        }
      },
      methods: {

      }
    }
  }
</script>

<style scoped>
  /*html,body{*/
    /*width: 400px;*/
    /*height: 300px;*/
    /*margin: 0;*/
  /*}*/
  #app{
    /*width: 27rem;*/
    /*height: 100%;*/
    /*position: relative;*/
  }
  .swipe-wrapper{
    width: 100%;
    height: 300px;
    /*position: absolute;*/
  }
  .item{
    text-align: center;
    font-size: 40px;
    color: white;
  }
  img{
    width: 100%;
    height: 100%;
  }
  .box{
    /*position: absolute;*/
    z-index: 10;
    height: 40px;
    width: 100%;
    opacity: 0.5;
    background-color: #000;
    border: 1px solid red;
  }
  .box>div{
    display: inline-block;
  }
  .box>div:nth-child(1){
    margin: 7px 10px;
    width: 30%;
  }
  .box>div:nth-child(2){
    background-color: #eee;
    height: 30px;
    width: 60%;
    transform: translate(-11px,-2px);
    border-radius: 20px;
  }
  .box>div>a>img{
    width: 20px;
    height: 20px;
  }
  .box>div>a>span{
    color: white;
  }
  .box input{
    height: 70%;
  }
</style>


