<template>
  <div class="min">
    <div v-for="item in aa">
      <div class="pic"></div>
      <div class="you">
        <span class="tle">{{item.title}}</span>
        <p id="shi">{{item.bedroom}}室{{item.livingroom}}卫{{item.wc}}卫／{{item.built_area}}m2/{{item.direction}}</p>
        <!--<p class="pro"><span>{{item.property_right}}</span></p>-->
        <!--<span class="wan">{{item.total_price}}万</span>-->
        <span class="wan">{{item.unit_price}}元／月</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {ProductWap} from '../../../api/config'
  export default{
    data () {
      return {
        arr: {},
        aa: [],
        page: 1,
        rows: 10,
        id: 12813
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        var self = this
        ProductWap({}).then(function (res) {
//          console.log(222)
//          console.log(res.data)
          self.aa = res.data.retal
        })
      }

    }
  }
</script>

<style scoped>
  .pic{
    width: 133px;
    height: 100px;
    background-color:red;
    /*margin:10px 12px;*/
    float: left;
    display: inline-block;
  }
  .you{
    display: flex;
    float: left;
    border-bottom: 0px;
  }
  .min{

  }
  .min>div{
    height:110px;
    width: 100%;
    margin-top: 6px;
    border-bottom: 1px solid #999;
  }
  .min>div>div{
    display: inline-block;
    float: left;
  }
  .min>div>div:nth-child(2){
    width: 225px;
    /*margin-top: 8px;*/
  }
  #shi{
    color: #999;
    margin: 5px;
    font-size: 12px;
  }
  .wan{
    color: red;
    font-weight: 600
  }
  .tle{
    font-size: 15px;
  }
</style>

