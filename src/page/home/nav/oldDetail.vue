<template>
  <div style="background-color: #eee">
    <div v-for="item in list">
      <div>
        <div class="fan">
          <i class="fanHui" @click="$router.go(-1)"></i>
        </div>
        <div class="lunbo"></div>
        <p class="title">{{item.title}}</p>
        <ul class="ul">
          <li>
            <p>{{item.total_price}}万</p>
            <p>售价</p>
          </li>
          <li>
            <p>{{item.livingroom}}室{{item.bedroom}}厅{{item.wc}}卫</p>
            <p>户型</p>
          </li>
          <li>
            <p>{{item.use_area}}m2</p>
            <p>面积</p>
          </li>
        </ul>
      </div>
      <div class="message">
        <ul>
          <li>
            <span>均价：</span>
            <span>{{item.unit_price}}元／平</span>
          </li>
          <li>
            <span>挂牌：</span>
            <span>{{item.guapai}}</span>
          </li>
          <li>
            <span>楼层：</span>
            <span>{{item.floor}}/{{item.floor_totle}}层</span>
          </li>
          <li>
            <span>装修：</span>
            <span>{{item.decoration}}</span>
          </li>
          <li>
            <span>年代：</span>
            <span>{{item.age}}年</span>
          </li>
          <li>
            <span>房源编号：</span>
            <span id="num">{{item.number}}</span>
          </li>
          <li>
            <span>小区:</span>
            <span>{{item.village}}</span>
          </li>
          <li>
            <span>看房时间</span>
          </li>
        </ul>
        <ul>
          <li>
            <span>首付：</span>
            <span>{{item.first_pay}}万</span>
          </li>
          <li>
            <span>用途：</span>
            <span>{{item.purpose}}</span>
          </li>
          <li>
            <span>朝向：</span>
            <span>{{item.direction}}</span>
          </li>
          <li>
            <span>楼型：</span>
            <span>{{item.type}}</span>
          </li>
          <li>
            <span>区域：</span>
            <span>{{item.region}}</span>
          </li>
          <li>
            <span>权限：</span>
            <span>{{item.quanshu}}</span>
          </li>
        </ul>
      </div>
      <div class="tedian">
        <div>
          <span>房源特点</span>
          <a href="">
            <span class="rout">更多</span>
          </a>
        </div>
        <div>
          <p>核心卖点</p>
          <p>{{item.highlights}}</p>
        </div>
        <div>
          <p>户型介绍</p>
          <p>{{item.house_introduce}}</p>
        </div>
      </div>
      <div class="jilu">
        <div>
          <span>带看记录</span>
          <a href="">
            <span>更多</span>
          </a>
        </div>
        <div v-for="aa in jilu">
          <div>
            <p>{{aa.seven}}</p>
            <p>近七日带看(次)</p>
          </div>
          <div>
            <p>{{aa.all}}</p>
            <p>累计带看(次)</p>
          </div>
        </div>
      </div>
      <div class="location"><h3>地理位置</h3></div>
      <div class="jian">
        <p>推荐房源</p>
        <div class="tj">
          <div v-for="item in arr">
            <div class="pic"></div>
            <div class="you">
              <span class="tle">{{item.title}}</span>
              <p id="shi"><span>建筑面积</span>{{item.built_area}}</p>
              <span class="wan">均价</span>
              <span class="wan">{{item.unit_price}}元／m</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div @click="attention()" v-show="aa">
        <img src="../img/xin.png" alt="" id="xin">
        <span id="follow">关注</span>
      </div>
      <div v-show="bb" @click="attention()">
        <img src="../img/xinRed.png" alt="" id="xin">
        <span id="follow">取消关注</span>
      </div>
      <div class="fang">
        <span @click="see" id="Order">预约看房</span>
      </div>
      <div class="agent">
        <span @click="agent">资讯经纪人</span>
      </div>
    </div>
    <mt-popup
      v-model="popupVisible"
      position="bottom"
      popup-transition="popup-fade" id="max">
      <div class="bespoke">
        <span>预约操作</span>
        <span>关闭</span>
      </div>
      <div class="continue">
        <div><span class="continueOne" @click="goGo">继续看房</span></div>
        <div><span class="continueTwo" @click="bill">预约看房时间</span></div>
      </div>
    </mt-popup>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui'
  import {usedDetail, OrderHouse} from '../../../api/config'
  export default{
    data () {
      return {
        id: 16140,
        list: [],
        arr: [],
        aa: true,
        bb: false,
        red: 1,
        popupVisible: false,
        order: 0,
        number: '',
        jilu: []
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        var self = this
        this.id = this.$route.query.id
//        var IDS = sessionStorage.getItem('id')
//        console.log(IDS)
//        console.log(this.$route.params)
        usedDetail({id: this.id}).then(function (res) {
//          console.log(res.data.data)
          self.list = res.data.data.fangyuanxinxi
          self.arr = res.data.data.tuijian
          self.jilu = res.data.data.daikanjilu
        })
      },
      getOrderMsg () {
//        var self = this
        OrderHouse({}).then(function (res) {

        })
      },
      agent () {
        this.$router.push('/testt')
      },
      attention () {
        if (this.red === 1) {
          Toast({
            message: '关注成功',
            duration: 1000
          })
          this.aa = false
          this.bb = true
          this.red = 0
        } else {
          Toast({
            message: '取消关注',
            duration: 1000
          })
          console.log(6666666666)
          this.aa = true
          this.bb = false
          this.red = 1
        }
      },
      see () {
        this.$store.commit('order', this.order)
        Toast({
          message: '已预约',
          duration: 1000
        })
        document.getElementById('Order').innerHTML = '已预约'
        Toast({
          message: '以为你添加到预约清单',
          duration: 1000
        })
        this.popupVisible = true
      },
      goGo () {
        this.$router.push('/ershou')
      },
      bill () {
        var num = document.getElementById('num').innerHTML
        console.log(typeof num)
        sessionStorage.setItem('orderNum', num)
        this.$router.push('/bill')
      }
    }
  }
