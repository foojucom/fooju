``<template>
  <div class="list">
    <div>
      <router-link to="/ershou"><img src="http://m.fooju.cn/static/img/P4/ios/10@2x.png" alt=""><div>二手房</div></router-link>
      <router-link to="/new"><img src="http://m.fooju.cn/static/img/P4/ios/10@2x.png" alt=""><div>新房</div></router-link>
      <router-link to="/zu"><img src="http://m.fooju.cn/static/img/P4/ios/12@2x.png" alt=""><div>租房</div></router-link>
      <router-link to="/map"><img src="http://m.fooju.cn/static/img/P4/ios/13@2x.png" alt=""><div>地图找房</div></router-link>
    </div>
    <div>
      <router-link to="/dian"><img src="http://m.fooju.cn/static/img/p15/ios/4@2x.png" alt=""><div>查门店</div></router-link>
      <router-link to="/qu"><img src="http://m.fooju.cn/static/img/P4/ios/15@2x.png" alt=""><div>找小区</div></router-link>
      <router-link to="/xue"><img src="http://m.fooju.cn/static/img/P4/ios/16@2x.png" alt=""><div>学区房</div></router-link>
      <router-link to="/tuo"><img src="http://m.fooju.cn/static/img/P4/ios/17@2x.png" alt=""><div>在线委托</div></router-link>
    </div>
  </div>
</template>

<script>
    export default{
      methods: {
      }
    }
</script>

<style>
  .list{
    width: 100%;

  }
  .list>div{
    display: flex;
    margin: 20px 0;
  }
  .list>div>a{
    flex:1;
    font-size: 14px;
    color: black;
    text-align: center;
    text-decoration:none;
  }
  .list>div>a>img{
    width: 2.7rem;
    height: 2rem;
  }
</style>
