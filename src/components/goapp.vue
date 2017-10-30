<template>
  <div class="goapp">
    <div class="logo">
      <img src="../assest/image/logo.png" style="width: 2.5rem">
      <img src="../assest/image/react.png" style="width: 3.2rem">
      <img src="../assest/image/webpack.png" style="width: 3rem">
    </div>
  <div class="page">
    <div class="button" @click="gowebview1">打开百度2</div>
    <div class="button" @click="share">调用分享</div>
    <div class="button" @click="gohome">返回首页</div>
    <div class="button" @click="callphone">电话</div>
    <div class="button" @click="printdetail">跳转钣喷</div>
    <div class="button" @click="gologin">用户登录</div>
    <div class="button" @click="openurl">调用浏览器打开链接</div>
    <div class="button" @click="carwashdetail">调用美容洗车</div>
    <div class="button" @click="commorelist">更多商品列表+关键词</div>
    <div class="button" @click="gocardetails">新车详情页（一口价）</div>
    <div class="button" @click="goskillnewcardetails">新车秒杀详情页</div>
    <div class="button" @click="goodsdetails">车品详情页</div>
    <div class="button" @click="gocarlifelist">车品(天天)秒杀列表</div>
    <div class="button" @click="gogroupdetails">新车团购详情页</div>
    <div class="button" @click="gobaoyang">保养频道</div>
    <div class="button" @click="couponmanager">优惠券管理</div>
    <div class="button" @click="couponexchange">优惠券兑换</div>
    <div class="button" @click="gopageid">页面ID跳转 （1501）</div>
    <div class="button" @click="goproductskill">车品秒杀详情</div>
    <div class="button" @click="goback">返回上一页</div>
    <div class="button" @click="v1tov2">webview1 to webview2</div>
    <div class="button" @click="v2tov1">webview2 to webview1</div>
    <div class="button" @click="opencamera">打开相机</div>
    <div class="button" @click="goduobao">夺宝</div>
    <br>
    <img v-for="item in uploadimg" :src="uploadimg" style="width: 2.0rem; height: 2.0rem">
  </div>
  </div>
</template>

<script>
import goapp from '@js/utils/goapp'
export default {
  data () {
    return {
      uploadimg: []
    }
  },
  methods: {
    gowebview1 () {
      const goobj = {
        sourceurl: 'http://10.8.73.31:8080',
        bartitle: 'comview1',
        canShare: 0,
        stitle: '分享标题',
        stagname: '分享tagname',
        sdescription: '描述',
        thumbImage: '',
        params: {}
      }
      try {
        goapp.goCWV1(goobj)
      } catch (e) {
        goapp.goCWV2(goobj)
      }
    },
    v1tov2 () {
      const goobj = {
        sourceurl: 'http://10.8.73.31:8080',
        bartitle: 'comwebview2',
        canShare: 0,
        stitle: '分享标题',
        stagname: '分享tagname',
        sdescription: '描述',
        thumbImage: '',
        params: {}
      }
      goapp.goCWV1toCWV2(goobj)
    },
    v2tov1 () {
      const goobj = {
        sourceurl: 'http://10.8.73.31:8080',
        bartitle: 'comwebview1',
        canShare: 0,
        stitle: '分享标题',
        stagname: '分享tagname',
        sdescription: '描述',
        thumbImage: '',
        params: {}
      }
      goapp.goCWV2toCWV1(goobj)
    },
    goback () {
      try {
        goapp.goback(1)
      } catch (e) {
        goapp.goback(2)
      }
    },
    share () {
      try {
        goapp.openShare(1)
      } catch (e) {
        goapp.openShare(2)
      }
    },
    gohome () {
      goapp.goHomePage(2)
      try {
        goapp.goHomePage(1)
      } catch (e) {
        goapp.goHomePage(2)
      }
    },
    callphone () {
      try {
        goapp.goCallPhone(1, '13800138000')
      } catch (e) {
        goapp.goCallPhone(2, '13800138000')
      }
    },
    printdetail () {
      try {
        goapp.goPrintDetail(1)
      } catch (e) {
        goapp.goPrintDetail(2)
      }
    },
    gologin () {
      try {
        goapp.goLogin(1)
      } catch (e) {
        goapp.goLogin(2)
      }
    },
    openurl () {
      try {
        goapp.goOpenUrl(1)
      } catch (e) {
        goapp.goOpenUrl(2)
      }
    },
    carwashdetail () {
      try {
        goapp.goCarWashDetail(1)
      } catch (e) {
        goapp.goCarWashDetail(2)
      }
    },
    commorelist () {
      try {
        goapp.goCommidityList(1)
      } catch (e) {
        goapp.goCommidityList(2)
      }
    },
    gocardetails () {
      try {
        goapp.goCarDetails(1, '748', '1', '3518')
      } catch (e) {
        goapp.goCarDetails(2, '748', '1', '3518')
      }
    },
    goodsdetails () {
      try {
        goapp.goGoodsDetails(1, '82319', '10917', '321750')
      } catch (e) {
        goapp.goGoodsDetails(2, '82319', '10917', '321750')
      }
    },
    couponmanager () {
      try {
        goapp.goCouponManager(1)
      } catch (e) {
        goapp.goCouponManager(2)
      }
    },
    couponexchange () {
      try {
        goapp.goCouponExchange(1)
      } catch (e) {
        goapp.goCouponExchange(2)
      }
    },
    goskillnewcardetails () {
      try {
        goapp.goSecKillNewCarDetail(1, '58df86f96b36be5cfe3f5821', '368975')
      } catch (e) {
        goapp.goSecKillNewCarDetail(2, '58df86f96b36be5cfe3f5821', '368975')
      }
    },
    gocarlifelist () {
      try {
        goapp.goCarLifeSecKillList(1)
      } catch (e) {
        goapp.goCarLifeSecKillList(2)
      }
    },
    gogroupdetails () {
      try {
        goapp.goGroupPurchaseDetail(1, '591a5c8ba2944321ffef1afe', '40895')
      } catch (e) {
        goapp.goGroupPurchaseDetail(2, '591a5c8ba2944321ffef1afe', '40895')
      }
    },
    gobaoyang () {
      try {
        goapp.goNSelfMainTainPage(1)
      } catch (e) {
        goapp.goNSelfMainTainPage(2)
      }
    },
    gopageid () {
      try {
        goapp.gopageJump(1, '1501')
      } catch (e) {
        goapp.gopageJump(2, '1501')
      }
    },
    goduobao () {
      window.alert('已经不使用了- - ')
    },
    opencamera () {
      // 只能commonwebview2 用
      goapp.goOpenCamera().then((data) => {
        window.alert(JSON.stringify(data))
        this.uploadimg.push(data.result.data.oURL)
      })
    },
    goproductskill () {
      goapp.goSkillProduceDetail(1, '5804b68f2fbde2b7d9335fc3', '59ea9f8e3c298a003f7ed0d1', '1', '348954')
    }
  },
  created () {
  }
}
</script>


<style lang="less" scoped>
  div.logo{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12.42rem;
    height: 4.5rem;
    margin-bottom: .8rem;
    margin: 0 auto;
  }
  .page{
    box-sizing: border-box;
    padding: 0 .2rem;
    width: 12.42rem;
    margin: 0 auto;
    font-size: .42rem;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .button{
    height: 1.2rem;
    border:1px solid #C8C8C8;
    line-height: 1.2rem;
    display: inline-block;
    padding: 0 .5rem;
    margin-right: .2rem;
    margin-bottom: .5rem;
  }
  .button:active{
    opacity: .8;
  }
</style>
