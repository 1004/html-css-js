<template>
    <div>
        <div class="header">
            <p>头部</p>
            <P>{{msg}}</P>
<!--            <button @click="commit">调用外部</button>-->

<!--            @符号绑定事件监听【有可能是系统的，有可能是自定义的】 :是绑定静态属性或者方法-->
            <button @click="$emit('addTest')">调用外部</button>

            <div>
                <ul>
                    <li v-for="(item,index) in stus" :key="item.id">
                        <Item :item="item"></Item>
                    </li>
                </ul>
            </div>
            <slot>

            </slot>
            <slot name="line">

            </slot>

        </div>

<!--        作用域插槽-->
        <ScopeChild :stus="stus">
            <template slot-scope="{stu}">
                <a href="#">点击{{stu.name}}</a>
            </template>
        </ScopeChild>
    </div>
</template>

<script>
    import Item from './Item'
    import ScopeChild from './ScopeChild'

    export default {
        name: 'Header',
        props: ['msg','callback'],
        components: {Item,ScopeChild},
        data() {
            return {
                stus:[
                    {id:1,name:'xky'},
                    {id:2,name:'xky1'},
                    {id:3,name:'xky2'},
                    {id:4,name:'xky3'},
                ],
            }
        },
        computed: {},
        watch: {},
        methods: {
            commit(){
                this.callback()
            }
        },
        filters: {}
    }
</script>

<style scoped>
    .header{
        width: 1024px;
        height: 100px;
        margin: 0 auto;
        text-align: center;
        background: hotpink;
    }

</style>