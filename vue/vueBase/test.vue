<template>
    
</template>

<script>
    export default {
        name: 'test',
        props: {},
        components: {},
        data() {
            return {}
        },
        computed: {
            name() {
                return this.data
            }
        },
        watch: {
            data(newValue, oldValue) {

            }
        },
        methods: {
            name() {

            }
        },
        filters: {
            fnName: function (value) {
                return value
            }
        }
    }
</script>

<style scoped>

</style>