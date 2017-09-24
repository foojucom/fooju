<template>
  <div id="sss">
    <div id="max">
      <div id="nav">
        <div v-on:click="select('区域')">
          <span>区域</span>
          <img src="../img/aa.png" alt="">
        </div>
        <div v-on:click="select('价格')">
          <span>价格</span>
          <img src="../img/aa.png" alt="">
        </div>
        <div v-on:click="select('房型')">
          <span>房型</span>
          <img src="../img/aa.png" alt="">
        </div>
        <div v-on:click="select('更多')">
          <span>更多</span>
          <img src="../img/aa.png" alt="">
        </div>
      </div>
      <div id="detail">
        <div v-show="content === '区域'" v-for="item in area">
          <p @click="region(item)">{{item}}</p>
        </div>
        <div v-show="content === '价格'" v-for="item in price">
          <p @click="rate(item.value)">{{item.label}}</p>
        </div>
        <div v-show="content === '房型'">
          <mt-checklist
            align="right"
            v-model="value"
            :options="room">
          </mt-checklist>
          <button style="width: 100%;height: 40px;background-color:#6940ee;font-size: 18px;color: #ffffff;border: 0px" @click="sure">确认</button>
        </div>
        <div v-show="content === '更多'">
          <div class="option">
            <div>
              <p>朝向</p>
              <span v-for="item in direction" @click="directionaa(item)">{{item}}</span>
            </div>
            <div>
              <p>建筑面积</p>
              <span v-for="item in square" @click="squarea(item)">{{item}}</span>
            </div>
            <div>
              <p>标签</p>
              <span v-for="item in tab" @click="taba(item)">{{item}}</span>
            </div>
            <div>
              <p>房龄</p>
              <span v-for="item in building" @click="buildinga(item)">{{item}}</span>
            </div>
            <div>
              <p>楼层</p>
              <span v-for="item in floor" @click="floora(item)">{{item}}</span>
            </div>
            <div>
              <p>装修情况</p>
              <span v-for="item in decorate" @click="decoratea(item)">{{item}}</span>
            </div>
            <div>
              <p>是否配备电梯</p>
              <span v-for="item in lift" @click="lifta(item)">{{item}}</span>
            </div>
            <div>
              <p>类型</p>
              <span v-for="item in type" @click="typeaa(item)">{{item}}</span>
            </div>
          </div>
          <div id="fixed">
            <button @click="cleara">清空条件</button>
            <button @click="ensurea">确定</button>
          </div>
        </div>
      </div>
    </div>
    <souSuo></souSuo>
    <lunBo></lunBo>
    <div class="lie" id="container">
      <ul class="daoHang" id="daoHang">
        <li @click="opt('区域')">
          <span>区域</span>
          <i></i>
        </li>
        <li @click="opt('价格')">
          <span>价格</span>
          <i></i>
        </li>
        <li @click="opt('房型')">
          <span>房型</span>
          <i></i>
        </li>
        <li @click="opt('更多')">
          <span>更多</span>
          <i></i>
        </li>
      </ul>
      <ul v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10" id="min">
          <li v-for="item in list" @click="detail(item)">
            <div class="pic" >
              <img id="img" src="http://www.fooju.cn//fjw/uploads/moren/moren_house_01.png" alt="">
            </div>
            <div class="youu" v-lazy.container="item">
              <span class="tle">{{item.title}}</span>
              <p id="shi">{{item.bedroom}}室{{item.livingroom}}卫{{item.wc}}卫／{{item.built_area}}m2/{{item.direction}}</p>
              <span class="wan">{{item.unit_price}}元／月</span>
              <span  id="id">{{item.id}}</span>
            </div>
          </li>
      </ul>
    </div>
    <mt-button id="pai" @click.native="handleClick">
      <i id="xu"></i>
      <span>排序</span>
    </mt-button>
    <mt-popup v-model="popupVisible" position="bottom" model="false" id="ggg">
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
  import souSuo from './sousuo.vue'
  export default{
    data () {
      return {
        loading: false,
        list: [],
        content: '',
        value: [],
        active: 'page-tab-container1',
        num: 1,
        r_id: '',
        direction: ['东', '西', '南', '北'],
        square: ['50以下', '50-70', '70-90', '90-110', '110-130', '130-150', '150-200', '200以上'],
        tab: ['KTV', '爆米花'],
        building: ['5年以内', '10以内', '15年以内', '20年以内', '20年以上'],
        floor: ['底层', '低楼层', '中楼层', '高楼房', '顶层'],
        decorate: ['毛坯', '简易装修', '精装修', '豪华装修'],
        lift: ['有电梯', '无电梯'],
        type: ['平层', '复式', '跃层'],
        val: '默认排序',
        popupVisible: false,
        area: ['不限', '金桥开发区', '如意开发区', '玉泉区', '回民区', '赛罕区', '新城区'],
        price: [
            {label: '不限', value: ''},
          {label: '50万以下', value: '0-50'},
          {label: '50万-100万', value: '50-100'},
          {label: '100万-200万', value: '100-200'},
          {label: '200万-300万', value: '200-300'},
          {label: '300万-400万', value: '300-400'},
          {label: '400万-500万', value: '400-500'},
          {label: '500万-600万', value: '500-600'},
          {label: '600万-700万', value: '600-700'},
          {label: '700万-800万', value: '700-800'},
          {label: '800万-900万', value: '800-900'},
          {label: '900万-1000万', value: '900-1000'},
          {label: '1000万以上', value: '1000-9999999999'}],
        room: [{label: '不限', value: ''}, {label: '一室', value: '1'}, {label: '二室', value: '2'}, {label: '三室', value: '3'}, {label: '四室', value: '4'}, {label: '五室', value: '5'}, {label: '五室以上', value: ''}],
        size: 5,
        village: '',
        total_price: '',
        order: 0,
        directiona: [],
        built_area: [],
        builtArea: '',
        label: [],
        age: [],
        floor_type: [],
        decoration: [],
        dianti: [],
        typea: []
      }
    },
    components: {
      lunBo,
      souSuo
    },
    created () {
      this.getDate()
    },
    methods: {
      loadMore () {
        this.loading = true
        this.size += 5
        this.getDate()
        this.loading = false
      },
      getDate () {
        var self = this
        this.village = this.$route.query.village
//        for (var i = 0; i < this.built_area.length; i++) {
//          this.builtArea.append(this.built_area[i])
//        }
        this.builtArea = this.built_area.toString()
//        console.log(this.$route.query)
        usedLists({page_num: this.num, page_size: this.size, order: this.order, village: this.village, r_id: this.r_id, total_price: this.total_price, bedroom: this.value, built_area: this.builtArea}).then(function (res) {
//          console.log(res.data.data.length)
          self.list = res.data.data
        })
      },
      handleClick () {
        this.popupVisible = true
      },
      detail (item) {
        var ids = item.id
//        console.log(999)
//        sessionStorage.getItem('id', ids)
//        this.$router.push('/oldDetail/' + ids)
        this.$router.push({name: 'oldDetail', query: {id: ids}})
//        this.$router.push('/oldDetail')
      },
      change (val) {
        this.val = val
        if (val === '默认排序') {
          this.order = '0'
          this.popupVisible = false
        } else if (val === '最新发布') {
          this.order = '1'
          this.popupVisible = false
        } else if (val === '总价从低到高') {
          this.order = '2'
          this.popupVisible = false
        } else if (val === '总价从高到低') {
          this.order = '3'
          this.popupVisible = false
        } else if (val === '面积从低到高') {
          this.order = '4'
          this.popupVisible = false
        } else if (val === '面积从高到低') {
          this.order = '5'
          this.popupVisible = false
        }
        this.getDate()
      },
      opt (val) {
        document.getElementById('daoHang').style = 'visibility:hidden'
        document.getElementById('nav').style = 'display:block'
        document.getElementById('detail').style = 'display:block'
        this.content = val
      },
      select (val) {
        this.$store.commit('memory', val)
        this.content = val
      },
      region (item) {
        document.getElementById('daoHang').style = 'visibility:visible'
        document.getElementById('nav').style = 'display:none'
        document.getElementById('detail').style = 'display:none'
        if (item === this.area[0]) {
          this.r_id = ''
        } else if (item === this.area[1]) {
          this.r_id = 7
        } else if (item === this.area[2]) {
          this.r_id = 5
        } else if (item === this.area[3]) {
          this.r_id = 4
        } else if (item === this.area[4]) {
          this.r_id = 3
        } else if (item === this.area[5]) {
          this.r_id = 2
        } else if (item === this.area[6]) {
          this.r_id = 1
        }
        this.getDate()
      },
      rate (val) {
        this.total_price = val
        this.getDate()
        document.getElementById('daoHang').style = 'visibility:visible'
        document.getElementById('nav').style = 'display:none'
        document.getElementById('detail').style = 'display:none'
      },
      sure () {
        this.getDate()
        document.getElementById('daoHang').style = 'visibility:visible'
        document.getElementById('nav').style = 'display:none'
        document.getElementById('detail').style = 'display:none'
        this.value = []
      },
      directionaa (val) {
        this.directiona = val
      },
      squarea (val) {
        var aa = 1
        for (let i = 0; i < this.built_area.length; i++) {
          if (this.built_area[i] === val) {
            this.built_area.splice(i, 1)
            aa = 0
          } else {
            aa = 1
          }
        }
        if (aa === 0) {
//          this.built_area.splice(i, 1)
        } else if (aa === 1) {
          this.built_area.push(val)
        }
        aa = 1
        console.log(this.built_area)
      },
      taba (val) {
      },
      buildinga (val) {
        this.age = val
      },
      floora (val) {
        this.floor_type = val
      },
      decoratea (val) {
        this.decoration = val
      },
      lifta (val) {
        this.dianti = val
      },
      typeaa (val) {
        this.typea = val
      },
      cleara () {
        this.typea = []
        this.dianti = []
        this.directiona = []
        this.floor_type = []
        this.age = []
        this.label = []
        this.built_area = []
        this.decoration = []
      },
      ensurea () {
        document.getElementById('daoHang').style = 'visibility:hidden'
        document.getElementById('nav').style = 'display:block'
        document.getElementById('detail').style = 'display:block'
        this.getDate()
      }
    }
  }
