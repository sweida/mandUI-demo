// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import rem from './utils/rem'

import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'
// import 'lib-flexible/flexible.js'
Vue.use(mandMobile)

Vue.config.productionTip = false

// 消除ios:activeBUG
document.addEventListener('touchstart', function () {}, false) 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

