<template>
  <div id="app">
    <h1>我是APP</h1>
    <!--vue-router中内置组件-->
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
    <router-link :to="'/user/'+userId" tag="button" replace>用户</router-link>
    <br/>
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->
    <!--渲染的位置-->
    <router-view></router-view>
  </div>
</template>

<script>

/*路由基本的使用步骤
  1.创建路由组件
  2.配置路由映射关系（组件和路径）
  3.使用路由<router-link>和<router-view>

  <router-link>其他属性：
  tag //指定渲染出来的标签
  replace //禁用浏览器的前进返回按钮 （原理：history模式_:默认使用的是history.pushState(),replace属性使用replaceState();hash模式_:）
 */

/*路由懒加载
  
*/

export default {
  name: 'App',
  data(){
    return {
      userId:'zhangsan'
    }
  },
  methods:{
    homeClick(){
      //this.$router是整个大的路由对象
      this.$router.push('/home')
      // this.$router.replace('/home')
    },
    aboutClick(){
      // this.$router.push('/about')
      this.$router.replace('/about')
    }
  }
}
</script>

<style scoped>
.router-link-active{
  color: red;
  background-color: blue;
}
.active{
  color:chartreuse;
  background-color: darkgray;
}

</style>
