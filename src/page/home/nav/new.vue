<template>
  <div>
    <div id="max">
      <div id="detail">
        <div class="nav" v-show="nav" id="nav">
          <div v-on:click="select('区域')">
            <span>区域</span>
            <img src="../img/aa.png" alt="" :class="{moving:content === '区域'}">
          </div>
          <div v-on:click="select('价格')">
            <span>价格</span>
            <img src="../img/aa.png" alt="" :class="{moving:content === '价格'}">
          </div>
          <div v-on:click="select('房型')">
            <span>房型</span>
            <img src="../img/aa.png" alt="">
          </div>
          <div v-on:click="select('更多')">
            <span>更多</span>
            <img src="../img/aa.png" alt="">
          </div>
        </div>
        <mt-popup
          v-model="PopupVisible"
          position="top" style="width: 96%">
          <div style="height: 50px"></div>
          <div v-for="item in area"><p>{{item}}</p></div>
        </mt-popup>
        <mt-popup
          v-model="popupVisible"
          position="top" style="width: 96%">
          <div v-for="item in price">
            <p>{{item.label}}</p>
          </div>
        </mt-popup>
      </div>
    </div>
    <souSuo class="ding"></souSuo>
    <lunBo  class="ding"></lunBo>
    <div class="nav">
      <div v-on:click="select('区域')">
        <span>区域</span>
        <img src="../img/aa.png" alt="" :class="{moving:content === '区域'}">
      </div>
      <div v-on:click="select('价格')">
        <span>价格</span>
        <img src="../img/aa.png" alt="" :class="{moving:content === '价格'}">
      </div>
      <div v-on:click="select('房型')">
        <span>房型</span>
        <img src="../img/aa.png" alt="">
      </div>
      <div v-on:click="select('更多')">
        <span>更多</span>
        <img src="../img/aa.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import lunBo from '../lunbo.vue'
  import souSuo from './sousuo.vue'
  export default{
    data () {
      return {
        nav: false,
        PopupVisible: false,
        popupVisible: false,
        content: '',
        area: ['不限', '金桥开发区', '如意开发区', '玉泉区', '回民区', '赛罕区', '新城区'],
        price: [
          {label: '不限', value: ''},
          {label: '50万以下', value: '0-50'},
          {label: '50万-100万', value: '50-100'},
          {label: '100万-200万', value: '100-200'},
          {label: '200万-300万', value: '200-300'},
          {label: '300万-400万', value: '300-400'},
          {label: '400万-500万', value: '400-500'},
          {label: '500万-600万', value: '500-600'},
          {label: '600万-700万', value: '600-700'},
          {label: '700万-800万', value: '700-800'},
          {label: '800万-900万', value: '800-900'},
          {label: '900万-1000万', value: '900-1000'},
          {label: '1000万以上', value: '1000-9999999999'}
        ]
      }
    },
    components: {
      lunBo,
      souSuo
    },
    methods: {
      select (val) {
        if (val === '区域') {
          this.content = val
          this.PopupVisible = true
        } else if (val === '价格') {
          this.content = val
          this.popupVisible = true
        }
        this.nav = true
      }
    }
  }
</script>

<style>
  img{
    height: 20px;
    width: 20px;
  }
  .nav{
    display: flex;
    border: 1px solid #eeeeee;
  }
  .nav>div{
    flex: 1;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
  .nav>div>img{

  }
  .ding{
    position: relative;
  }
  #nav{
    position: relative;
    z-index: 9999;
    background-color: #fff;
  }
  img.moving{
    animation: aa 0.7s linear 0s infinite;
  }
  @keyframes aa {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(45deg);
    }
    50% {
      transform: rotate(90deg);
    }
    75% {
      transform: rotate(135deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
  /*img:moving{*/
    /*transform: rotate(180deg);*/
  /*}*/
</style>
