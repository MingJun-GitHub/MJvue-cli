/**
 * Created by dell on 2017/9/25.
 */
import index from '../components/index.vue'
import image from '@v/image.vue'
import baseimg from '@v/base64.vue'
import goapp from '@v/goapp.vue'
import agent from '@v/agent.vue'
import nofound from '@v/nofound.vue'
export default {
  // mode: 'history',                            // hash history HTML5 History 模式   参考 https://router.vuejs.org/zh-cn/essentials/history-mode.html
  routes: [
    {
      path: '*',
      component: nofound
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/img',
      component: image
    },
    {
      path: '/baseimg',
      component: baseimg
    },
    {
      path: '/goapp',
      component: goapp
    },
    {
      path: '/agent',
      component: agent
    }
  ]
}
