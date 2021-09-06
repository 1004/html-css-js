<template>
    <div>
        <div style="width: 1000px;height: 300px; background-color: red">
            <router-link to="/home/msg">消息</router-link>
            <router-link to="/home/news">新闻</router-link>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        props: {},
        components: {},
        data() {
            return {}
        },
        computed: {},
        watch: {},
        methods: {},
        filters: {}
    }
</script>

<style scoped>

</style>