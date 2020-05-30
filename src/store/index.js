import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'

//1.安装使用插件
Vue.use(Vuex)

//2.创建对象
const state = { //共享状态，单一状态树（单一数据源）
  counter: 0,
  students: [{
      id: 110,
      name: 'zs',
      age: 20
    },
    {
      id: 111,
      name: 'ls',
      age: 30
    },
    {
      id: 112,
      name: 'wmz',
      age: 40
    }
  ],
  info: {
    name: 'zyp'
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {  //划分模块(最终会被放在state中，可在控制台查看)
    moduleA,
    moduleB
  }
})

//3.导出
export default store