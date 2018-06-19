// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

/****************************************************************************** */
/**********如果需要在全局引入element-ui组件供所有子组件使用的话，就解注下面的 ****** */
/****************************************************************************** */
// import 'element-ui/lib/theme-chalk/button.css' // 按钮css
// import 'element-ui/lib/theme-chalk/notification.css' // 提示框css
// import 'element-ui/lib/theme-chalk/icon.css'  // 提示框的“X”号在这里面
// import { Button } from 'element-ui'
// Vue.use(Button)

// 这两个不要解注
// import 'element-ui/lib/theme-chalk/index.css' // 这里面装有所有的css，体积最大，不要引入
// Vue.use(Notification) // 这个千万不要写，否则页面刚刚加载就会出现残缺的弹窗

import { Notification } from 'element-ui'
Vue.prototype.$notify = Notification;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
