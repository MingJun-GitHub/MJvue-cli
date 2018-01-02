<template>
  <div style="text-align: center; padding: 1rem;">
    这里就放首页吧
  </div>
</template>
<style lang="less" scoped>
  body{
    background: #fff4c2;
  }
</style>
<script>
  export default {
    data: function () {
      return {
        page: 'index'
      }
    },
    created () {
      console.log('测试一下有没有删除')
      // window.alert('sss')
    }
  }
</script>
