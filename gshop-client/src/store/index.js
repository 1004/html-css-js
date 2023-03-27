/**
 *
 * vuex 最和谐的管理对象store
 *
 ***/

import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
// import home from './modules/home'
// import user from './modules/user'


//安装插件
Vue.use(Vuex);

const mutations = {

};

const actions = {

};

const getters={

};

export default new Vuex.Store({
    //多模块
    modules
    // modules:{
    //     home,
    //     user
    // }
})