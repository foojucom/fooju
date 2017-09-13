<template>
  <div id="max">
    <div class="tou"></div>
    <lunBo style="margin-top: 40px"></lunBo>
    <div class="lie">
      <ul class="daoHang">
        <li>
          <span>区域</span>
          <i></i>
        </li>
        <li>
          <span>价格</span>
          <i></i>
        </li>
        <li>
          <span>房型</span>
          <i></i>
        </li>
        <li>
          <span>更多</span>
          <i></i>
        </li>
      </ul>
      <ul v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10" id="min">
        <router-link to="/oldDetail?this.id">
          <li v-for="item in list" @click="detail">
            <div class="pic"></div>
            <div class="youu">
              <span class="tle">{{item.title}}</span>
              <p id="shi">{{item.bedroom}}室{{item.livingroom}}卫{{item.wc}}卫／{{item.built_area}}m2/{{item.direction}}</p>
              <span class="wan">{{item.unit_price}}元／月</span>
              <span  id="id">{{item.id}}</span>
            </div>
          </li>
        </router-link>
      </ul>
    </div>
    <mt-button id="pai" @click.native="handleClick">
      <i id="xu"></i>
      <span>排序</span>
    </mt-button>
    <mt-popup v-model="popupVisible" position="bottom" model="false">
      <p id="item" v-on:click="change('默认排序')">默认排序</p>
      <p id="item" v-on:click="change('最新发布')">最新发布</p>
      <p id="item" v-on:click="change('总价从低到高')">总价从低到高</p>
      <p id="item" v-on:click="change('总价从高到低')">总价从高到低</p>
      <p id="item" v-on:click="change('面积从低到高')">面积从低到高</p>
      <p id="item" v-on:click="change('面积从高到低')">面积从高到低</p>
    </mt-popup>
  </div>
</template>

<script>
  import {usedLists} from '../../../api/config'
  import lunBo from '../lunbo.vue'
  export default{
    props: {
      id: {
        type: Number
      }
    },
    data () {
      return {
        loading: false,
        list: [],
        num: 1,
        val: '默认排序',
        popupVisible: false,
        size: 45,
        order: 0
//        slots: ['默认排序', '最新发布', '总价从低到高', '总价从高到低', '面积从低到高', '面积从高到低']
      }
    },
    components: {
      lunBo
    },
    created () {
      this.getDate()
    },
    methods: {
      loadMore () {
        this.loading = true
        setTimeout(() => {
          let last = this.list[this.list.length - 1]
          for (let i = 1; i <= 10; i++) {
            this.list.push(last + i)
          }
          this.loading = false
        }, 2500)
      },
      getDate () {
        var self = this
        usedLists({page_num: this.num, page_size: this.size, order: this.order}).then(function (res) {
//          console.log(res.data.data)
          self.list = res.data.data
        })
      },
      handleClick () {
        this.popupVisible = true
      },
      detail () {
        this.id = document.querySelector('#id').innerHTML
      },
      change (val) {
        this.val = val
        if (val === '默认排序') {
          this.order = '0'
          this.popupVisible = false
//          this.getData()
          console.log(this.order)
        } else if (val === '最新发布') {
          this.order = '1'
          this.popupVisible = false
//          this.getData()
          console.log(this.order)
        } else if (val === '总价从低到高') {
          this.order = '2'
          this.popupVisible = false
//          this.getData()
          console.log(this.order)
        } else if (val === '总价从高到低') {
          this.order = '3'
          this.popupVisible = false
//          this.getData()
          console.log(this.order)
        } else if (val === '面积从低到高') {
          this.order = '4'
          this.popupVisible = false
//          this.getData()
          console.log(this.order)
        } else if (val === '面积从高到低') {
          this.order = '5'
          this.popupVisible = false
//          this.getData()
          console.log(this.order)
        }
      }
    }
  }
</script>

<style scoped>
  .lie ul{
    list-style: none;
  }
  .daoHang{
    display: flex;
    padding: 0;
  }
  .daoHang>li{
    flex: 1;
    text-align: center;
    position: relative;
  }
  .daoHang i{
    position: absolute;
    top: 4px;
    right: 12px;
    display: block;
    width: 20px;
    height: 16px;
    background-image: url(../img/aa.png);
    background-size: 20px 16px;
  }

  .pic{
    width: 30%;
    height: 100px;
    background-color:red;
    float: left;
    display: inline-block;
  }
  #min{
    padding: 3px;
  }
  .youu{
    float: left;
    height: 100px;
    width: 69%;
    margin-top: 5px;
    margin-left: 10px;
  }
  #min>li{
    height:108px;
    width: 100%;
    margin-top: 6px;
    border-bottom: 1px solid #999;
  }
  #shi{
    color: #999;
    margin: 3px;
    font-size: 12px;
  }
  .wan{
    color: red;
    font-weight: 600
  }
  .tle{
    font-size: 15px;
  }
  #pai{
    position: fixed;
    top:60%;
    right: 20px;
    width: 90px;
    height: 30px;
    background-color: #666;
    border-radius: 20px;
  }
  #pai #xu{
    width: 16px;
    height: 30px;
    display: block;
    margin-left: 8px;
    background-image: url(../img/xu.png);
    background-size: 20px 30px;
    background-position: -4px 0px;
  }
  #pai span{
    color: white;
    float: right;
    margin: -28px 5px;
    font-size: 18px;
  }
  #item{
    /*line-height: 65px;*/
    font-size: 20px;
    /*padding: 0px 200px;*/
    text-align: center;
  }
</style>
