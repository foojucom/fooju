<template>
  <div>
    <div>
      <span>呼和浩特</span>
      <i class="as"></i>
    </div>
    <div>
      <a href="">
        <i class="logo"></i>
        <input type="text" placeholder="输入小区搜索">
      </a>
    </div>
  </div>
</template>

<script scoped>
  import {RegionLists} from '../../api/config'
  export default{
    data () {
      return {
        arr: []
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        var self = this
        RegionLists({}).then(function (res) {
          self.arr = res.data.data
          console.log(res.data)
          console.log(111)
          console.log(res.data.data)
        })
      }
    }
  }
</script>

<style>
  .as{
    background-image: url(./img/aa.png);
    background-size:7px 13px;
  }
  .logo{
    width: 27px;
    height: 33px;
    background-image: url(./img/logo.png);
    background-size:25px 30px;
  }
  input{
    height: 33px;
    width: ;
  }
</style>
