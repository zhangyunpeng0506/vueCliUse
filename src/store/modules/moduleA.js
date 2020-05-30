import * as types from '../mutations.types'

const moduleA = {
  state: {
    name: 'zyp'
  },
  getters: {
    fn(state) {
      return state.name + '111'
    }
  },
  mutations: {},
  actions: {}
}

export default moduleA