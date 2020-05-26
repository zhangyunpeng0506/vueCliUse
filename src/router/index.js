//路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from '../components/Home'
import About from '../components/About' 

//1.通过Vue.use(插件)，安装插件。(只要是插件就必须有这一步)
Vue.use(VueRouter)

//2.创建路由对象
const routes = [
  {
    path: '/',
    redirect: '/home' //重定向到home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
]
const router = new VueRouter({
  //路由和组件之间的应用关系
  routes,
  mode: 'history', //可选择路由模式（hash、history）
  linkActiveClass: 'active', //路由选中时的class名称，默认为router-link-active
})

//3.将router对象传入到实例中
export default router