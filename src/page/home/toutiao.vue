<template>
  <div class="tou">
    <div>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkIxQUFCRjdDNjZDODExRTdCOURGQ0I0MzlDNENGOUZBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkIxQUFCRjdENjZDODExRTdCOURGQ0I0MzlDNENGOUZBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjFBQUJGN0E2NkM4MTFFN0I5REZDQjQzOUM0Q0Y5RkEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjFBQUJGN0I2NkM4MTFFN0I5REZDQjQzOUM0Q0Y5RkEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Tdv7jAAAGX0lEQVR42uxa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" alt="">
      <div>
        <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import {EncyTop} from '../../api/config'
  export default{
    data () {
      return {
        arr: [],
        value: '',
        slots: [
          {
//            flex: 1,
            values: ['二手房', '车展'],
            className: 'slot1',
            textAlign: 'left'
          },
          {
            flex: 1,
            values: ['青城率先取消二手房贷款高额代办费', '第5届呼市十一惠民车展与您相约'],
            className: 'slot2',
            textAlign: 'left'
          }
        ]
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        var self = this
        EncyTop({}).then(function (res) {
          console.log(res.data.datas)
          self.arr = res.data.datas[0]
        })
      },
      onValuesChange (picker, values) {
        this.value = values[0]
        console.log(values.title)
      }
    }
  }
</script>

<style scoped>
  .tou{
    width: 100%;
    height: 85px;
    background-color: #eee;
    border: 1px solid #eee;
  }
  .tou>div{
    width: 100%;
    height:65px;
    background-color:white;
    margin-top: 10px;
  }
  .tou>div>img{
    width:36px;
    height: 36px;
    float: left;
    margin-top: 15px;
    margin-left: 15px;
    padding-right: 15px;
    border-right:1px solid #eee;
  }
  .bq{
    font-size: 12px;
    color: #ff2b3c;
    border: 1px solid #eee;
    background-color: #eee;
    border-radius:5px;
  }
  .wen{
    font-size: 14px;
    overflow: hidden;
  }
</style>
