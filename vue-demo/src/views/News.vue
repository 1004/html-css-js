<template>
    <div>
        <p>news-news-news-news-news</p>
        <router-link to="/home/news/newsDetail">新闻详情</router-link>
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