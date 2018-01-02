<template>
  <div class="nofound">
    <strong>{{satus}}</strong>
  </div>
</template>
<style lang="less" scoped>
  .nofound{
    width: 100%;
    padding: 1rem 0;
    height:auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: #000;
  }
</style>
<script>
  export default {
    data: function () {
      return {
        satus: '404 NOT FOUND'
      }
    }
  }
</script>
