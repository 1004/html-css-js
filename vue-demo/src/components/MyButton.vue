<template>
    <div class="btn">
        <button @click="count = count+1">点击</button><p>{{count}}</p>
        <button @click="testStore">xxxxx</button>
    </div>
</template>

<script>
    import store from '../store'
    import store2 from '../store'
    import Test from '../router/test'

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
            testStore(){
                let count = store.state.count
                console.log(count)
                console.log(store === this.$store)
                console.log(store === store2)
                console.log(Test() === Test())

            }
        },
    }
</script>

<style scoped>
    .btn{

    }
</style>