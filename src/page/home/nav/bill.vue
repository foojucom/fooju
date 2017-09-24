<template>
  <div>
    <div class="Head">
      <img src="../img/return3.png" alt="" @click="$router.go(-1)">
      <span>看房清单</span>
    </div>
    <div class="speed">
      <div>
        <div class="tuPian"><img src="../img/house.png" alt=""></div>
        <p>挑选房源</p>
      </div>
      <div>
        <div class="tuPian"><img src="../img/clock.png" alt=""></div>
        <p>预约时间</p>
      </div>
      <div>
        <div class="tuPian" id="tuPian"><img src="../img/text.png" alt=""></div>
        <p>提交成功</p>
      </div>
    </div>
    <div class="message">
      <div>
        <div>
          <span>称呼</span>
          <input type="text" placeholder="您的称呼-先生／女士？" class="entry" v-model="user.call">
        </div>
        <div>
          <span>手机号码</span>
          <input type="text" placeholder="您的手机号码？" class="entry" v-model="user.phone">
        </div>
        <div>
          <span>预约时间</span>
          <div id="data">
            <span @click="time">选择日期</span>
          </div>
        </div>
      </div>
    </div>
    <div class="text">
      <p>预约要求（选填）</p>
      <div>
        <textarea name="" id="" cols="40" rows="3" v-model="user.textarea"></textarea>
      </div>
    </div>
    <div class="order">
      <span>预约经纪人</span>
      <span @click="change">请选择</span>
    </div>
    <div class="btn">
      <mt-button type="danger" @click="order">立即预约</mt-button>
    </div>
    <mt-popup
      v-model="popupVisible"
      position="bottom"
    style="width: 100%">
      <div class="sure">
        <span>取消</span>
        <span>确定</span>
      </div>
      <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
    </mt-popup>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        popupVisible: false,
        user: {
          call: '',
          numBer: '',
          phone: '',
          agentName: '',
          textarea: '',
          year: '',
          month: '',
          data: '',
          house: '',
          minute: ''
        },
        slots: [
          {
            flex: 1,
            values: ['2017年', '2018年', '2019年', '2020年', '2021年', '2022年', '2023年', '2024年', '2025年', '2026年', '2027年'],
            className: 'slot1',
            textAlign: 'left'
          },
          {
            flex: 1,
            values: ['01月', '02月', '03月', '04月', '05月', '06月', '07月', '08月', '09月', '10月', '11月', '12月', '13月', '14月', '15月', '16月', '17月', '18月', '19月', '20月', '21月', '22月', '23月'],
            className: 'slot2',
            textAlign: 'left'
          },
          {
            flex: 1,
            values: ['21日', '22日', '23日', '24日', '25日', '26日', '27日', '28日', '29日', '30日'],
            className: 'slot2',
            textAlign: 'left'
          },
          {
            flex: 1,
            values: ['00时', '01时', '02时', '03时', '04时', '05时', '06时', '07时', '08时', '09时', '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时', '18时', '19时', '20时', '21时', '22时', '23时', '24时'],
            className: 'slot2',
            textAlign: 'left'
          },
          {
            flex: 1,
            values: ['00分', '10分', '20分', '30分', '40分', '50分'],
            className: 'slot2',
            textAlign: 'left'
          }
        ]
      }
    },
    created () {
      this.agentName = this.$route.params.Name
    },
    methods: {
      time () {
        this.popupVisible = true
      },
      onValuesChange (picker, values) {
        this.user.year = values[0]
        this.user.month = values[0]
        this.user.data = values[0]
        this.user.house = values[0]
        this.user.minute = values[0]
      },
      change () {
        this.$router.push({path: '/orderAgent', params: this.user})
      },
      order () {
        this.$router.push('/schedule')
      }
    }
  }
</script>

<style scoped lang="less">
  p{
    margin: 0px;
  }
  img{
    width: 20px;
    height: 20px;
  }
  .Head{
    height: 40px;
    width: 100%;
    line-height: 40px;
    border: 1px solid #eeeeee;
    text-align: center;
    img{
      float: left;
      margin: 10px;
    }
    span{
      margin-right: 30px;
    }
  }
  .speed{
    display: flex;
    height: 100px;
    margin-top: 20px;
    border: 1px solid red;
    div{
      flex: 1;
      margin-top: 10px;
      text-align: center;
    }
  }
  .tuPian{
    height: 40px;
    width: 40px;
    margin: auto;
    background-color: #271c6e;
    border-radius: 50%;
  }
  .tuPian>img{
    margin-top: 8px;
  }
  #tuPian{
    background-color: #fff;
  }
  .message{
    width: 100%;
    margin: 30px 0;
  }
  .message>div{
    width: 90%;
    margin: auto;
  }
  .message>div>div{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eeeeee;
  }
  .entry{
    float: right;
    height: 90%;
    text-align: right;
    font-size: 16px;
    outline-style: none;
  }
  #data{
    float: right;
    font-size: 16px;
    display: inline-block;
    height: 20px;
  }
  #data>span{
    background-color: red;
    padding: 1px 5px;
    color: white;
    font-weight: 600px;
    border-radius: 10px;
  }
  .text{
    width: 100%;
  }
  .text>div{
    margin: 0 60px;
  }
  .order{
    height: 50px;
    margin-top: 50px;
    line-height: 50px;
  }
  .order>span:nth-child(2){
    float: right;
    margin-right: 10px;
  }
  .btn{
    margin-top: 100px;
    width: 100%;
  }
  .btn>button{
    width: 100%;
  }
  .sure{
    height: 40px;
    display: flex;
    margin-bottom: 50px;
  }
  .sure>span{
    flex: 1;
    text-align: center;
  }
  .sure>span:nth-child(1){
    text-align: left;
    margin: 10px;
  }
  .sure>span:nth-child(2){
    text-align: right;
    margin: 10px;
  }
</style>
