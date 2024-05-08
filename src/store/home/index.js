import { reqCategoryList, reqGetBannerList, reqFloorList } from "@/api";

//home模塊的小倉庫
const state = {
    //state中數據默認初始值別瞎寫，服務器返回對象還是數組，初始值就是什麽
    categoryList:[],
    //輪播圖數組
    bannerList:[],
    //floor數據
    floorList:[]
};
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList = bannerList;
    },
    GETFLOORLIST(state,floorList){
        state.floorList = floorList;
    }
};
const actions = {
    async categoryList({commit}){
        //通過api裏面接口函數調用，向服務器發請求，獲得服務器數據
        let result = await reqCategoryList();
        if(result.code===200){
            commit("CATEGORYLIST",result.data);
        }
    },

    //獲取首頁輪播圖的數據
    async getBannerList({commit}){
            let result = await reqGetBannerList();
            //console.log(result);
            if(result.code===200){
                commit("GETBANNERLIST",result.data);
            }
    },
    //獲取floor數據
    async getFloorList({commit}){
            let result = await reqFloorList();
            //console.log(result);
            if(result.code===200){
                commit("GETFLOORLIST",result.data);
                //console.log(result);
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