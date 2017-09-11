<template>
  <div class="boss">
    <div>
      <span>
        <a href="" >
          <i class="return"></i>
        </a>
      </span>
      <span>
        <a href="">
          <i></i>
          <input type="text" placeholder="请输入关键字">
        </a>
      </span>
      <span>
        <a href="">

        </a>
      </span>
    </div>
  </div>
</template>

<script>
  export default{}
</script>

<style scoped>
  .boss{
    background-color: #eee;
    height: 50px;
  }
  .boss>div{
    width: 95%;
    /*background-color: #999;*/
    height: 50px;
    margin: auto;
  }
  .return{
    width: 12;
    height: 48px;
    background-color: #666;
    display: inline-block;
    /*background-image: url(../img/return.png);*/
    /*background-size: 12px 48px;*/
  }
</style>
