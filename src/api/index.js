//統一管理api接口
import requests from './request';
import mockRequests from './mockRequest';


//三級聯動接口 地址：/api/product/getBaseCategoryList  請求方式：get  無參數
export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method:'get'});

//獲取banner
export const reqGetBannerList =()=>mockRequests.get('/banner');

//獲取floor數據
export const reqFloorList =()=>mockRequests.get('/floor');

//獲取seach模塊，地址：/api/list，請求方式：post,有參數
/*
{
  "category3Id": "61",
  "categoryName": "手机",
  "keyword": "小米",
  "order": "1:desc",
  "pageNo": 1,
  "pageSize": 10,
  "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
  "trademark": "4:小米"
}
*/
//當前接口傳遞給服務器的params至少是空對象
export const reqGetSearchInfo = (params)=>requests({url:"/list",method:"post",data:params})




// export const reqCategoryList = ()=>{
//     //發請求--aixos的發請求return的是promise對象
//     return requests({url:'/product/getBaseCategoryList',method:'get'});
// }