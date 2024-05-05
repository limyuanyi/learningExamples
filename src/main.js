import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from '@/router'
//引入倉庫
import store from '@/store';
//三級聯動組件--全局組件
import TypeNav from '@/components/TypeNav'
//（全局組件名字，哪一個組件）,要先注冊名字
Vue.component(TypeNav.name,TypeNav);
//引入MockServer.js----mock數據
import '@/mock/mockServe';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //注冊路由信息
  router,
  //注冊倉庫，組件實力上囘多一個屬性$store
  store
}).$mount('#app')


// //測試axios
// import { reqCategoryList } from '@/api';
// reqCategoryList();