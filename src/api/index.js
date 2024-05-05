//統一管理api接口
import requests from './request';
import mockRequests from './mockRequest';

export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method:'get'});

//獲取banner
export const reqGetBannerList =()=>mockRequests.get('/banner');


//三級聯動接口
///api/product/getBaseCategoryList  get  無參數

// export const reqCategoryList = ()=>{
//     //發請求--aixos的發請求return的是promise對象
//     return requests({url:'/product/getBaseCategoryList',method:'get'});
// }