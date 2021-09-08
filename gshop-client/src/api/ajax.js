/**
 *
 *  axios二次封装
 *
 *  1. 配置通用的基础逻辑和超时
 *  显示请求进度
 *  成功返回的数据不再是response, 是data
 *  统一处理请求错误，具体请求可以选择处理，也可以不处理
 *
 *
 * */

import axios from 'axios'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'


//配置通用参数，axios 也是一个函数，对Axios原型对象上方法和属性封装 service也是一个函数【函数对象】
const service = axios.create({
    baseURL:'http://127.0.0.1:9000',
    timeout:20000,
})


//添加拦截器  请求拦截器
service.interceptors.request.use(function (config) {
    Nprogress.start();
    return config
},function (error) {
    return Promise.reject(error);
});

//响应拦截器
service.interceptors.response.use(function (response) {
    Nprogress.done();
    return response.data // 直接返回对象
},function (error) {
    Nprogress.done();
    //对一些错误，可以统一处理，例如token 过期了，重新登录
    return Promise.reject(error);
});



//默认向外暴露 【函数对象】既可以作为函数来调用，也可以用来作为对象来调用上面的方法
export default service










