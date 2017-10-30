<template>
  <div style="text-align: center; padding: 1rem;">
     <div class="tip">代理测试</div>
     <button style="width: 2.2rem; height: 1rem; font-size: .5rem; margin-top: .2rem" @click="getdata">click</button>
  </div>
</template>
<script>
  import $ from 'jquery'
  export default {
    data: function () {
      return {
        page: 'index'
      }
    },
    methods: {
      getdata () {
        $.ajax({
          url: '/api/customer-main-mapp/custcenter-mapi/info',
          data: {},
          dataType: 'JSON',
          success: function (data) {
            console.log('data----', data)
          },
          error: function (error) {
            console.log('error', error)
          }
        })
      }
    }
  }
</script>
