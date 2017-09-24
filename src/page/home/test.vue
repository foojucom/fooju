<template>
  <div class="scroll-wrap">
    <ul class="scroll-content" :style="{ top }">
      <li v-for="item in prizeList">{{item.name}}</li >
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        prizeList: [
          { name: '青城率先取消二手房贷款高额代办费' },
          { name: '第5届呼市十一惠民车展与您相约' },
          { name: '青城率先取消二手房贷款高额代办费' },
          { name: '第5届呼市十一惠民车展与您相约' },
          { name: '青城率先取消二手房贷款高额代办费' },
          { name: '第5届呼市十一惠民车展与您相约' }
        ],
        activeIndex: 0
      }
    },
    computed: {
      top () {
        return -this.activeIndex * 25 + 'px'
      }
    },
    mounted () {
      setInterval(_ => {
        if (this.activeIndex < this.prizeList.length) {
          if (this.activeIndex > 3) {
            this.activeIndex = 0
          }
          this.activeIndex += 1
        } else {
          this.activeIndex = 0
        }
      }, 1000)
    }
  }
</script>

<style>
  .scroll-wrap{
    width: 400px;
    height: 50px;
    border: 1px solid blue;
    overflow: hidden;
  }

  .scroll-content{
    position: relative;
    transition: top 0.5s;

  li{
    line-height: 50px;
    text-align: center;
  }
  }
</style>
