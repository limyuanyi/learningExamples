import { reqGetSearchInfo } from "@/api";

//search模塊的小倉庫
const state = {
};
const mutations = {
    GETSEARCHLIST(state,searchList){
        state.searchList=searchList;
    }
};
const actions = {
    async getSearchList({commit},params={}){
        //至少得傳一個空對象
        let result = await reqGetSearchInfo(params);
        console.log(result);
        if(result.code===200){
            commit('GETSEARCHLIST',result.data);
        }
    }
};
const getters = {};

export default{
    state,
    mutations,
    actions,
    getters
}