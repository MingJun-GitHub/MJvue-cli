<template>
    <div class="main-view">
      <router-view></router-view>
    </div>
</template>
<style lang="less">
@import "assest/css/dsBasics.less";
</style>
<script>
export default {
  data: function() {
    return {
      page: "index"
    };
  }
};
</script>
