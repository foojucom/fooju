<template>
  <div>
    <div class="logoHeader">
      <div>
        <img src="../img/return2.png" alt="">
      </div>
      <span>登录</span>
      <span>注册</span>
    </div>
    <div class="entry">
      <input type="text" placeholder="请输入手机号" v-model="mobile">
      <input type="password" name="" placeholder="请输入密码" v-model="password">
    </div>
    <div class="forget">忘记密码？</div>
    <div class="btn">
      <button @click="login">登录</button>
    </div>
    <div></div>
  </div>
</template>

<script>
  import md5 from 'js-md5'
  import {login} from '../../../api/config'
  export default{
    data () {
      return {
        mobile: '',
        password: '',
        code: '',
        arr: []
      }
    },
    created () {
    },
    methods: {
      login () {
        var pwd = md5(md5(this.password))
        var Pwd = pwd + 'fujuwang'
        var self = this
        login({mobile: this.mobile, password: Pwd}).then(function (res) {
//          console.log(res.data.code)
          self.code = res.data.code
          if (self.code === 200) {
//            console.log(123456)
            self.arr.push(self.mobile)
            self.arr.push(self.password)
            var key = self.arr.toString()
            sessionStorage.setItem('user', key)
//            console.log(55555555)
            self.$router.push(self.$route.query.redirect)
//            console.log(666666666)
          } else {
            alert('你输入的密码不正确，请重新输入！')
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
  /*@import "./logo.less";*/
  .logoHeader{
    height: 40px;
    width: 100%;
    /*border: 1px solid #999;*/
    display: flex;
    align-items: center;
    div{
      display: inline-block;
      flex: 1;
      img{
        width: 20px;
        height: 20px;
      }
    }
  }
  .logoHeader>span:nth-child(1){
    flex: 1;
  }
  .logoHeader>span:nth-child(2){
    flex: 1;
  }
  .entry{
    width: 100%;
    height: auto;

  }
  .entry>input{
    width: 100%;
    height: 50px;
    /*border-bottom: 1px solid #999;*/
  }
  .btn{
    width: 100%;
    height: 40px;
    text-align: center;
  }
  .forget{
    float: right;
    font-size: 14px;
    height: 20px;
    color: red;
    margin: 10px;
  }
  .btn>button{
    width: 95%;
    height: 100%;
    background-color: red;
    border-radius: 5px;
  }
</style>
