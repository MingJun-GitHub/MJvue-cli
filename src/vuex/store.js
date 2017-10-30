/**
 * Created by MingJun on 2017/9/25.
 *
 *          ┌─┐       ┌─┐
 *       ┌──┘ ┴───────┘ ┴──┐
 *       │                 │
 *       │       ───       │
 *       │  ─┬┘       └┬─  │
 *       │                 │
 *       │       ─┴─       │
 *       │                 │
 *       └───┐         ┌───┘
 *           │         │
 *           │         │
 *           │         │
 *           │         └──────────────┐
 *           │                        │
 *           │                        ├─┐
 *           │                        ┌─┘
 *           │                        │
 *           └─┐  ┐  ┌───────┬──┐  ┌──┘
 *             │ ─┤ ─┤       │ ─┤ ─┤
 *             └──┴──┘       └──┴──┘
 *
 *        神兽保佑 （神兽来源与网络） 代码无BUG!
 *
 */

/*
*   demo demo  demo
*
* */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 定义 state
const state = {
  count: 1,
  count2: 1
}

// 定议 mutations   修改state
const mutations = {
  add (state) {
    state.count++
  },
  reduce (state) {
    state.count--
  },
  adds (state) {
    state.count2++
  },
  reduces (state) {
    state.count2--
  }
}

// 定义 getters  过滤计算  相当于watch
const getters = {
  count: (state) => {
    state.count += 1000
  }
}

// 定义 actions 异步功能
const actions = {
  addAction (context) {
    context.commit('add')
  },
  reduceAction ({commit}) {
    window.setTimeout(() => {
      window.alert('hahaha......')
    }, 3000)
    commit('reduce')
    console.log('我先走了，不等你们了')
  }
}
export default new Vuex.Store({
  state, mutations, getters, actions
})
