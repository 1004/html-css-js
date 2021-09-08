import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Regist from '@/pages/Regist'
import Search from '@/pages/Search'

export default [
    {
        path:'/',
        component:Home
    },
    {
        // 参数可以用正则匹配， /xxx/:bb?
        path:'/search',
        name:'search',
        component:Search,
        props(route){
            return {
                keyword:route.query.keyword
            }
        }
    },
    {
        path:'/regist',
        component:Regist,
        meta:{
            isHideFooter:true
        }
    },
    {
        path:'/login',
        component:Login
    },
]