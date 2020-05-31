<template>
  <div id="app">
    <!--vue-router中内置组件-->
    <!-- <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
    <router-link :to="'/user/'+userId" tag="button" replace>用户</router-link>
    <router-link 
      :to="{path:'/profile',
            query:{name:'zyp',height:'177'}}"
      tag="button">档案</router-link>
    <br/> -->
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->
    <!--渲染的位置-->
    <!-- keep-alive 
    include:
    exclude:不包含的页面
    -->
    <tab-bar>
      <tab-bar-item path="/home">首页</tab-bar-item>
      <!-- <tab-bar-item path="/economics">财经</tab-bar-item>
      <tab-bar-item path="/sports">体育</tab-bar-item> -->
      <tab-bar-item :path="{path:'/about',query:{name:'zyp'}}">关于</tab-bar-item>
      <tab-bar-item path="/user">我的</tab-bar-item>
      <tab-bar-item path="/profile">档案</tab-bar-item>
    </tab-bar>
    <!-- <keep-alive exclude="Profile,User"> -->
      <router-view/>
    <!-- </keep-alive> -->
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

import TabBar from '@/components/tabbar/TabBar'
import TabBarItem from '@/components/tabbar/TabBarItem'

export default {
  name: 'App',
  data(){
    return {
      userId:'zhangsan'
    }
  },
  components:{
    TabBar,
    TabBarItem
  },
  methods:{
    homeClick(){
      //this.$router是整个大的路由对象
      this.$router.push('/home')
      // this.$router.replace('/home')
    },
    aboutClick(){
      // this.$router.push('/about')
      // this.$router.replace('/about')
      this.$router.push({
        path: '/about',
        query: {
          name:'zyp'
        }
      })
    }
  },
  beforeCreate(){
    console.log('beforeCreate');
  },
  created(){
    console.log('created');
  },
  beforeMount(){
    console.log('beforeMount');
  },
  mounted(){
    console.log('mounted');
  },
  beforeUpdate(){
    console.log('beforeUpdate');
  },
  updated(){
    console.log('update');
  },
  beforeDestroy(){
    console.log('beforeDestory');
  },
  destroyed(){
    console.log('destroyed');
  }
}
</script>

<style lang="less" scoped>
  //scoped是H5的新属性，如果使用该属性，则样式仅仅应用到style元素的父元素及其子元素
  
  @import'./assets/css/base.less';  //@import后不能有空格

  .router-link-active{
    color: red;
    background-color: blue;
  }
  .active{
    color:chartreuse;
    background-color: darkgray;
  }
</style>
