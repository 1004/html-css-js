<template>
    <a href="" :title="title">
        <el-button v-bind="$attrs" v-on="$listeners"></el-button>
    </a>
</template>

<script>
    export default {
        name: 'HintButton',
        data() {
            return {}
        },
        components: {},
        methods: {
        },
        props: {
            title:String
        },
        computed: {},
        watch: {},
    }
</script>

<style lang="less" scoped>

</style>