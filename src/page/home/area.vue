<template>
  <div class="area">
    <div>
      <img src="./img/return2.png" alt="" @click="goBack">
      <span>选择城市</span>
    </div>
    <div>当前定位城市</div>
    <div>呼和浩特市</div>
    <div>所有区域</div>
    <p v-for="item in arr">{{item.value}}</p>
  </div>
</template>

<script>
  import {area} from '../../api/config'
  export default{
    data () {
      return {
        arr: []
      }
    },
    created () {
      this.arr = area
    },
    methods: {
      goBack () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .area>div:nth-child(1){
    height: 50px;
    border: 1px solid #eee;
  }
  .area>div>img{
    width: 20px;
    height: 20px;
    margin: 15px;
    float: left;
  }
  .area>div>span{
    float: left;
    margin-top: 10px;
    margin-left: 120px;
    font-size: 18px;
  }
  .area>div:nth-child(2),.area>div:nth-child(4){
    height: 50px;
    line-height: 50px;
    background-color: #eee;
  }
  .area>div:nth-child(3){
    height: 50px;
    line-height: 50px;
  }
  p{
    height: 40px;
    border-bottom: 1px solid #eee;
  }
</style>
