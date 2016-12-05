import * as types from './../mutations'
export default {
  state: {
    api: []
  },
  actions: {
    addData ({state, commit}, data) {
      commit(types.ADD_DATA, {
        data: data
      })
    }
  },
  mutations: {
    [types.ADD_DATA] (state, data) {
      state.api = data
    }
  }
}
