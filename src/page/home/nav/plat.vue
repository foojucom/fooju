<template>
  <div class="map">
    <div class="switch">
      <img src="../img/return2.png" alt="" @click="goBack">
      <span :class="{active:value== '二手房'}"  v-on:click="cut('二手房')">二手房</span>
      <span :class="{active:value== '新房'}" v-on:click="cut('新房')">新房</span>
      <span :class="{active:value== '租房'}" v-on:click="cut('租房')">租房</span>
      <img class="loudou" src="../img/loudou.png" alt="">
      <img class="sous" src="../img/sous.png" alt="" @click="search">
    </div>
    <div id="XSDFXPage" class="XSDFXPage">
      地图
    </div>
    <div class="hh" v-show="right">
      <div class="option">
        <div>
          <p>朝向</p>
          <span>东</span>
          <span>西</span>
          <span>南</span>
          <span>北</span>
        </div>
        <div>
          <p>建筑面积</p>
          <span>50以下</span>
          <span>50-70</span>
          <span>70-90</span>
          <span>90-110</span>
          <span>110-130</span>
          <span>130-150</span>
          <span>150-200</span>
          <span>200以上</span>
        </div>
        <div>
          <p>标签</p>
          <span>KTV</span>
          <span>爆米花</span>
        </div>
        <div>
          <p>房龄</p>
          <span>10以内</span>
          <span>15年以内</span>
          <span>20年以内</span>
          <span>20年以上</span>
          <span>5年以内</span>
        </div>
        <div>
          <p>楼层</p>
          <span>底层</span>
          <span>低楼层</span>
          <span>中楼层</span>
          <span>高楼房</span>
          <span>顶层</span>
        </div>
        <div>
          <p>装修情况</p>
          <span>毛坯</span>
          <span>简易装修</span>
          <span>精装修</span>
          <span>豪华装修</span>
        </div>
        <div>
          <p>是否配备电梯</p>
          <span>有电梯</span>
          <span>无电梯</span>
        </div>
        <div>
          <p>类型</p>
          <span>平层</span>
          <span>复式</span>
          <span>跃层</span>
        </div>
      </div>
      <div id="fixed">
        <span>清空条件</span>
        <span>确定</span>
      </div>
    </div>
  </div>
</template>

<script>
  import BMap from 'BMap'
  import {map} from '../../../api/config'
  export default{
    data () {
      return {
        value: '',
        x: 758,
        y: 303,
        z: 12,
        right: false,
        styles: 'pl',
        scaler: 2,
        udt: 20170908
      }
    },
    created () {
      this.getData()
    },
    mounted () {
      var map = new BMap.Map('XSDFXPage', {enableMapClick: true})
      map.centerAndZoom(new BMap.Point(111.672504, 40.836662), 25)
      map.addControl(new BMap.MapTypeControl())
      map.setCurrentCity('呼和浩特')
      map.enableScrollWheelZoom(true)
      setTimeout(function () {
        map.panTo(new BMap.Point(111.672504, 40.836662))
      }, 2000)
      setTimeout(function () {
        map.setZoom(25)
      }, 4000)
      var menu = new BMap.ContextMenu()
      var txtMenuItem = [
        {
          text: '放大',
          callback: function () { map.zoomIn() }
        },
        {
          text: '缩小',
          callback: function () { map.zoomOut() }
        }
      ]
      for (var i = 0; i < txtMenuItem.length; i++) {
        menu.addItem(new BMap.MenuItem(txtMenuItem[i].text, txtMenuItem[i].callback, 100))
      }
      map.addContextMenu(menu)
    },
    methods: {
      getData () {
        map({x: this.x, y: this.y, z: this.z, styles: this.styles, scaler: this.scaler, udt: this.udt}).then(function (res) {
          console.log(111)
          console.log(res)
        })
      },
      goBack () {
        this.$router.go(-1)
      },
      cut (val) {
        this.value = val
      },
      search () {
        this.$router.push('/sousou')
      }
    }
  }
</script>

<style scoped>
  .map{
    width: 100%;
    height: auto;
  }
  .switch{
    height: 50px;
    line-height: 50px;
    border: 1px solid #999999;
  }
  .switch>img{
    height: 20px;
    width: 20px;
    background-color: #fff;
  }
  .switch>img:nth-child(1){
    float: left;
    margin: 15px 50px 5px 10px;
  }
  .switch>span{
    margin: 0 10px;
  }
  .switch>span.active{
    color: red;
    border-bottom: 2px solid red;
  }
  .sous{
    float: right;
    margin: 15px 10px 5px 10px;
  }
  .loudou{
    float: right;
    margin: 15px 10px 5px 10px;
  }
  .option{
    width: 70%;
    float: left;
    margin-left: 100px;
    border: 1px solid red;
  }
  .option>div{
    overflow: auto;
    margin-left: 10px;
  }
  .option span{
    width: 75px;
    height: 25px;
    line-height: 25px;
    border: 1px solid #416bee;
    float: left;
    text-align: center;
    margin: 5px;
  }
  .hh{
    position: relative;
  }
  #fixed{
    position: fixed;
    bottom: 0;
    left: -2px;
    width: 100%;

  }
  #fixed>span{
    flex: 1;
    width: 141px;
    height: 40px;
    line-height: 40px;
    margin: 0;
    border: 0px solid red;
  }
  #fixed>span:nth-child(1){
    background-color: #eeeeee;
    color: #999999;
  }
  #fixed>span:nth-child(2){
    background-color: #416bee;
    color: white;
  }
  html,body,.XSDFXPage{
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
  }
  #XSDFXPage{
    width: 100%;
    height: 600px;
    overflow: hidden;
  }
</style>
