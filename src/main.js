import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

//后端路由：后端处理url和页面之间的映射关系。
//缺点：所有页面的维护都是由后端来编写和维护，而且通常html和数据对应的逻辑关系会混在一起，不利于编写和维护