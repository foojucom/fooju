<template>
  <div>
    <div class="one">
      <div class="vv">
        <img src="../img/logo.png" alt="" id="img">
        <input type="text" v-model="value" placeholder="请数入小区或商圈名" @change="sou">
      </div>
      <span id="return" @click="fan">取消</span>
    </div>
    <div class="two" v-show="isShow">
      <p>历史搜索</p>
      <!--<div v-for="item in this.$store.state.record">-->
      <div v-for="item in cc">
        <span @click="detail(item)" id="item(item)">{{item}}</span>
        <span @click="delate(item)">X</span>
      </div>
    </div>
    <div class="three" v-show="isShow" @click="clear"><div>清空历史记录</div></div>
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
      id="resu" v-show="show">
      <li v-for="item in result" class="resu" @click="que(item)">
        <span>{{item.name}}</span>
        <span>{{item.count}}套</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui'
  import {VillageFind} from '../../../api/config'
  export default{
    data () {
      return {
        value: '',
        type: 'used',
        loading: false,
        arr: [],
        result: [],
        isShow: true,
        num: 1,
        size: 12,
        cc: [],
        block: [],
        show: false
      }
    },
    created () {
      var a = sessionStorage.getItem('objStr')
      if (a) {
        this.cc = a.split(',')
      }
    },
    methods: {
      loadMore () {
        this.loading = true
        this.size += 12
        this.getDate()
        this.loading = false
      },
      getDate () {
        var self = this
        VillageFind({type: this.type, name: this.value, page_num: this.num, page_size: this.size}).then(function (res) {
          self.result = res.data.data
        })
      },
      sou () {
        this.getDate()
        this.isShow = false
        this.show = true
      },
      fan () {
        this.$router.go(-1)
      },
      que (item) {
        this.cc.push(item.name)
        var name = this.cc.toString()

        sessionStorage.setItem('objStr', name)
//        this.$store.commit('jiLu', name)
        this.getDate()
//        this.$router.push('/ershou/' + name)
        this.$router.push({path: '/ershou', query: {village: name}})
      },
      detail (item) {
        this.$router.push({path: '/ershou', query: {village: item}})
      },
      delate (item) {
        var num = this.cc.indexOf('item')
        this.cc.splice(num - 1, 1)
        sessionStorage.setItem('objStr', this.cc)
//        this.$store.commit('clearOne', item)
      },
      clear () {
        MessageBox.confirm('确定要清空历史搜索么？').then(action => {
//          this.$store.commit('clear', name)
          this.cc = []
          sessionStorage.clear('objStr')
        })
      }
    }
  }
</script>

<style scoped>
  #img{
    width:26px;
    height: 22px;
    float: left;
    margin: 4px 5px 2px 4px;
    border-right: 1px solid #eee;
  }
  .one{
    padding-bottom: 10px;
    border-bottom: 1px solid #999;
  }
  .vv{
    background-color: #eee;
    border-radius: 15px;
    width: 80%;
    height: 30px;
    display: inline-block;
    margin-left: 10px;
  }
  .vv>input{
    background-color: #eee;
    border: 0px;
    height: 27px;
    width: 80%;
    outline-style: none;
  }
  #return{
    font-size: 17px;
    color: #999;
    margin-left: 10px;
    margin-top: 5px;
  }
  #resu{
    height: 500px;
    overflow: scroll;
    padding-left: 0px;
    /*border-bottom: 2px solid #999;*/
  }
  .resu{
    height: 40px;
    line-height: 40px;
    list-style: none;
    border-bottom: 1px solid #eee;
  }
  .resu>span:nth-child(2){
    float: right;
    font-size: 14px;
    color: #999;
    margin-right: 10px;
  }
  .two div{
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #eee;
  }
  .two div>span:nth-child(1){
    font-size: 18px;
    text-align: left;
  }
  .two div>span:nth-child(2){
    font-size: 18px;
    float: right;
    margin-right: 10px;
  }
  .three{
    background-color: #eee;
    width: 100%;
    padding-top: 10px;
  }
  .three>div{
    background-color: #fff;
    color: red;
    text-align: center;
    width: 100%;
  }
</style>
