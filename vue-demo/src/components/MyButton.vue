<template>
    <div class="btn">
        <button @click="count = count+1">点击</button><p>{{count}}</p>
    </div>
</template>

<script>
    export default {
        name: 'MyButton',
        props: {},
        components: {},
        data() {
            return {
                count:0
            }
        },
        methods: {
        },
    }
</script>

<style scoped>
    .btn{

    }
</style>