//1.配置vuex  一种状态管理
import Vue from 'vue'
import Vuex from 'vuex'

//2.声明使用vuex
Vue.use(Vuex);


//核心概念, 包含多个属性的对象, VUE 全局存储共享数据
const state = {
    count:0,
};

//包含多个方法的对象
const mutations = {
    INCREMENT(state){
        state.count++;
    },

    DECREMENT(state){
        state.count--;
    }

};

//包含多个方法的对象，和用户操作进行关联
const actions = {
    //context 的store对象
    increment(context){
        context.commit('INCREMENT')
    },

    decrement(context){
        context.commit('DECREMENT')
    },

};

//包含了多个方法的对象，计算属性的get, 对state 的数据进行计算，返回一个新的的属性对象。
const getters = {
};


//3. 向外暴露
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
});
