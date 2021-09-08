/**
 *
 * 路由器对象
 * **/

import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routers'


const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location,onResolve,onReject){
    if (onResolve || onReject) {
        return     originalPush.call(this,location,onResolve,onReject);
    }

    return originalPush.call(this,location).catch((err)=>{
        if (VueRouter.isNavigationFailure(err)) {
            return err
        }
        return Promise.reject(err)
    })
}


// 安装vue-router插件  install
Vue.use(VueRouter);

//向外暴露路由器对象
export default new VueRouter({
    mode:'history',
    //注册路由
    routes,
})