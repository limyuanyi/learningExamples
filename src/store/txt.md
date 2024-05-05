//state:倉庫儲存數據的地方
const state = {
    count:1
};
//mutation:修改state的唯一手段
const mutations = {
    ADD(state,count){
        state.count++;
    }
};
//action:處理action,可以書寫自己的業務邏輯，可以處理異步
const actions = {
    //不能修改state
    add({commit}){
        commit("ADD");
    },
};
//getters:理解爲計算屬性，用於簡化倉庫數據，讓組件獲得倉庫數據
const getters = {};


//對外暴露Store類的實例
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});