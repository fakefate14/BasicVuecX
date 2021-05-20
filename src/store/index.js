import { createStore } from 'vuex'

export default createStore({
  state: {
    count:0
  },
  mutations: {
    add(state,value){
      state.count = value
    },
    remove(state,value){
      state.count = value
    }
  },
  actions: {
    addAction(context){
      context.commit("add",this.getters.getCount+1)
    },
    removeAction(context){
      context.commit("remove",this.getters.getCount-1)
    }
  },
  getters:{
    getCount(state){
      return state.count
    }
  },
  modules: {
  }
})
