<template>
    <div :class="{showClass:isShow}" @mouseenter="isShow=true" @mouseleave="isShow=false">
        <p>内容:{{item.name}}</p>
        <button>删除</button>
    </div>
</template>

<script>
    export default {
        name: 'Item',
        props: {item:Object},
        components: {},
        data() {
            return {
                isShow:false,
            }
        },
        computed: {},
        watch: {},
        methods: {},
        filters: {}
    }
</script>

<style scoped>
    .showClass{
        background: hotpink;
    }
    div{
        height: 50px;
        width: 100%;
    }
    p{
        float: left;
    }

</style>