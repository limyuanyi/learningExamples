<template>
    <!-- 商品分类导航 -->
    <div class="type-nav">
        <div class="container">
            <div @mouseleave="leaveShow" @mouseenter="enterShow">
                <h2 class="all">全部商品分类</h2>
                <!-- 過度動畫 -->
                <transition name="sort">
                    <div class="sort" v-show="show">
                    <div class="all-sort-list2" @click="goSearch">
                        <div class="item bo" v-for=" (c1, index) in categoryList" :key="c1.categoryId"
                            :class="{ cur: currentIndex == index }"> <!--黨currentIndex等於index,才有cur的style -->
                            <h3 @mouseenter="changeIndex(index)">
                                <a :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId">{{ c1.categoryName }}</a>
                                <!-- <router-link to="/search"> {{ c1.categoryName }}</router-link> -->
                            </h3>
                            <!-- 二三級分類 -->
                            <div class="item-list clearfix" :style="{display: currentIndex==index?'block':'none'} ">
                                <div class="subitem" v-for="(c2) in c1.categoryChild" :key="c2.categoryId">
                                    <dl class="fore">
                                        <dt>
                                            <a :data-categoryName="c1.categoryName" :data-category2Id="c2.categoryId">{{ c2.categoryName }}</a>
                                            <!-- <router-link to="/search"> {{ c2.categoryName }}</router-link> -->
                                        </dt>
                                        <dd>
                                            <em v-for="(c3) in c2.categoryChild" :key="c3.categoryId">
                                                <a :data-categoryName="c1.categoryName" :data-category3Id="c3.categoryId">{{ c3.categoryName }}</a>
                                                <!-- <router-link to="/search"> {{ c3.categoryName }}</router-link> -->
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

<style scoped lang="less">
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

                    // &:hover {
                    //     .item-list {
                    //         display: block;
                    //     }
                    // }
                }

                .cur {
                    background: skyblue;
                }
            }
        }

        //過渡動畫開始狀態
        .sort-enter{
            height: 0px;
            transition:rotate
        }
        //過渡動畫結束狀態
        .sort-enter-to{
            height: 461px;
        }
        .sort-enter-active{
            transition:all .5s linear;
        }
    }
}
</style>

<script>
import { mapState } from 'vuex';
//最好的引入應該按需加入
//已經默認暴露。就不需要加大挂號
import throttle from 'lodash/throttle';
export default {
    name: "TypeNav",
    data() {
        return {
            //儲存用戶鼠標移上哪一個分類
            currentIndex: -1,
            show:true
        }
    },
    //組件挂載完畢后：可以向服務器發請求
    mounted() {
        // 通知Vuex發請求，獲得數據，儲存在倉庫
        // this.$store.dispatch('categoryList');
        //黨跳轉到search，會mounted函數,黨不是home就隱藏
        if(this.$route.path!='/home'){
            this.show = false;
        }
    },
    computed: {
        ...mapState({
            //黨使用時，右側函數會立即執行一次
            //注入一個參數state，其實即爲大倉庫數據
            categoryList: state => state.home.categoryList
        })
    },
    methods: {
        //鼠標進入修改相應式數據changeIndex屬性
        //throttle回調函數別用箭頭函數，可能出現上下文
        changeIndex:throttle(function(index){
            this.currentIndex = index;
            //console.log(index)
        },50),
        leaveShow() {
            this.currentIndex=-1;
            if(this.$route.path!='/home'){
             this.show = false;
            }
        },
        goSearch(event){
            //區分開點擊的是事件委托裏的a標簽
            let element = event.target;
            let{categoryname ,category1id,category2id,category3id} = element.dataset;
            if(categoryname){
                //整理路由跳轉參數
                let location={name:'search'};
                let query = {categoryName:categoryname};
                //區分開幾級分類
                if(category1id){
                    query.category1Id=category1id;
                }
                else if(category2id){
                    query.category2Id=category2id;
                }
                else if(category3id){
                    query.category3Id=category3id;
                }
                if(this.$route.params){
                    location.params=this.$route.params;
                    //合并參數
                    location.query = query;
                    this.$router.push(location);
                }
            }
        },
        enterShow(){
            this.show=true;
        }
    },
};
</script>