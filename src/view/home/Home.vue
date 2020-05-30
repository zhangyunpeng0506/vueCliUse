<template>
  <div>
    <h2>首页</h2>
    <div>
      <div>我是vuex内的counter值：{{$store.state.counter}}</div>
      <div>{{$store.getters.powerCounter}}</div>
      <div>{{$store.getters.powerCounter2}}</div>
      <div>{{$store.getters.moreAgeStu(20)}}</div>
      <div>{{$store.state.info}}</div>
      <div>{{$store.state.moduleA.name}}</div>
      <div>{{$store.state.moduleB.name}}</div>
      <div>{{$store.getters.fullName}}</div>  <!--定义在模块内的getters，但是用法和getters一样-->
      <div>{{$store.getters.fullName2}}</div>
      <div>{{$store.getters.fullName3}}</div>
      <button @click="updateName">修改模块里面的名字</button>
      <button @click="updateName2">修改模块里面的名字2</button>
      <button @click="add">+</button>
      <button @click="sub">-</button>
      <button @click="addCount(5)">+5</button>
      <button @click="addStu">添加学生</button>
      <button @click="addStu2">添加学生2</button>
      <button @click="updateInfo">更新个人信息</button>
    </div>
    <router-link to="/home/news" replace>新闻</router-link>
    <router-link to="/home/message" replace>消息</router-link>
    <router-view/>
  </div>
</template>

<script>

import * as types from '@/store/mutations.types'

export default {
  name: "Home",
  data(){
    return {
      path:'/home/news'
    }
  },
  methods:{
    add(){
      this.$store.commit(types.INCREMENT)
    },
    sub(){
      this.$store.commit(types.DECREMENT)
    },
    addCount(count){
      this.$store.commit(types.INCREMENTCOUNT,count)
    },
    addStu(){
      //payload:负载
      //1.普通提交风格
      this.$store.commit(types.ADDSTU,{ id: 113, name: 'we', age: 35 });
    },
    addStu2(){
      //2.特殊提交风格
      this.$store.commit({
        type:types.ADDSTU2,
        stu:{id: 114, name: 'lalal', age: 38}
      })
    },
    updateInfo(){
      // this.$store.commit(types.UPDATEINFO)
      // this.$store.dispatch(types.AUPDATEINFO,{ //你可以但你不够优雅
      //   message:'负载的信息',
      //   success:()=>console.log('我执行完成啦')
      // })
      this.$store
        .dispatch(types.AUPDATEINFO,`负载信息`)
        .then(res=>console.log(res))
    },
    updateName(){ //调用模块里的方法和其他的一样
      this.$store.commit(types.UPDATENAME,'111')
    },
    updateName2(){
      this.$store
        .dispatch(types.AUPDATENAME,'222')
        .then(res=>console.log(res))
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