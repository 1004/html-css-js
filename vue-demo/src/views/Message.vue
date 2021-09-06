<template>
    <div>
        <p>msg-msg-msgmsg-msg-msgmsg-msg-msgmsg-msg-msg</p>
        <ul>
            <li v-for="(msg,index) in msgs" :key="msg.id">
                <!--                <router-link to="/home/msg/msgDetail">-->
                <!--                    {{msg.content}}-->
                <!--                </router-link>-->

                <!--                为字路由起一个名字，通过名字，进行找字路由进行对象形式的跳转-->
                <!--                同一个组件进行切换的时候，会复用，只是参数不同而已，所以Moutend调用一次-->
                <router-link :to="{name:'msgDetail12',param:{msgId:msg.id},query:{content:msg.content}}">
                    {{msg.content}}
                </router-link>
            </li>
        </ul>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Message',
        props: {},
        components: {},
        data() {
            return {
                msgs: [
                    {id: 1, content: '消息1'},
                    {id: 2, content: '消息2'},
                    {id: 3, content: '消息3'},
                ]
            }
        },
        computed: {},
        watch: {},
        methods: {},
        filters: {}
    }
</script>

<style scoped>

</style>