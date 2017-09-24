<template>
  <div class="bai">
    <div >
      <div class="fu">
        <span >福居百科</span>
        <a href="">更多</a>
      </div>
      <div class="min">
        <ul class="fang">
          <li><router-link to="/bakeOld"><span>二手房</span></router-link></li>
          <li><router-link to=""><span>新房</span></router-link></li>
          <li><router-link to=""><span style="margin-left: 5px">购房宝典</span></router-link></li>
          <li><router-link to=""><span>租房</span></router-link></li>
          <li><router-link to=""><span>换房</span></router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default{}
</script>

<style scoped>
  .bai{
    height:137px;
    width: 100%;
    background-color: #eee;
  }
  .bai>div{
    height:125px;
    width: 100%;
    background-color: white;
    border: 1px solid #eee;
  }
  .fang{
    float: left;
  }
  .fang>li{
    display: inline-block;
    margin: 0 0.3rem;
    list-style: none;
    width: 4.2rem;
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
  .fu{
    height:30px;
  }
  .fu span{
    float: left;
    font-size: 18px;
    margin: 10px;
  }
  .fu a{
    float: right;
    font-size: 14px;
    color: #999;
    margin: 12px 15px 10px 0;
  }
</style>
