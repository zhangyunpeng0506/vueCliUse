import * as types from '../mutations.types'

const moduleB = {
  state: {
    name: 'fj'
  },
  getters: {
    fullName(state) {
      return state.name + `233`
    },
    fullName2(state, getters) {
      return getters.fullName + '999'
    },
    fullName3(state, getters, rootState, root) { //getters包括主store内的计算属性
      // console.log(getters===root);  //true
      return getters.fullName2 + getters.powerCounter + rootState.counter;
    },
  },
  mutations: {
    [types.UPDATENAME](state, payload) {
      state.name = `${state.name}${payload}`
    }
  },
  actions: {
    // [types.AUPDATENAME](context,payload) { 
    //   return new Promise((resolve, reject) => { 
    //     setTimeout(() => {
    //       console.log(context);
    //       context.commit(types.UPDATENAME, payload)
    //       resolve(`modules内的actions执行完了`)
    //     }, 1000);
    //   })
    // }
    [types.AUPDATENAME]({
      state,
      getters,
      rootState,
      commit
    }, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit(types.UPDATENAME, payload)
          resolve(`modules内的actions执行完了`)
        }, 1000);
      })
    }
  }
}

export default moduleB