</script>

<style scoped>
  @media screen and (max-width: 2048px)and (min-width: 1024px){
    #sss{ width: 768px}
  }
  @media screen and (max-width: 1024px)and (min-width: 768px){
    #sss{ width: 768px}
  }
  @media screen and (max-width: 768px) and (min-width: 480px){
    #sss{ width: 27rem; }
  }
  @media screen and (max-width: 480px) and (min-width: 320px){
    #sss{ width: 27rem; }
  }
  #sss{
    margin: auto;
  }
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
    width: 133px;
    height: 100px;
    /*background-color:red;*/
    float: left;
    display: inline-block;
  }
  #img{
    width: 130px;
    height: 100px;
  }
  #min{
    padding: 3px;
  }
  .youu{
    float: left;
    height: 100px;
    width: 230px;
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
  #nav{
    display: none;
    text-align: center;
  }
  #nav>div{
    flex: 1;
    position: relative;
    display: inline-block;
    margin: 0 25px;
  }
  #nav>div>span{
    font-size: 18px;
  }
  #nav>div>img{
    width: 20px;
    height: 20px;
    position: absolute;
    top: 4px;
    right: -20px;
  }
  .option{
    width: 100%;
    float: left;
    height: 300px;
    overflow: scroll;
    /*margin-left: 100px;*/
    border: 1px solid red;
  }
  .option>div{
    overflow: auto;
    margin-left: 10px;
  }
  .option span{
    width: 75px;
    height: 25px;
    line-height: 25px;
    border: 1px solid #416bee;
    float: left;
    text-align: center;
    margin: 5px;
  }
  #fixed>button{
    width: 100%;
    height: 40px;
    font-size: 18px;
    color: #ffffff;
    border: 0px
  }
  #fixed>button:nth-child(1){
    background-color: #fff;
    color: #999;
  }
  #fixed>button:nth-child(2){
    background-color: #6a5cff;
    color: white;
  }
  #max{
    position: fixed;
    top:0;
    width: 100%;
    z-index: 10;
    background-color: #fff;
  }
  #ggg{
    width: 100%;
    background-color: #fff;
  }
</style>

