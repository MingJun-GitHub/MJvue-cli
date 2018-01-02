<template>
  <div class="test" id="test">
    <div style="text-align: center; height: 1.0rem; line-height: 1.0rem; padding: .5rem 0;">Webpack 3.6 + vue2.4.2 + vue-router2 + vuex</div>
    <div class="router">
      <ul>
        <li><router-link to="/test">首页</router-link></li>
        <li><router-link to="/test/img">图片</router-link></li>
        <li><router-link to="/test/baseimg">Base64</router-link></li>
        <li><router-link to="/test/goapp">跳RN方法</router-link></li>
        <li><router-link to="/test/async">异步组件</router-link></li>
        <li><router-link to="/test/agent">代理</router-link></li>
        <li><router-link to="/test/nofound">Not Found</router-link></li>
        <li><router-link to="/test/vuex">vuex</router-link></li>
        <li><router-link to="/test/animation">动画animation</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>
<style lang="less" scoped>
@import "./test.less";
</style>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
