<template>
  <div>
    <h2>我是{{user}}的用户界面</h2>
    <h2>{{$route.params.userId}}</h2>
  </div>
</template>

<script>
export default {
  name:"User",
  computed:{
    user(){
      //this.$route哪个路由在活跃状态拿的就是哪个路由的值
      return this.$route.params.userId
    }
  }
}
</script>

<style>

</style>