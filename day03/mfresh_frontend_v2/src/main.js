// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.config.productionTip = false

// css

// js
import "../src/assets/js/jquery-1.11.3"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
Vue.filter('mydate',function (num) {
  var d= new Date(num);
  return d.getFullYear()+'-'+d.getMonth()+'-'+d.getDate();
});
//创建bus
var bus = new Vue();
