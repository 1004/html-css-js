import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from './components/TypeNav'


Vue.config.productionTip = false
// 全局注册导航组件构造函数，成为全局组件
Vue.component(TypeNav.name,TypeNav)

new Vue({
  render: h => h(App),
  router,// 注册路由器， 每个组件都可以访问 this.$router, this.$route
}).$mount('#app')
