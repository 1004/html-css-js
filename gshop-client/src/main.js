import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from './components/TypeNav'
import store from './store'

//引入导航css
import 'swiper/css/swiper.css'

Vue.config.productionTip = false
// 全局注册导航组件构造函数，成为全局组件
Vue.component(TypeNav.name,TypeNav)

new Vue({
  beforeCreate(){
    //在Vue原型对象上设置事件总线，组件上可以用了
    Vue.prototype.$bus = this
  },
  render: h => h(App),
  router,// 注册路由器， 每个组件都可以访问 this.$router, this.$route
  store,// vuex 所有组件对象，都可以访问$store
}).$mount('#app')
