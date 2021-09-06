<template>
    <div>
        <ul>
            <li>
<!--                {{this.$route.params.msgId}}&#45;&#45;{{this.$route.query.content}}-->
                {{msgId}}--{{content}}

            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'MessageDetail',
        props: ['msgId','content'],
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