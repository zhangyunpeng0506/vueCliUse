<template>
  <div>
    <h2>首页</h2>
    <router-link to="/home/news" replace>新闻</router-link>
    <router-link to="/home/message" replace>消息</router-link>
    <router-view/>
  </div>
</template>

<script>


export default {
  name: "Home",
  data(){
    return {
      path:'/home/news'
    }
  },
  created(){
    
  },
  beforeDestroy(){
    console.log('beforeDestory');
  },
  destroyed(){
    console.log('destroyed');
  },
  activated(){  //这对函数只有被保持了状态（使用keep-aline）时，才是有效的
    //当页面处于活跃状态调用
    // this.$router.push(this.path)
  },
  deactivated(){
    //当页面处于不活跃状态调用
  },
  beforeRouteLeave(to,from,next){ //组件内钩子
    this.path=this.$route.path;
    next();
  }
}
</script>

<style>

</style>