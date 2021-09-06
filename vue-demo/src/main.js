import Vue from 'vue'
import App from './App.vue'
import Store from './store' //引入store 对象
import router from './router' //引入router 对象

// 完整引入，全局引入定义好 各个组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  store:Store, //store对象在vue的配置对象，来进行使用，在每个组件中，都可以通过this.$store 来获取这个状态存储对象，全局共享, 会放入原型链中，供
  //各个子的组件访问到
  router, //定义路由器， this.$router.  //可以访问路由器
}).$mount('#app')
