<template>
  <div>
    <router-view></router-view>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="tab1">
        <img slot="icon" src="../../assets/logo.png">
        <router-link to="/main/home">首页</router-link>
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <img slot="icon" src="../../assets/logo.png">
        <router-link to="/main/tools">工具</router-link>
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <img slot="icon" src="../../assets/logo.png">
        <router-link to="/main/house">看房</router-link>
      </mt-tab-item>
      <mt-tab-item id="tab4">
        <img slot="icon" src="../../assets/logo.png">
        <router-link to="/main/my">我</router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        selected: 'tab1'
      }
    }
  }
</script>
<style>

</style>
