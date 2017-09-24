<template>
  <div>
    <div class="head">
      <img src="../img/return2.png" alt="" @click="$router.go(-1)">
      <span>选择经纪人</span>
    </div>
    <div v-for="item in array" class="detail">
      <div class="detailOne">
        <span id="name">{{item.agent_name}}</span>
        <p><span>门店：{{item.store_name}}</span></p>
        <span class="aa">评分：{{item.avg_score}}</span>
        <span class="aa">{{item.comment_count}}人评论</span>
      </div>
      <div><button @click="btn">选择</button></div>
    </div>
  </div>
</template>

<script>
  import {listsByHouse} from '../../../api/config'
  export default{
    data () {
      return {
        num: '',
        array: []
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        var self = this
        this.num = sessionStorage.getItem('orderNum')
        listsByHouse({number: this.num}).then(function (res) {
          console.log(res.data.data)
          self.array = res.data.data
        })
      },
      btn () {
        var name = document.getElementById('name').innerHTML
        this.$router.push({path: '/bill', params: {Name: name}})
      }
    }
  }
</script>

<style scoped>
  img{
    width:20px;
    height: 20px;
  }
  .head{
    height: 40px;
    width: 100%;
    line-height: 40px;
    text-align: center;
    border: 1px solid red;
  }
  .head>img{
    float: left;
    margin: 10px;
  }
  .detail{
    height: 100px;
    display: flex;
  }
  .detail>div:nth-child(1){
    flex: 8;
    margin-left: 20px;
  }
  .detail>div:nth-child(2){
    flex: 2;
    line-height: 100px;
  }
  .detail>div>button{
    padding: 5px 10px;
    font-size: 18px;
    color: red;
    border: 1px solid #000;
    border-radius: 5px;
    background-color: #fff;
  }
  .detailOne>p{
    margin: 5px 0;
    font-size: 14px;
  }
  .aa{
    font-size: 14px;
    color: #999;
  }
</style>
