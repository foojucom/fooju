<template>
  <div id="first">
    <p>我是第一个{{msg}}</p>
    <mt-button @click.native="handleClick">按钮</mt-button>
    <mt-popup v-model="popupVisible" position="bottom">
      <div v-for="it in slot">
        <!--<span v-text="it.flex"></span>-->
        <span style="padding: 20px;line-height: 50px">{{it}}</span>
      </div>
    </mt-popup>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: '组件',
        popupVisible: false,
        slot: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06']
//        slots: [
//          {
//            flex: 1,
//            values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
//            className: 'slot1',
//            textAlign: 'right'
//          }, {
//            divider: true,
//            content: '-',
//            className: 'slot2'
//          }, {
//            flex: 1,
//            values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
//            className: 'slot3',
//            textAlign: 'left'
//          }
//        ]
      }
    },
    methods: {
      handleClick: function () {
        this.popupVisible = true
      }
    }
  }
</script>

<style>

</style>
