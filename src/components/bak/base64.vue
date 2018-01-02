<template>
  <div class="smallimg">
    <div class="tip">base64图片处理</div>
    <img src="../../assest/image/cuo.png">
  </div>
</template>
<style lang="less" scoped>
  .smallimg{
    width: 12.42rem;
    padding: 1rem 0;
    height:auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
      width: 4rem;
      height:auto;
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
