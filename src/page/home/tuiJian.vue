<template>
  <div>
    <div class="bb">
      <div>
        <div class="jian">
          <span>热门推荐</span>
          <a href="">更多{{this.value}}</a>
        </div>
        <div class="btn">
          <button :class="{active:value=='二手房'}" v-on:click="change('二手房')">二手房</button>
          <button :class="{active:value=='新房'}"  v-on:click="change('新房')">新房</button>
          <button :class="{active:value=='租房'}"  v-on:click="change('租房')">租房</button>
        </div>
      </div>
      <div class="section">
        <old v-show="value == '二手房'"></old>
        <ne v-show="value == '新房'"></ne>
        <zufang v-show="value == '租房'"></zufang>
      </div>
    </div>
  </div>
</template>

<script>
  import old from './tuijianafter/old.vue'
  import zufang from './tuijianafter/zufang.vue'
  import ne from './tuijianafter/new.vue'
  export default{
    data () {
      return {
        value: '二手房'
      }
    },
    components: {
      old,
      zufang,
      ne
    },
    methods: {
      change (t) {
        this.value = t
      }
    }
  }
</script>

<style scoped>
  .bb>div:nth-child(1){
    height: 100px;
    /*height: auto;*/
    width: 100%;
    border-bottom: 1px solid #999;

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
    color: red;
  }
  .btn>button.active{
    background-color:red;
    color: white;
  }
  .section>button{
    display: none;
  }
  .section *.active{
    display: block;
  }
</style>
