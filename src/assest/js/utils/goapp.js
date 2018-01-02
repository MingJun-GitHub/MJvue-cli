/**
 * Created by ＬｉｎｇＭｉｎｇＪｕｎ on 2017/7/28.
 */
/*eslint-disable*/
/*
*
* 获取url参数
* */
function getUrlParam(name) {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)') // 构造一个含有目标参数的正则表达式对象
  const r = window.location.search.substr(1).match(reg) // 匹配目标参数
  if(r != null) return decodeURI(r[2])
  return null // 返回参数值
}
/*
* 检测对象是否为空
* */
function isEmptyObject(e) {
  var t;
  for(t in e)
    return !1;
  return !0
}
/*
* 过滤分享url
* */
function filtershareurl(url) {
  var shareurl = url.replace(/\&/ig, '@')
  return shareurl
}
/*
*
* 组装params 格式为 ?name=xxx&sdfai=xxx
* */
function returnParams(obj) {
  if (typeof(obj) === 'undefined') {
    return ''
  }
  if(isEmptyObject(obj)) {
    return ''
  } else {
    var arr = []
    var str = '?'
    for(var i in obj) {
      arr.push(`${i}=${obj[i]}`)
    }
    return str + arr.join('&')
  }
}
/*
* 组装params 格式为 &name=index&sss=xxxx
* */
function returnParams2(obj) {
  if (typeof(obj) === 'undefined') {
    return ''
  }
  if(isEmptyObject(obj)) {
    return ''
  } else {
    var arr = []
    var str = '&'
    for(var i in obj) {
      arr.push(`${i}=${obj[i]}`)
    }
    return str + arr.join('&')
  }
}
/*
* 处理跳转信息
* */
function handleobject (obj) {
  const shareinfo = {
    title: obj.stitle,
    tagName: obj.stagname,
    description: obj.sdescription,
    url: obj.surl ? filtershareurl(obj.surl) : window.location.origin,
    thumbImage: obj.simg ? obj.simg : 'http://m.ds.cn/staticpage/img/sharepic.png'
  }
  const goobj = {
    sourceUrl: obj.sourceurl,
    barTitle: obj.bartitle ? obj.bartitle : '测试标题',
    needTitle: typeof (obj.needtitle) === 'undefined' ? 1 : obj.needtitle ? obj.needtitle : 0,
    canCamera: 1,
    canShare: typeof (obj.canshare) === 'undefined' ? 1 : obj.canshare ? 1 : 0,
    share: shareinfo,
    params: obj.params
  }
  return goobj
}
// 通用 webview1 跳webview1
function goCWV1 (obj) {
  var str = `actionName=CommonWebView`
  var goappobj = handleobject(obj)
  for (var key in goappobj) {
    if (key === 'params' || key === 'share') str += `&${key}=${JSON.stringify(goappobj[key])}`
    else str += `&${key}=${goappobj[key]}`
  }
  gowebview1(str)
}
/*
* 通用 webview2 跳 webview2
* */
function goCWV2 (obj) {
  var goappobj = handleobject(obj)
  goappobj = Object.assign(goappobj, {
    actionName: 'CommonWebView2'
  })
  gowebview2(goappobj)
}
/*
*通用webview1 跳 webview2
* */
function goCWV1toCWV2(obj) {
  var str = `actionName=CommonWebView2`
  var goappobj = handleobject(obj)
  for (var key in goappobj) {
    if (key === 'params' || key === 'share') str += `&${key}=${JSON.stringify(goappobj[key])}`
    else str += `&${key}=${goappobj[key]}`
  }
  gowebview1(str)
}
/*
* 通用webview2 跳 webview1
* */
function goCWV2toCWV1(obj) {
  var goappobj = handleobject(obj)
  goappobj = Object.assign(goappobj, {
    actionName: 'CommonWebView'
  })
  gowebview2(goappobj)
}
/*
* 分享
* */
function openShare(type) {
  goWebViewByActionName(type, 'share')
}
/*
* 通用跳转函数 通过 actionanme
* */
function goWebViewByActionName (type, actionname, params = {})
{
  switch(type) {
    case 1:
      let str = `actionName=${actionname}`
      str += returnParams2(params)
      console.log('str000', str)
      gowebview1(str)
      break
    case 2:
      let obj = {
        actionName: actionname
      }
      obj = Object.assign(obj, params)
      console.log('obj000', obj)
      gowebview2(obj)
      break
    default:
      return
      break
  }
}
/*
* 返回首页
* */
function goHomePage(type, index = 0) {
  goWebViewByActionName(type, 'mainScreen', {
    index: index
  })
}
/*
* 拨打电话
* */
function goCallPhone(type, phone) {
  goWebViewByActionName(type, 'callphone', {
    phoneNumber: phone
  })
}
/*
 * 跳转钣喷
 * */
function goPrintDetail(type) {
  goWebViewByActionName(type, 'PrintDetail')
}
/*
* 跳转登录 lgoin
* */
function goLogin(type) {
  goWebViewByActionName(type, 'UserLogin')
}
/*
* 浏览器启用url
* */
function goOpenUrl (type, url)
{
  goWebViewByActionName(type, 'openURL', {
    url: url ? url: 'http://a.app.qq.com/o/simple.jsp?pkgname=com.dscf.a'
  })
}
/*
* 美容洗车
* */
function goCarWashDetail (type)
{
  goWebViewByActionName(type, 'CarWashDetail')
}
/*
 * 美容洗车
 * */
