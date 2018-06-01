/**
 * Created by 呵呵哒 on 2018/5/29.
 */

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    userInfo:'',
    tabbarState:false //控制底部bar
  },
  mutations: {//更改 Vuex 的 store 中的状态,Mutation 必须是同步函数,通过 store.commit('方法名')触发
    upTabbarState(state,val) {
      state.tabbarState = val;
    },
    upUserInfo(state,val) {//用户的登录信息保存在全局
      state.userInfo = val;
    }
  },
  actions: {//Action 类似于 mutation,不同：Action 提交的是 mutation，而不是直接变更状态。Action 可以包含任意异步操作。

  },
  getters: {

  }
})

export default store
