<template>
    <div>
        <Header></Header>
        <router-view></router-view>
        <Footer v-show="!$route.meta.isHideFooter"></Footer>
    </div>
</template>

<script>
    import Header from '@/components/Header'
    import Footer from '@/components/Footer'
    import {queryCategory} from '@/api'

    export default {
        name: 'App',
        components: {
            Header,
            Footer,
        },
        //挂载后
        mounted() {
            queryCategory().then(result => {
                console.log(result)
            }).catch(error => {
                console.log(result)
            })
        }
    }
</script>

<style>
</style>
