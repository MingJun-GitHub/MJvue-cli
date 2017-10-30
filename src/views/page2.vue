<template>
  <div class="main">
    <div style="text-align: center; height: 1.0rem; line-height: 1.0rem; padding: .5rem 0;">page2</div>
    <div class="router">
      <ul>
        <li><router-link to="/">首页2</router-link></li>
        <li><router-link to="/img">图片1</router-link></li>
      </ul>
    </div>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>
<style lang="less">
  body,html,*{
    padding: 0;
    margin: 0;
  }
  ul{
    padding: 0;
  }
  .main{
    width: 12.42rem;
    margin: 0 auto;
  }
  .router{
    margin: 0 auto;
    width: 12.42rem;
    background: #00c795;
    ul{
      width: 100%;
      box-sizing: border-box;
      flex-wrap: wrap;
      justify-content: flex-start;
      display: flex;
      li{
        width: 2.484rem;
        text-align: center;
        background: #00c795;
        height: 1.2rem;
        line-height: 1.2rem;
        list-style: none;
        a{
          color: #fff;
          text-decoration: none;
        }
      }
    }
  }
</style>
