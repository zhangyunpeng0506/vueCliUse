//路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

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
    component: () => import("../components/Home"), //路由懒加载方式
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        component: () => import("../components/HomeNews"),
      },
      {
        path: 'message',
        component: () => import("../components/HomeMessage"),
      }
    ],
    meta:{
      title:'首页'
    },
    beforeEnter(to,from,next){  //路由的钩子
      // console.log(to);
      next()
    }
  },
  {
    path: '/about',
    component: () => import("../components/About"),
    meta:{
      title:'关于'
    }
  },
  {
    path: '/user/:userId',
    component: () => import("../components/User"),
    meta:{
      title:'用户'
    }
  },
  {
    path: '/profile',
    component: () => import("../components/Profile"),
    meta:{
      title:'档案'
    }
  }
]
const router = new VueRouter({
  //路由和组件之间的应用关系
  routes,
  mode: 'history', //可选择路由模式（hash、history）
  linkActiveClass: 'active', //路由选中时的class名称，默认为router-link-active
})

/* 路由的钩子函数
 * 总体来数Vue提供了三大类钩子：1.全局钩子；2.某个路由的钩子；3.组件内钩子
 * 两种函数 beforeEach(前置钩子)/afterEach(后置钩子)
 */

//前置钩子(守卫guard)
router.beforeEach((to,from,next)=>{
  //从from跳转到to
  document.title=to.matched[0].meta.title;
  next(); //可以传参数：路径、false
})

//后置钩子
router.afterEach((to,from)=>{

})

//3.将router对象传入到实例中
export default router