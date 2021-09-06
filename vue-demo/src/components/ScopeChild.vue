<template>
    <div>
        <ul>
            <li v-for="(stu,index) in stus" :key="stu.id">
                <slot v-bind:stu="stu">
                    {{stu.name}}
                </slot>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'ScopeChild',
        props: ['stus'],
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