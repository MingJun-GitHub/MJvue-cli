<template>
  <div class="vuex">
    <div class="vueximg">
      <img src="../assest/image/vuex.png" style="width: 100%; height: auto;">
    </div>
    <h3>做一个简单{{msg}}的加减</h3>
    <h4>例子1----->原始访问方法</h4>
    <div class="ad">
      <button @click="$store.commit('add')">+</button>
      <span><strong>得分：</strong><i style="padding: .1rem .3rem; border-radius: .1rem; background: #ff2233; color: #fff">{{$store.state.count}}</i></span>
      <button @click="$store.commit('reduce')">-</button>
    </div>
    <h4>例子2----->新的访问方法（computed and mapState）</h4>
    <div class="ad">
      <button @click="adds()">+</button>
      <span><strong>得分：</strong>
        <i style="padding: 0rem .3rem; border-radius: .1rem; background: #ff2233; color: #fff">{{count2}}</i>
        <i style="padding: 0rem .3rem; border-radius: .1rem; background: #ff2233; color: #fff">{{$store.state.count2}}</i>
      </span>
      <button @click="$store.commit('reduces')">-</button>
    </div>
    <h4>例子3----->新的访问方法（actions）</h4>
    <div class="ad">
      <button @click="$store.dispatch('addAction')">+</button>
      <span><strong>得分：</strong>
        <i style="padding: 0rem .3rem; border-radius: .1rem; background: #ff2233; color: #fff">{{count2}}</i>
        <i style="padding: 0rem .3rem; border-radius: .1rem; background: #ff2233; color: #fff">{{$store.state.count2}}</i>
      </span>
      <button @click="reduceAction()">-</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import store from '../vuex/store'
// 通过mapState 来解析 state
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
export default {
  name: 'vuex',
  data () {
    return {
      msg: 'vuex'
    }
  },
  // vue计算方法
  /*
  computed: {
    count () {
      return this.$store.state.count2
    }
  },
  */
  /* 用mapState方法的话，会返回一个一个像上面的对象*/
//  computed: mapState({
//    count2: (state) => state.count2    // es6
//    count (state) {
//      return state.count2
//    }
//  }),
  /*用mapState方法的话，再用数组赋值*/
  computed: {
    ...mapState(['count', 'count2']),       // 相当于 data
    ...mapGetters(['count'])                // 相当于wathch
    /*
    count () {
      return this.$state.getters.count
    }
    */
  },
//  methods: {
//    // 触发方法写法
//    adds() {
//      this.$store.commit('adds')
//    }
//  },
  /*用 mapMutations, 再用数组赋值 */
  // methods: mapMutations(['add', 'adds', 'reduce', 'reduces']),
  methods: {
    ...mapMutations(['add', 'adds', 'reduce', 'reduces']),
    ...mapActions(['addAction', 'reduceAction'])
  },
  created () {
    console.log('store', this.$store)
  },
  store
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.vuex{
  margin-top: -10px;
  text-align: center;
  line-height: 1.8;
}
.ad{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}
button{
  display: inline-block;
  height: .8rem;
  width: .8rem;
}
a {
  color: #42b983;
}
</style>
