<template>
  <div>
    <h2>首页</h2>
    <router-link to="/home/news" replace>新闻</router-link>
    <router-link to="/home/message" replace>消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: "Home",
}
</script>

<style>

</style>