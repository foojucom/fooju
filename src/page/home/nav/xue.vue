<template>
  <div>
    <div class="header">
      <img src="../img/return2.png" alt="" @click="$router.go(-1)">
      <div>
        <span v-for="item in fang" @click="changeHouse(item.type)" :class="{active:type==item.type}">{{item.value}}</span>
      </div>
    </div>
    <div class="nav">
      <div>
        <span v-for="item in option" @click="opt(item)">{{item}}</span>
      </div>
      <div class="dropDown">
        <p v-show="aa" v-for="item in area" id="pone" @click="areaXue(item.id)">{{item.value}}</p>
        <p v-show="bb" v-for="item in rentMoney" @click="money(item.rent)">{{item.value}}</p>
        <p v-show="cc" v-for="item in roomType" @click="apartment(item.bedroom)">{{item.value}}</p>
        <p v-show="dd" v-for="item in school">{{item.value}}</p>
      </div>
    </div>
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
      class="loop">
      <li v-for="item in value" style="list-style: none">
        <img id="img" src="http://www.fooju.cn//fjw/uploads/moren/moren_house_01.png" alt="">
        <div>
          <span>{{item.title}}</span>
          <p>{{item.bedroom}}室{{item.livingroom}}卫{{item.wc}}卫/{{item.built_area}}m2/{{item.direction}}</p>
          <span>{{item.total_price}}</span>
          <span>{{item.unit_price}}</span>
        </div>
      </li>
      <div style="margin: auto;width: 120px">
        <mt-spinner :size="20" type="fading-circle" style="display: inline-block"></mt-spinner>
        <span style="font-size: 12px">正在加载房源...</span>
      </div>
    </ul>
  </div>
</template>

<script>
  import {VillageSchool, fang, area, rentMoney, roomType, school} from '../../../api/config'
  export default{
    data () {
      return {
        size: 10,
        num: 1,
        loading: false,
        aa: false,
        bb: false,
        cc: false,
        dd: false,
        type: '',
        price: 0,
        room: '',
        id: 0,
        value: [],
        fang: [],
        area: [],
        option: ['区域', '价格', '房型', '学校'],
        rentMoney: [],
        roomType: [],
        school: []
      }
    },
    created () {
      this.getData()
      this.fang = fang
      this.area = area
      this.rentMoney = rentMoney
      this.roomType = roomType
      this.school = school
    },
    methods: {
      getData () {
        var self = this
        VillageSchool({page_size: this.size, page_num: this.num, h_type: this.type, r_id: this.id, total_price: this.price}).then(function (res) {
          self.value = res.data.data
          console.log(111111)
          console.log(res)
        })
      },
      loadMore () {
        this.loading = true
        this.size += 10
        this.getData()
        this.loading = false
      },
      opt (value) {
        if (value === '区域') {
          this.bb = false
          this.cc = false
          this.dd = false
          this.aa = !this.aa
        } else if (value === '价格') {
          this.aa = false
          this.cc = false
          this.dd = false
          this.bb = !this.bb
        } else if (value === '房型') {
          this.aa = false
          this.bb = false
          this.dd = false
          this.cc = !this.cc
        } else if (value === '学校') {
          this.aa = false
          this.bb = false
          this.cc = false
          this.dd = !this.dd
        }
      },
      changeHouse (value) {
        this.type = value
        this.getData()
      },
      areaXue (val) {
        this.id = val
        this.getData()
        this.aa = false
      },
      money (val) {
        this.price = val
        this.getData()
        this.bb = false
      },
      apartment (val) {
        this.room = val
        this.getData()
        this.cc = false
      }
    }
  }
</script>

<style scoped lang="less">
  /*<link rel="stylesheet/less" type="text/css" href="xue.less"/>*/
  @import "./xue.less";
</style>
