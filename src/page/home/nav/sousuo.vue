<template>
  <div class="boss">
    <div @click="goBack">
      <img src="../img/return2.png" alt="" class="img">
    </div>
    <div>
      <img src="../img/logo.png" alt="" id="img">
      <input type="text" placeholder="请数入小区或商圈名" @click="sou">
    </div>
    <div>
      <img src="../img/location.png" alt="" id="location" @click="map">
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {

      }
    },
    created () {

    },
    methods: {
      goBack () {
        this.$router.go(-1)
      },
      sou () {
        this.$router.push('/sousou')
      },
      map () {
        this.$router.push('/plat')
      }
    }
  }
</script>

<style scoped>
  template,.boss{
    width: 100%;
    height: 50px;
    background-color: #eee;
  }
  .img{
    width:26px;
    height: 22px;
    margin: 0 5px;
  }
  #img{
    width:26px;
    height: 22px;
    float: left;
    margin: 4px 5px 2px 4px;
    border-right: 1px solid #eee;
  }
  .boss>div{
    float: left;
  }
  .boss>div:nth-child(1){
    margin-top: 15px;
  }
  .boss>div:nth-child(2){
    border-radius: 15px;
    margin-top: 10px;
    width: 300px;
    height: 28px;
    background-color: #fff;
  }
  .boss>div>input{
    border: 0px;

    height: 22px;
    float: left;
    transform: translateX(5);
  }
  #location{
    width:26px;
    height: 22px;
    margin: 11px 15px;
  }
</style>
