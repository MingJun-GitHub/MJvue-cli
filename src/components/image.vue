<template>
  <div class="bigimg">
    <div class="tip">普通图片打包</div>
    <img src="../assest/image/tx.png">
  </div>
</template>
<style lang="less" scoped>
  .bigimg{
    width: 100%;
    padding: 1rem 0;
    height:auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
      width: 7.5rem;
      height:auto;
      display: block;
      margin: 0 auto;
    }
  }
</style>
<script>
  export default {
    data: function () {
      return {
        msg: '大圣图片'
      }
    }
  }
</script>
