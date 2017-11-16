<template>
  <div class="main">
    <div style="text-align: center; height: 1.0rem; line-height: 1.0rem; padding: .5rem 0;">Webpack 3.6 + vue2.4.2 + vue-router2 + vuex</div>
    <div class="router">
      <ul>
        <li><router-link to="/">首页2</router-link></li>
        <li><router-link to="/img">图片</router-link></li>
        <li><router-link to="/baseimg">Base64</router-link></li>
        <li><router-link to="/goapp">跳RN方法</router-link></li>
        <li><router-link to="/async">异步组件</router-link></li>
        <li><router-link to="/agent">代理</router-link></li>
        <li><router-link to="/nofound">Not Found</router-link></li>
        <li><router-link to="/vuex">vuex</router-link></li>
        <li><router-link to="/animation">动画animation</router-link></li>
        <!--<li><a href="javascript:;" @click="gopage">page2</a></li>-->
      </ul>
    </div>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>
<style lang="less">
@import "assest/css/dsBasics.less";
.main {
  width: 12.42rem;
  margin: 0 auto;
}
.router {
  margin: 0 auto;
  width: 12.42rem;
  background: #00c795;
  ul {
    width: 100%;
    box-sizing: border-box;
    flex-wrap: wrap;
    justify-content: flex-start;
    display: flex;
    li {
      width: 2.484rem;
      text-align: center;
      background: #00c795;
      height: 1.2rem;
      line-height: 1.2rem;
      list-style: none;
      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
}
</style>
<script>
export default {
  data: function() {
    return {
      page: "index"
    };
  },
  methods: {
    gopage() {
      window.location.href = "./page2/";
    }
  }
};
</script>
