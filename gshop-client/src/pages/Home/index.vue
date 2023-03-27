<template>
    <div>
        <TypeNav></TypeNav>
        <ListContainer></ListContainer>
        <TodayRecommend></TodayRecommend>
        <Rank></Rank>
        <Like></Like>
        <Floor></Floor>
        <Floor></Floor>
        <Brand></Brand>
    </div>
</template>

<script>
    import ListContainer from "./ListContainer/ListContainer";
    import TodayRecommend from "./TodayRecommend/TodayRecommend";
    import Rank from "./Rank/Rank";
    import Like from "./Like/Like";
    import Floor from "./Floor/Floor";
    import Brand from "./Brand/Brand";


    export default {
        name: 'Home',
        props: {},
        components: {Brand, Floor, Like, Rank, TodayRecommend, ListContainer},
        data() {
            return {}
        },
        computed: {},
        watch: {},
        methods: {},
        filters: {},
        mounted() {
            this
        }
    }
</script>

<style lang="less" scoped>
</style>