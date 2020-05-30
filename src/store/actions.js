import * as types from './mutations.types'

const actions = { //异步操作
  [types.AUPDATEINFO](context, payload) { //context:上下文，在这里就是store
    // setTimeout(() => { //异步要放在actions
    //   context.commit(types.UPDATEINFO);
    //   console.log(payload.message);
    //   payload.success()
    // }, 1000);
    return new Promise((resolve) => {
      setTimeout(() => {
        context.commit(types.UPDATEINFO);
        console.log(payload);
        resolve(`我执行完成啦！`)
      }, 1000);
    })
  }
}

export default actions