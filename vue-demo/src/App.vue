<template>
    <div id="app">
        <!--        <Header :msg="headerData" :callback="callback">-->
        <!--            <template>-->
        <!--                <p>来了，客观</p>-->
        <!--            </template>-->
        <!--            <template name="line">-->
        <!--                <a href="#">点击下吧</a>-->
        <!--            </template>-->
        <!--        </Header>-->

        <el-row>
            <el-button round>圆角按钮</el-button>
            <el-button type="primary" round @click="increment">增加1</el-button>
            <el-button type="success" round @click="decrement">减少1</el-button>
            <el-button type="info" round @click="toOthers">去其他</el-button>
            <el-button type="warning" round>警告按钮</el-button>
            <el-button type="danger" round>危险按钮</el-button>
        </el-row>

        <p>{{$store.state.count}}</p>
        <!--        <MyButton></MyButton>-->
        <div>
            <ul>
                <li>
                    <router-link to="/home">Home</router-link>
                </li>
                <li>
                    <router-link to="/About">About</router-link>
                </li>
            </ul>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

    import MyButton from './components/MyButton'
    import Header from './components/Header'
    import {mapActions, mapState} from 'vuex'

    export default {
        name: 'App',
        data() {
            return {
                headerData: "app来的"
            }
        },
        components: {
            //定义和注册组件，其实是注册的组件的构造函数，在用的位置，用这个构造函数创建组件对象
            MyButton,
            Header
        },
        computed: {
            ...mapState(['count'])
        },
        methods: {
            //3个点，进行拆出对象的方法，和属性，放到methods对象里面，不然对象是放不到对象里面的
            //就像数组进行拆除里面元素，进行传递到参数里面，也是要进行3个点进行拆包， 扩展运算符
            ...mapActions(['increment', 'decrement']),

            callback() {
                console.log("App被调用了")
            },
            // increment(){
            //     //对全局共享数据进行修改, 事件分发
            //   this.$store.dispatch('increment')
            // },
            // decrement(){
            //     //全局存储
            //   this.$store.dispatch('decrement')
            // }
            toOthers(){
                //有历史记录
                // this.$route.push();
                //没有历史记录
                // this.$route.replace();
            },
        }

    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
