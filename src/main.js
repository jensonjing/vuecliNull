// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'
import Bus from './store/bus';
/*
*如果有scss函数则不需要引入此js
*使用：以iphone6尺寸为例。
*45pt => 45/100rem
*
*全局scss文件配置在build=>utils.js中,同时需要安装sass-resources-loader插件
*
*/
import 'lib-flexmobile/lib-flexmobile.js';

/*引入公共样式文件*/
import './assets/css/common.css'

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
Vue.use(Bus);

//引入接口js文件
import httpServe from './assets/lib/https.js'
Vue.prototype.$https = httpServe;

// 是否显示生产消息
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
