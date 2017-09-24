<template>
  <div>
    <div class="head">
      <img src="../img/return2.png" alt="" @click="goBack">
      <span>福居百科</span>
    </div>
    <div class="search">
      <div>
        <img src="../img/sous.png" alt="">
        <input type="text" placeholder="对房产有疑问？来搜搜吧~">
      </div>
    </div>
    <div class="SouSuo">百科搜索</div>
    <div class="baiKeSou">
      <div v-for="item in arr" @click="baiKeDetail(item.id)">
        <div>
          <div>
            <img src="http://www.fooju.cn//fjw/uploads/ency/20170829/59a4f00443f9e.jpg" alt="">
          </div>
          <div>
            <span>{{item.title}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {EncyList} from '../../../api/config'
  export default{
    data () {
      return {
        size: 10,
        num: 1,
        arr: [],
        aa: []
      }
    },
    created () {
      this.getData()
//      console.log(this)
    },
    methods: {
      getData () {
        var self = this
        EncyList({page_size: this.size, page_num: this.num}).then(function (res) {
          self.arr = res.data.data
          self.aa = self.arr.shift()
//          console.log(res.data.data)
        })
      },
      goBack () {
        this.$router.go(-1)
      },
      baiKeDetail (val) {
        console.log(666666666)
        console.log(val)
        this.$router.push({name: 'baiKeDetail', params: {id: val}})
      }
    }
  }
</script>

<style scoped>
  .search{
    border: 1px solid #eeeeee;
    height: 55px;
    width: 100%;
    background-color: #eee;
    margin-top: 50px;
  }
  .search>div{
    width: 90%;
    height: 35px;
    margin: 10px 20px;
    /*border: 1px solid red;*/
    background-color: #fff;
    border-radius: 20px;
  }
  .search>div>img{
    width: 20px;
    height: 20px;
    float: left;
    margin: 10px;
  }
  .search>div>input{
    width: 80%;
    height: 30px;
    outline-style: none;
  }
  .head{
    height: 40px;
    line-height: 40px;
    position: fixed;
    top: 0;
  }
  .head>img{
    width: 20px;
    height: 20px;
    float: left;
    margin: 10px;
  }
  .head>span{
    margin-left: 130px;
    font-size: 18px;
  }
  .SouSuo{
    height: 20px;
    font-weight: 600;
    padding: 10px;

  }
  .baiKeSou>div{
    height: 135px;
    width: 100%;
    border: 1px solid #eeeeee;
    /*border-top: 1px solid #eeeeee;*/
    /*border-bottom: 1px solid #eeeeee;*/
  }
  .baiKeSou>div>div{
    height: 102px;
    /*border: 1px solid red;*/
    margin: 15px 0;
  }
  .baiKeSou>div>div>div{
    display: table-cell;
    vertical-align: middle;
    height: 100px;
  }
  .baiKeSou>div>div>div>img{
    width: 124px;
    height: 100px;
    vertical-align: middle;
    /*float: left;*/
  }
  .baiKeSou>div>div>div>span{
    vertical-align: middle;
  }
</style>
