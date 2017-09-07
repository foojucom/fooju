<template>
  <div class="bai">
    <div >
      <div class="fu">
        <span >福居百科</span>
        <a href="">更多</a>
      </div>
      <div class="min">
        <ul class="fang">
          <li><a href=""><span>二手房</span></a></li>
          <li><a href=""><span>新房</span></a></li>
          <li><a href=""><span>购房宝典</span></a></li>
          <li><a href=""><span>租房</span></a></li>
          <li><a href=""><span>换房</span></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default{}
</script>

<style>
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
