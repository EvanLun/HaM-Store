import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'

//轮播图
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'
//结束
//import vuex from './vuex/vuex.js'

import router from './router/router.js'

import app from './app/app.vue'


var vm = new Vue({
  el: '#app',
  render: c => c(app),
  //store,
  router
  
})