</script>

<style scoped>
  .fan{
    width: 100%;
    height: 45px;
    position: fixed;
    opacity: 0.5;
    background-color: #444;
    top:0;
  }
  .fanHui{
    width: 20px;
    height: 30px;
    background-image: url(../img/retu.png);
    background-repeat:no-repeat;
    background-size: 15px 23px;
    background-position: 2px 2px;
    float: left;
    margin:10px;
  }
  ul{
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .lunbo{
    width: 100%;
    height: 310px;
    background-color: #fff;
  }
  .title{
    line-height: 55px;
    background-color: #fff;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    margin: 0;
  }
  .ul{
    display: flex;
    background-color: #fff;
  }
  .ul>li{
    flex: 1;
    text-align: center;
  }
  .ul>li>p{
    margin: 6px;
  }
  .ul>li>p:nth-child(1){
    color: red;
  }
  .message{
    display: flex;
    margin: 15px 0;
    background-color: #fff;
  }
  .message>ul:nth-child(1){
    margin-left: 10px;
    flex: 0.7;
  }
  .message>ul:nth-child(2){
    flex: 0.3;
  }
  .message>ul>li{
    margin: 15px 0;
  }
  .message>ul>li>span:nth-child(1){
    color: #999;
  }
  .tedian{
    margin: 10px 0;
    background-color: #fff;
    padding-bottom: 20px;
  }
  .tedian>div{
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #999;
  }
  .tedian>div:nth-child(1){
    padding-top: 20px;
  }
  .tedian>div>span:nth-child(1){
    font-size: 18px;
    margin-left: 5px;
  }
  .rout{
    float: right;
    font-size: 12px;
    margin: 5px;
    color: #999;
  }
  .tedian>div>p{
    margin: 5px 0;
  }
  .jilu{
    background-color: #fff;
  }
  .jilu>div:nth-child(1){
    padding: 20px 0;
    border-bottom: 1px solid #ccc;
  }
  .jilu>div>span{
    font-size: 18px;
  }
  .jilu>div>a>span{
    float: right;
    font-size: 12px;
    margin: 5px;
    color: #999;
  }
  .jilu>div:nth-child(2){
    display: flex;
  }
  .jilu>div>div{
    flex: 1;
    text-align: center;
  }
  .jilu>div>div:nth-child(1){
    border-right: 1px solid #ccc;
  }
  .jilu>div>div>p{
    margin: 10px 0;
  }
  .location{
    height: 300px;
    width: 100%;
    background-color: #fff;
  }
  .jian{
    background-color: #fff;
    margin-bottom: 60px;
  }
  .jian>p{
    padding: 15px 0;
    font-size: 18px;
    border-bottom: 1px solid #999;
  }
  .pic{
    width: 133px;
    height: 100px;
    background-color:red;
    /*margin:10px 12px;*/
    float: left;
    display: inline-block;
  }
  .you{
    display: flex;
    float: left;
    border-bottom: 0px;
  }
  .tj>div{
    height:108px;
    width: 100%;
    margin-top: 6px;
    border-bottom: 1px solid #999;
  }
  .tj>div>div{
    display: inline-block;
    float: left;
  }
  .tj>div>div:nth-child(2){
    width: 225px;
    /*margin-top: 8px;*/
  }
  #shi{
    color: #999;
    margin: 5px;
    font-size: 12px;
  }
  .wan{
    color: red;
    font-weight: 600
  }
  .tle{
    font-size: 15px;
  }
  .bottom{
    height: 50px;
    width: 100%;
    line-height: 50px;
    position: fixed;
    bottom: 0px;
    display: flex;
    border-top: 1px solid #999;
    background-color: #fff;
  }
  .bottom>div{
    flex: 1;
    text-align: center;
  }
  .fang{
    background-color: #3533ff;
  }
  .agent{
    background-color: #ff463d;
  }
  .bottom>div>span{
    color: white;
    font-weight: 600;
  }
  #follow{
    color: black;
    font-weight: 400;
  }
  #xin{
    width: 20px;
    height: 20px;
    transform: translateY(3px);
  }
  #max{
    width: 100%;
    height: auto;
  }
  .bespoke{
    height: 30px;
  }
  .bespoke>span:nth-child(1){
    float: left;
    margin: 10px;
  }
  .bespoke>span:nth-child(2){
    float: right;
    margin: 10px;
  }
  #max>div:nth-child(2){
    height: 60px;
    width: 100%;
    line-height: 60px;
    display: flex;
    border-top: 1px solid #eee;
  }
  .continue>div{
    flex: 1;
    text-align: center;
  }
  .continueOne{
    padding: 10px;
    border: 1px solid #eee;
  }
  .continueTwo{
    padding: 10px;
    background-color: #18106e;
    color: white;
  }
</style>