function goCommidityList (type, key)
{
  goWebViewByActionName(type, 'CommidityList', {
    searchTitleStr: key ? key : ''
  })
}
/*
* 车详情页
* */
function goCarDetails (type, goodsid, merchantid, skuid)
{
  goWebViewByActionName(type, 'BuyItNowPage', {
    goodsId: goodsid,
    merchantid: merchantid,
    skuid: skuid
  })
}
/*
* 车品详情页
* */
function goGoodsDetails (type, goodsid, merchantid, skuid)
{
  goWebViewByActionName(type, 'GoodsDetailsPage', {
    goodsId: goodsid,
    merchantId: merchantid,
    skuId: skuid
  })
}
/*
* 优惠券中心
* */
function goCouponManager(type) {
  goWebViewByActionName(type, 'CouponManager')
}
/*
* 优惠券兑换页
* */
function goCouponExchange(type) {
  goWebViewByActionName(type, 'CouponExchangePage')
}
/*
* 新车秒杀
* */
function goSecKillNewCarDetail(type, applyid, goodsskuid)
{
  goWebViewByActionName(type, 'SecKillNewCarDetail', {
    applyId: applyid,
    goodsSkuId: goodsskuid
  })
}
/*
* 天天秒杀
* */
function goCarLifeSecKillList(type) {
  goWebViewByActionName(type, 'CarLifeSecKillList')
}
/*
* 团购详情页
* */
function goGroupPurchaseDetail(type, activityapplyid, goodsskuid)
{
  goWebViewByActionName(type, 'GroupPurchaseDetail', {
    activityApplyId: activityapplyid,
    goodsSkuId: goodsskuid
  })
}

/*
 * 跳转秒杀产品
 * */
function goSkillProduceDetail(type, activityId, applyiId, merchantId, skuId)
{
  goWebViewByActionName(type, 'CarLifeSecKillDetail', {
    activityId: activityId,
    applyId: applyiId,
    merchantId: merchantId,
    skuId: skuId
  })
}

/*
* 保养
* */
function goNSelfMainTainPage(type)
{
  goWebViewByActionName(type, 'NSelfMainTainPage')
}
/*
* 根据pageid跳转
* */
function gopageJump(type, pageid) {
  switch(type) {
    case 1:
      const str = `actionName=pageJump&jump={"pageId":${pageid}}`
      gowebview1(str)
      break
    case 2:
      const obj = {
        actionName: 'pageJump',
        jump:{
          pageId: pageid
        }
      }
      gowebview2(obj)
      break
    default:
      return
      break
  }
}

/*
* 返回上一页
* */

function goback(type)
{
  goWebViewByActionName(type, 'pop')
}
/*
* 打开相机
* */
function goOpenCamera() {
  return new Promise(function (resolve, reject) {
    var obj = {
      'actionName': 'takePhoto',
      'app': 'market'
    }
    try {
      let str = JSON.stringify(obj)
      window.postMessage(str)
      window.document.addEventListener('message', function (e) {
        var data = e.data
        window.requestAnimationFrame(function () {
          try {
            var dataJSON = JSON.parse(data)
            // 返回dataJson
            resolve(dataJSON)
          } catch (err) {
            reject(err)
          }
        })
      })
    } catch (e) {
      reject(e)
    }
  })
}
/*
* webview1 方法
* */
function gowebview1 (str) {
  try {
    reactNativeAction(str)
  } catch (e) {}
  try {
    window.MyWebview.uriToRN(str)
  } catch (e) {}
}
/*
* webview2 方法
* */
function gowebview2 (obj) {
  try {
    let str = JSON.stringify(obj)
    window.postMessage(str)
  } catch (e) {}
}
export default {
  goCWV1,                // web1 to web1
  goCWV2,                // web2 to web2
  goCWV1toCWV2,          // web1 to web2
  goCWV2toCWV1,          // web2 to web1
  gowebview1,            // web1 最原始方法
  gowebview2,            // web2 最原始方法2
  goWebViewByActionName, // type  actionname  params
  openShare,             // 打开分享
  goHomePage,            // 返回首页 0首页 1买车主页 2发现主页 3车生活 4.个人中心
  goCallPhone,           // 电话 phone
  goPrintDetail,         // 钣喷
  goLogin,               // 登录
  goOpenUrl,             // app 打开url
  goCarWashDetail,       // 洗车
  goCommidityList,       // 搜索
  goCarDetails,          // 新车详情 一口价
  goGoodsDetails,        // 车品详情
  goCouponManager,       // 优惠券中心
  goCouponExchange,      // 兑换优惠券
  goSecKillNewCarDetail, // 新车秒杀
  goCarLifeSecKillList,  // 车生活秒杀
  goGroupPurchaseDetail, // 团购详情
  goNSelfMainTainPage,   // 保养
  gopageJump,            // ID跳转
  goback,                // 返回上一页
  goOpenCamera,          // 打开相机
  filtershareurl,        // 过滤url
  goSkillProduceDetail   // 打开秒杀产品
}
