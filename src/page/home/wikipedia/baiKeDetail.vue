<template>
  <div>
    <h3>{{arr.title}}</h3>
    <div>
      <span>{{arr.add_time}}/{{arr.author}}</span>
    </div>
    <div id="aa"></div>
    <p><span>浏览次数</span>{{arr.watchs}}</p>
  </div>
</template>

<script>
  import {EncyDetail} from '../../../api/config'
  export default{
    data () {
      return {
        id: 125,
        arr: {},
        value: ''
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        var self = this
        this.id = this.$route.params.id
        EncyDetail({id: this.id}).then(function (res) {
          self.arr = res.data.datas
          self.value = res.data.datas.content
          document.getElementById('aa').innerHTML = self.value
        })
      }
    }
  }
</script>

<style>

</style>
