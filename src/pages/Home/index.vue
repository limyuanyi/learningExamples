<template>
    <div>
        <!-- 三級聯動，已經是全局組件，所以不要在引入 -->
        <TypeNav></TypeNav>
        <ListContainer/>
        <Recommend/>
        <Rank/>
        <Like/>
        <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor"/>
        <Brand/>
    </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer';
import Recommend from '@/pages/Home/Recommend';
import Rank from '@/pages/Home/Rank';
import Like from '@/pages/Home/Like';
import Brand from '@/pages/Home/Brand';
import Floor from '@/pages/Home/Floor';


import { mapState } from 'vuex';
export default{
    name:'',
    components:{
        ListContainer,
        Recommend,
        Rank,
        Like,
        Brand,
        Floor
    },
    mounted(){
        this.$store.dispatch('getFloorList');
    },
    computed:{
        ...mapState({
            floorList:(state)=>state.home.floorList,
        })
    },
    methods:{
        add(){
            this.$store.dispatch("add");
        }
    }
}
</script>

<style scoped>

</style>