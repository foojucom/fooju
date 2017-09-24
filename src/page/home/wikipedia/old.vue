<template>
  <div class="fjbk">
    <div class="head">
      <img src="../img/return2.png" alt="" @click="goBack">
      <span>福居百科</span>
    </div>
    <div class="search">
      <div>
        <img src="../img/sous.png" alt="">
        <input type="text" placeholder="对房产有疑问？来搜搜吧~" @click="baiKeSearch">
      </div>
    </div>
    <div class="figure">
      图片轮播
    </div>
    <div class="min">
      <ul class="fang">
        <li @click="oldImg"><router-link to=""><span>二手房</span></router-link></li>
        <li @click="newImg"><router-link to=""><span>新房</span></router-link></li>
        <li @click="baoDianImg"><router-link to=""><span style="margin-left: 5px">购房宝典</span></router-link></li>
        <li @click="rentsImg"><router-link to=""><span>租房</span></router-link></li>
        <li @click="tradeImg"><router-link to=""><span>换房</span></router-link></li>
      </ul>
    </div>
    <div class="old detail" id="old">
      <div>
        <p class="name" v-for="item in old" @click="oldChange(item.name)">{{item.name}}</p>
      </div>
      <div>
        <p v-for="item in detail">{{item.title}}</p>
      </div>
    </div>
    <div class="old detail" id="New">
      <div>
        <p class="name" v-for="item in New" @click="newChange(item.id)">{{item.name}}</p>
      </div>
      <div>
        <p v-for="item in detail">{{item.title}}</p>
      </div>
    </div>
    <div class="old detail" id="baoDian">
      <div>
        <p class="name" v-for="item in baoDian" @click="baoDianChange(item.name)">{{item.name}}</p>
      </div>
      <div>
        <p v-for="item in detail">{{item.title}}</p>
      </div>
    </div>
    <div class="old detail" id="rents">
      <div>
        <p class="name" v-for="item in rents" @click="rentChange(item.name)">{{item.name}}</p>
      </div>
      <div>
        <p v-for="item in detail">{{item.title}}</p>
      </div>
    </div>
    <div class="old detail" id="trade">
      <div>
        <p class="name" v-for="item in trade" @click="tradeChange(item.name)">{{item.name}}</p>
      </div>
      <div>
        <p v-for="item in detail">{{item.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {EncyTypeList, EncyList} from '../../../api/config'
  export default{
    data () {
      return {
        page_num: 1,
        page_size: 10,
        cat1: 2,
        cat2: 3,
        size: 100,
        detail: [],
        arr: [],
        pids: [],
        old: [],
        New: [],
        baoDian: [],
        rents: [],
        trade: []
      }
    },
    created () {
      this.getData()
      this.GetData()
    },
    methods: {
      getData () {
        var self = this
        EncyTypeList({}).then(function (res) {
          self.arr = res.data.datas
          self.arr.forEach(function (e) {
            self.pids.push(e.pids)
          })
          console.log(self.pids)
          self.old = self.pids[0]
          self.New = self.pids[1]
          self.baoDian = self.pids[2]
          self.rents = self.pids[3]
          self.trade = self.pids[4]
        })
      },
      GetData () {
        var self = this
        EncyList({cat1: this.cat1, cat2: this.cat2, page_size: this.size}).then(function (res) {
          self.detail = res.data.data
        })
      },
      oldChange (val) {
        if (val === '买房风险') {
          this.cat1 = 2
          this.cat2 = 3
        } else if (val === '入住/交接') {
          this.cat1 = 2
          this.cat2 = 8
        } else if (val === '缴税/过户') {
          this.cat1 = 2
          this.cat2 = 9
        } else if (val === '全款/贷款') {
          this.cat1 = 2
          this.cat2 = 10
        } else if (val === '签约/定房') {
          this.cat1 = 2
          this.cat2 = 11
        } else if (val === '看房/选房') {
          this.cat1 = 2
          this.cat2 = 12
        } else if (val === '准备买房') {
          this.cat1 = 2
          this.cat2 = 13
        }
        this.GetData()
      },
      newChange (val) {
        console.log(val)
        if (val === 15) {
          this.cat1 = 4
          this.cat2 = 15
        } else if (val === '16') {
          this.cat1 = 4
          this.cat2 = 16
        } else if (val === '19') {
          this.cat1 = 4
          this.cat2 = 19
        } else if (val === '20') {
          this.cat1 = 4
          this.cat2 = 20
        } else if (val === '21') {
          this.cat1 = 4
          this.cat2 = 21
        } else if (val === '25') {
          this.cat1 = 4
          this.cat2 = 25
        }
        this.GetData()
      },
      baoDianChange (val) {
        if (val === '房产政策') {
          this.cat1 = 5
          this.cat2 = 22
        } else if (val === '购房建议') {
          this.cat1 = 5
          this.cat2 = 23
        } else if (val === '法律纠纷') {
          this.cat1 = 5
          this.cat2 = 24
        }
        this.GetData()
      },
      rentChange (val) {
        if (val === '注意事项') {
          this.cat1 = 7
          this.cat2 = 17
        } else if (val === '租房风险') {
          this.cat1 = 7
          this.cat2 = 29
        }
        this.GetData()
      },
      tradeChange (val) {
        if (val === '准备换房') {
          this.cat1 = 6
          this.cat2 = 26
        } else if (val === '换房风险') {
          this.cat1 = 6
          this.cat2 = 27
        } else if (val === '缴税/过户') {
          this.cat1 = 6
          this.cat2 = 28
        }
        this.GetData()
      },
      oldImg () {
        document.getElementById('old').style.display = 'flex'
        document.getElementById('New').style.display = 'none'
        document.getElementById('baoDian').style.display = 'none'
        document.getElementById('rents').style.display = 'none'
        document.getElementById('trade').style.display = 'none'
        this.cat1 = 2
        this.cat2 = 3
        this.GetData()
      },
      newImg () {
        document.getElementById('old').style.display = 'none'
        document.getElementById('New').style.display = 'flex'
        document.getElementById('baoDian').style.display = 'none'
        document.getElementById('rents').style.display = 'none'
        document.getElementById('trade').style.display = 'none'
        this.cat1 = 4
        this.cat2 = 15
        this.GetData()
      },
      baoDianImg () {
        document.getElementById('old').style.display = 'none'
        document.getElementById('New').style.display = 'none'
        document.getElementById('baoDian').style.display = 'flex'
        document.getElementById('rents').style.display = 'none'
        document.getElementById('trade').style.display = 'none'
        this.cat1 = 5
        this.cat2 = 22
        this.GetData()
      },
      rentsImg () {
        document.getElementById('old').style.display = 'none'
        document.getElementById('New').style.display = 'none'
        document.getElementById('baoDian').style.display = 'none'
        document.getElementById('rents').style.display = 'flex'
        document.getElementById('trade').style.display = 'none'
        this.cat1 = 7
        this.cat2 = 17
        this.GetData()
      },
      tradeImg () {
        document.getElementById('old').style.display = 'none'
        document.getElementById('New').style.display = 'none'
        document.getElementById('baoDian').style.display = 'none'
        document.getElementById('rents').style.display = 'none'
        document.getElementById('trade').style.display = 'flex'
        this.cat1 = 6
        this.cat2 = 26
        this.GetData()
      },
      goBack () {
        this.$router.go(-1)
      },
      baiKeSearch () {
        this.$router.push('/baiKeSearch')
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
  .figure{
    height: 250px;
    width: 100%;
  }
  .min{
    height: 85px;
  }
  .fang:after{
    content: '';
    height: 0;
    line-height: 0;
    display: block;
    visibility: hidden;
    clear: both;
  }
  .fang{
    float: left;
    margin-left: -23px;
  }
  .fang>li{
    display: inline-block;
    margin: 0 3px;
    list-style: none;
    width: 64px;
    height: 54px;
    line-height: 54px;
    background-size:64px 54px;
  }
  .fang>li>a{
    text-align: center;
    text-decoration: none;
    font-size: 12px;
    color: white;
  }
  .fang>li>a>span{
    margin-left: 20px;
  }
  .fang>li:nth-child(1){
    background-image: url(http://www.fooju.cn/fjw/uploads/encyType/20170829/59a4cd9f6d206.png) ;
  }
  .fang>li:nth-child(2){
    background-image: url(http://www.fooju.cn/fjw/uploads/encyType/20170829/59a4cd9f6d206.png);
  }
  .fang>li:nth-child(3){
    background-image: url(http://www.fooju.cn/fjw/uploads/encyType/20170829/59a4cd9f6d206.png);
  }
  .fang>li:nth-child(4){
    background-image: url(http://www.fooju.cn/fjw/uploads/encyType/20170829/59a4cd9f6d206.png);
  }
  .fang>li:nth-child(5){
    background-image: url(http://www.fooju.cn/fjw/uploads/encyType/20170829/59a4cd9f6d206.png);
  }
  #old{
    display: flex;
  }
  .fjbk>.detail{
    display: none;
  }
  .old{
    height: 390px;
    width: 100%;
    border: 1px solid red;
    display: flex;
  }
  .old>div{
    display: inline-block;
    border: 1px solid #eee;
  }
  .old>div:nth-child(1){
    height: 98%;
    display: flex;
    text-align: center;
    flex-direction: column;
    flex: 1;
  }
  .name{
    display: block;
    margin: 0;
    height: 50px;
    line-height: 50px;
    flex: 1;
  }
  .old>div:nth-child(2){
    height: 98%;
    flex: 3;
    overflow: scroll;
  }
  .old p{
    font-size: 16px;
  }
</style>
