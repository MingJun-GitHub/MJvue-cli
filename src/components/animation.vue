<template>
  <div style="text-align: center; padding: 1rem;">
    <h3>测试一下动画效果</h3>
    <button style="border: 1px solid #00c795; padding: .12rem .3rem;" @click="changeT()">开始</button>
    <transition name="bounce"
                enter-active-class="bounceInLeft"
                leave-active-class="bounceOutRight">
      <p v-show="show">哈哈哈哈</p>
    </transition>
  </div>
</template>
<script>
  import '../../node_modules/vue2-animate/dist/vue2-animate.min.css'  // 看需求要不要用动画拉，或者自己写css
  export default {
    data: function () {
      return {
        show: true
      }
    },
    methods: {
      changeT () {
        console.log('开始')
        this.show = !this.show
      }
    }
  }
</script>
