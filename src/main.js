// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

window.Vue = Vue;
require('http://oss.lbssoft.com/lbsmap/lbsmap-0.6.3.min.js')
Vue.config.productionTip = false

/* eslint-disable no-new */
setTimeout(function(){
  new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
  })
},500)