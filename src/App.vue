<template>
  <div id="app">
    <div class="router-box">
      <router-link class="router-li" :to="{name:'indexlist'}">首页</router-link>
      <router-link class="router-li" :to="{name:'newslist'}">新闻列表</router-link>
      <router-link class="router-li" :to="{name:'newsdetail', params: {id:12} }">新闻详情</router-link>
      <router-link class="router-li" :to="{name:'serverstips'}">服务</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
