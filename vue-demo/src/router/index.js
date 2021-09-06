import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import About from '../views/About'
import Message from '../views/Message'
import News from '../views/News'
import MessageDetail from '../views/MessageDetail'
import NewsDetail from '../views/NewsDetail'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home, //路由中注册路由组件
            //二级路由
            children: [
                {
                    path: 'msg',
                    component: Message,
                    children: [
                        {
                            path: 'msgDetail/:msgId',
                            component: MessageDetail,
                            name:'msgDetail12', //必须要定义name 属性
                            props:function (route) {
                                //当前的路由对象
                                return {
                                    msgId:route.params.msgId,
                                    content:route.query.content,
                                }
                            }
                        }
                    ]
                },
                {
                    path: 'news',
                    component: News,
                    children: [
                        {
                            path: 'newsDetail',
                            component: NewsDetail
                        }
                    ]
                },
                {
                    path:'',
                    redirect: 'msg'
                }

            ]
        },
        {
            path: '/About',
            component: About,
        },
        //重定向路由 到home
        {
            path: '/',
            redirect: '/Home'
        }
    ],

});