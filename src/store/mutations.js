import Vue from 'vue'
import * as types from './mutations.types'

const mutations = { //同步操作,更新store里面的state官方一定是通过mutations
  /*响应规则：
   * 响应式的前提是在store中已经提前定义
   */
  [types.INCREMENT](state) {
    state.counter++
  },
  [types.DECREMENT](state) {
    state.counter--
  },
  [types.INCREMENTCOUNT](state, count) { //传参
    state.counter += count
  },
  [types.ADDSTU](state, stu) {
    state.students.push(stu);
  },

  [types.ADDSTU2](state, payload) {
    state.students.push(payload.stu);
  },
  [types.UPDATEINFO](state) { //改原来已经定义好的属性是响应式的
    // state.info['age']=25 //不是响应式的
    // delete state.info.age //不是响应式
    Vue.set(state.info, 'age', 25)
    // setTimeout(() => { //异步要放在actions
    //   Vue.delete(state.info, 'age')
    // }, 1000);
  }
}

export default mutations