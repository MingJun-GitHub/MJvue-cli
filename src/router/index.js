/**
 * Created by dell on 2017/9/25.
 */
import testrouter from './test'
import index from '../components/bak/index.vue'           // 首页
import nofound from '../components/bak/nofound'
var _config = {
  path: '/',
  mode: 'hash',   // hash history HTML5 History 模式   参考 https://router.vuejs.org/zh-cn/essentials/history-mode.html
  routes: [
    {
      path: '*',
      component: nofound
    },
    {
      path: '/',
      component: index
    }
  ]
}
if (testrouter) { _config.routes.push(testrouter) }
console.log('test', _config)
export default _config
