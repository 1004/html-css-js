<template>
    <div class="type-nav">
        <div class="container"
        >
            <div @mouseleave="hideSubList" @mouseenter="showitemList">
                <h2 class="all" >全部商品分类</h2>
                <transition name="slide">
                    <div class="sort" v-show="isShowFirst">
                        <div class="all-sort-list2">
                            <div class="item" v-for="(c1,index) in categoryList" :key="c1.id"
                                 :class="{active:currentIndex===index}"
                                 @mouseenter="showSubList(index)"
                            >
                                <h3>
                                    <!--                            <a href="">{{c1.name}}</a>-->
                                    <router-link :to="`/search?categoryId=${c1.id}&categoryName=${c1.name}`">{{c1.name}}
                                    </router-link>
                                </h3>
                                <div class="item-list clearfix">
                                    <div class="subitem">
                                        <dl class="fore" v-for="(c2,index) in c1.childCategory" :key="c2.id">
                                            <dt>
                                                <!--                                        <a href="">{{c2.name}}</a>-->
                                                <router-link :to="`/search?categoryId2=${c2.id}&categoryName=${c2.name}`">
                                                    {{c2.name}}
                                                </router-link>
                                            </dt>
                                            <dd>
                                                <em v-for="(c3,index) in c2.childCategory" :key="c3.id">
                                                    <!--                                            <a href="">{{c3.name}}</a>-->
                                                    <router-link :to="`/search?categoryId3=${c3.id}&categoryName=${c3.name}`">
                                                        {{c3.name}}
                                                    </router-link>
                                                </em>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
            <nav class="nav">
                <a href="###">服装城</a>
                <a href="###">美妆馆</a>
                <a href="###">尚品汇超市</a>
                <a href="###">全球购</a>
                <a href="###">闪购</a>
                <a href="###">团购</a>
                <a href="###">有趣</a>
                <a href="###">秒杀</a>
            </nav>

        </div>
    </div>
</template>

<script>
    import throttle  from 'lodash/throttle'
    import {mapState,mapGetters} from 'vuex'

    export default {
        name: 'TypeNav',
        data() {
            return {
                currentIndex: -1,
                isShowFirst:false,
            }
        },
        components: {},

        created(){
           if (this.$route.path === '/'){
              this.isShowFirst = true
           }
        },

        methods: {
            //加入防抖，限流
            showSubList:throttle(function (index) {
                this.currentIndex = index;
                this.isShowFirst = true
            },100),

            hideSubList() {
                this.currentIndex = -1;
                if (this.$route.path !== '/') {
                    this.isShowFirst = false
                }
            },
            showitemList:throttle(function () {
                this.isShowFirst = true
            },100),
        },
        props: {},
        computed: {
            //计算属性，方法名作为属性名，同时会监控更新
            // categoryList() {
            //     return this.$store.state.home.categoryList;
            // }
            //第二种写法，可以拆包对象
            // ...mapState({
            //     categoryList:(state)=>state.home.categoryList,
            // })
            // 第三中写法
            // ...mapGetters(['categoryList'])
            // 第四中写法
            // categoryList(){
            //     return this.$store.getters.categoryList
            // },
            //第五种写法
            ...mapGetters({
                categoryList:'categoryList'
            })
        },
        watch: {},
    }
</script>

<style lang="less" scoped>
    .type-nav {
        border-bottom: 2px solid #e1251b;

        .container {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            position: relative;

            .all {
                width: 210px;
                height: 45px;
                background-color: #e1251b;
                line-height: 45px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
            }

            .nav {
                a {
                    height: 45px;
                    margin: 0 22px;
                    line-height: 45px;
                    font-size: 16px;
                    color: #333;
                }
            }

            .sort {
                position: absolute;
                left: 0;
                top: 45px;
                width: 210px;
                height: 461px;
                position: absolute;
                background: #fafafa;
                z-index: 999;

                &.slide-enter-active, &.slide-leave-active {
                    transition: opacity .5s;
                }

                &.slide-enter, &.slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
                    opacity: 0;
                    height: 0px;
                }


                .all-sort-list2 {
                    .item {
                        h3 {
                            line-height: 30px;
                            font-size: 14px;
                            font-weight: 400;
                            overflow: hidden;
                            padding: 0 20px;
                            margin: 0;

                            a {
                                color: #333;
                            }
                        }

                        .item-list {
                            display: none;
                            position: absolute;
                            width: 734px;
                            min-height: 460px;
                            background: #f7f7f7;
                            left: 210px;
                            border: 1px solid #ddd;
                            top: 0;
                            z-index: 9999 !important;

                            .subitem {
                                float: left;
                                width: 650px;
                                padding: 0 4px 0 8px;

                                dl {
                                    border-top: 1px solid #eee;
                                    padding: 6px 0;
                                    overflow: hidden;
                                    zoom: 1;

                                    &.fore {
                                        border-top: 0;
                                    }

                                    dt {
                                        float: left;
                                        width: 54px;
                                        line-height: 22px;
                                        text-align: right;
                                        padding: 3px 6px 0 0;
                                        font-weight: 700;
                                    }

                                    dd {
                                        float: left;
                                        width: 415px;
                                        padding: 3px 0 0;
                                        overflow: hidden;

                                        em {
                                            float: left;
                                            height: 14px;
                                            line-height: 14px;
                                            padding: 0 8px;
                                            margin-top: 5px;
                                            border-left: 1px solid #ccc;
                                        }
                                    }
                                }
                            }
                        }

                        &.active {
                            background-color: #CCCCCC;

                            .item-list {
                                display: block;
                            }
                        }
                    }
                }
            }
        }
    }
</style>