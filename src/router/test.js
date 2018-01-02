// console.log('process.env.NODE_ENV', process.env.NODE_ENV)
const env = process.env.NODE_ENV == 'dev'
import test from '../pages/test/test.vue'                 // 测试入口
var _testrouter = ''
if (env) {
    _testrouter= {
        path: '/test',
        component: test,
        children: [
          {
            path: '/test/img',
            component: () =>import('../components/bak/image.vue')
          },
          {
            path: '/test/baseimg',
            component: () => import('../components/bak/base64.vue')
          },
          {
            path: '/test/goapp',
            component: () => import('../components/bak/goapp.vue')
          },
          {
            path: '/test/agent',
            component: () => import('../components/bak/agent.vue')
          },
          {
            path: '/test/vuex',
            component: () => import('../components/bak/vuex.vue')
          },
          {
            path: '/test/async',
            component: () => import('../components/bak/async.vue')             // 参考 vue组件懒加载 https://router.vuejs.org/zh-cn/advanced/lazy-loading.html
          },
          {
            path: '/test/animation',
            component: () => import('../components/bak/animation.vue')
          }
        ]
      }
} 
export default _testrouter