<template>
  <div>
    这是{{page}}页面
  </div>
</template>
<style lang="less" scoped>
  body{
    background: #fff;
  }
</style>
<script>
  // import '../assest/css/user_center/user_address.less'
  export default {
    data: function () {
      return {
        page: 'home'
      }
    }
  }
</script>
