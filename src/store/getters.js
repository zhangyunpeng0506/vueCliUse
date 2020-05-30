const getters = { //类似于计算属性
  powerCounter(state) {
    return state.counter * state.counter
  },
  powerCounter2(state, getters) {
    return getters.powerCounter * 2
  },
  moreAgeStu(state) { //传参计算
    return age => state.students.filter(s => s.age > age)
  }
}

export default getters