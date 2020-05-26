import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

/*后端路由阶段：
  后端渲染：后端处理url和页面之间的映射关系。
  缺点：所有页面的维护都是由后端来编写和维护，而且通常html和数据对应的逻辑关系会混在一起，不利于编写和维护
*/

/*前后端分离阶段：
  前端渲染：浏览器显示的网页中的大部分内容，都是由前端js代码在浏览器中执行，最终渲染出来的网页，后端只负责数据
*/

/*单页面富应用阶段(SPA)：————前端路由阶段
  特点：在前后端分离的基础上加了一层前端路由，改变url不会再次向服务器请求
*/

/*如何改变url让页面不刷新
  1.改变url的hash，然后前端路由去监听
  2. HTML5有history的对象   --是一个栈结构
    history.pushState(data,title,url)  入栈
    history.back() 出栈 //等价于history.go(-1)
    history.forward() //等价于history.go(1)
    history.replaceState({},'',url) 替换
    history.go(-1)  //弹出一个
    history.go(-2)  //弹出两个
    history.go(2)   //压入两个
*/