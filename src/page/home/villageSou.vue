<template>
  <div class="village">
    <div>
      <div class="line">
        <span @click="fang" id="house">二手房</span>
        <div id="fang">
          <p v-for="item in type" @click="choice(item.model)">{{item.value}}</p>
        </div>
        <img src="./img/aa.png" alt="">
        <input type="text" placeholder="输入小区进行搜索" @change="Content" v-model="content" style="outline-style: none">
      </div>
      <span class="cancel" @click="cancel">取消</span>
    </div>
    <div id="history">
      <div v-for="item in Recode">
        <span @click="detail(item.name)">{{item.name}}</span>
      </div>
    </div>
    <p>历史搜索</p>
    <div>
      <p v-for="item in this.$store.state.oldRecord">
        <span @click="info(item)">{{item}}</span>
        <span class="remove" click="reMove(item)">X</span>
      </p>
    </div>
    <div>
      <p>清空历史记录</p>
    </div>
  </div>
</template>

<script>
  import {villageFind} from '../../api/config'
  export default{
    data () {
      return {
        arr: [],
        content: '',
        Recode: [],
        aa: '',
//        array: [],
        type: [
          {
            value: '二手房',
            model: 'used'
          },
          {
            value: '新房',
            model: 'new'
          },
          {
            value: '租房',
            model: 'retal'
          }],
        model: ''
      }
    },
    methods: {
      getData () {
        var self = this
        villageFind({type: this.model, name: this.content}).then(function (res) {
          self.Recode = res.data.data
        })
      },
      cancel () {
        this.$router.go(-1)
      },
      fang () {
        document.getElementById('fang').style = 'display:block'
      },
      choice (model) {
        var house = document.getElementById('house')
        if (model === 'used') {
          this.model = 'used'
          house.innerHTML = '二手房'
        } else if (model === 'new') {
          this.model = 'new'
          house.innerHTML = '新房'
        } else if (model === 'retal') {
          this.model = 'retal'
          house.innerHTML = '租房'
        }
        document.getElementById('fang').style = 'display:none'
      },
      Content () {
        document.getElementById('history').style = 'display:block'
        this.getData()
      },
      detail (value) {
        console.log(value)
        if (this.model === 'used' || this.model === '') {
          this.$store.commit('OldRecord', value)
          this.$router.push({path: '/ershou', query: {village: value}})
        } else if (this.model === 'new') {
//          this.newGetData()
        } else if (this.model === 'retal') {
//          this.retailGetData()
        }
//        this.$router.push({path: '/ershou', query: {village: value}})
      },
      info (value) {
        this.$router.push({path: '/ershou', query: {village: value}})
      },
      reMove (value) {
        this.$store.commit('oldRemoveOne', value)
      }
    }
  }
</script>

<style>
  .village>div:nth-child(1){
    height: 50px;
    line-height: 50px;
    border: 1px solid #eeeeee;
  }
  .line{
    display: inline-block;
    margin-left: 10px;
    margin-top: 10px;
    height: 30px;
    width: 80%;
    border: 1px solid #999;
    border-radius: 20px;
    position: relative;
  }
  .line>span{
    font-size: 16px;
    float: left;
    transform: translate(8px,-8px);
  }
  .line>img{
    float: left;
    margin: 5px 10px;
  }
  .line>input{
    float: left;
    margin: 5px 10px;
    width: 200px;
  }
  img{
    width: 20px;
    height: 20px;
  }
  .cancel{
    float: right;
    margin: 0 10px;
  }
  #fang{
    position: absolute;
    border: 1px solid red;
    z-index: 1000;
    top: 40px;
    border-radius: 10px;
    background-color: #fff;
    display: none;
  }
  #fang>p{
    width: 50px;
    margin: 10px;
    height: 30px;
  }
  #history{
    height: 400px;
    overflow: scroll;
    width: 100%;
    display: none;
  }
  .remove{
    float: right;
    margin: 0 10px;
  }
</style>
