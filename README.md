我就喜欢偷懒，没时间写

目录说明：
config 目录
---dev.js 开发DEV入口文件
---pro.js 生成打包入口文件
---eslint.js Eslint检查
---entry     所有入口文件配置
---test.js   工具类
---webconfig 网站配置
---webpack.base.js   通用webpack配置
---webpack.dev.js    dev webpack 配置
---webpack.prod.js   prod webpack 配置
---webpack.eslint.js eslint 开发检查配置
---getip             获取本地ip

webpack
---{
---    //入口文件的配置项
---    entry:{},
---    //出口文件的配置项
---    output:{},
---    //模块：例如解读CSS,图片如何转换，压缩
---    module:{},
---    //插件，用于生产模版和各项功能
---    plugins:[],
---    //配置webpack开发服务功能
---    devServer:{}
---}


src 目录
---assest 静态文件（字本/图片/JS/CSS/LESS....）
---components 组件目录
---config  通用配置文件
---router  路由
---tpl  模板目录
---views   各主入口
---vuex    状态控制器
---app.vue 随手写的
---main.js   测试入口文件

参考链接

webpack 官方文档
https://doc.webpack-china.org/

webpack 打包完后路由器设置
webpack vue-router 路由  mode(hash|history) https://router.vuejs.org/zh-cn/essentials/history-mode.html

webpack 打包完后怎么发布到生产环境？ ----》 https://router.vuejs.org/zh-cn/essentials/history-mode.html


vue 懒加载组件(按需加载) 自己看 这个讲起来，没个半天讲不明白
require.ensure()动态加载组件 https://cnodejs.org/topic/586823335eac96bb04d3e305  具体参考这个

webpack3的解决方案，直接在vue-router里面加入 component: import('组件地址')

问题
webpack开发环境中vue-router路由机制引起的样式问题 开发时请注意不要“根样式”如：（body,html 之类的）进行修改
解决办法1. 加 scoped 可以解决部分问题  <style lang='less' scrope></style>
解决办法2. 加 v-bind 样式

打包后文件目录说明
dist 目录
--- index.html 不用多说了
--- css        样式
--- js         js文件
--- image      图片
--- page  page1 page2 page3.....  多入口文件，里面包含多个html  (按业务来配置)

迁移 （vue 2.4 + vue-router 2.7 + vuex 2.4 + webpack 3.6）
vue1 升 vue2 写法  https://cn.vuejs.org/v2/guide/migration.html


后续增加的功能
eslint
单元测试
gitlab
karma   不知道为何物

新功能研究方向   easy-mock 添加到项目中
http://www.easy-mock.com/login
https://easy-mock.com/docs#api-zi-dong-sheng-cheng




