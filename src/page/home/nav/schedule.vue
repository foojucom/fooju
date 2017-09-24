<template>
  <div>
    <div class="numOne">
      <img src="../img/return2.png" alt="">
      <span>看房日程</span>
    </div>
    <div>
      <span></span>
      <p>看{{}}套房子</p>
      <p>{{}}</p>
      <span>看房要求：{{}}</span>
    </div>
    <div>
      <div>
        <span>安排日程成功</span>
        <span>{{}}</span>
      </div>
      <div>
        <span>看房时间：{{}}</span>
      </div>
    </div>
    <div>
      <div>
        <span>带看经纪人</span>
        <span>{{}}</span>
      </div>
      <div>
        <div>
          <span>{{}}</span>
          <p>门店：{{}}</p>
          <span>评分：{{}}人评论</span>
        </div>
        <div>
          <img src="" alt="">
        </div>
      </div>
      <p>经纪人会通过电话与您沟通预约看房详情，请保持手机通车昂</p>
    </div>
    <div>
      <span>提交预约已成功！</span>
      <p></p>
    </div>
  </div>
</template>

<script>
  import {RecordDK} from '../../../api/config'
  export default{
    data () {
      return {
        rNumber: '',
        yuyueTime: '',
        content: '',
        a_id: '',
        mobile: '',
        username: '',
        userid: ''
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        RecordDK({r_number: this.rNumber, yuyue_time: this.yuyueTime, content: this.content, a_id: this.a_id, mobile: this.mobile, username: this.username, userid: this.userid}).then(function (res) {
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .numOne{
    height: 40px;
    line-height: 40px;
    border: 1px solid red;
    text-align: center;
    img{
      float: left;
      margin: 10px;
      width: 20px;
      height: 20px;
    }
  }
</style>
