//axios二次封裝
import axios from 'axios';
//引入進度條
import nprogress from 'nprogress';
//引入樣式，在node_modules内
import "nprogress/nprogress.css";

//1.利用axios對象的方法create,去創建一個axios實例
const requests = axios.create({
    //配置對象
    //在基礎url后都加上/api
    baseURL:"/api",
    //請求超時的時間
    timeout:5000
});
//請求攔截器，發請求前，攔截器可以檢測它，並處理它

requests.interceptors.request.use((config)=>{
    //config:header請求頭
    nprogress.start();
    return config;
});

//相應攔截器
requests.interceptors.response.use((res)=>{
    //成功的回調函數
    nprogress.done(); 
    return res.data;
},(error)=>{
    returnPromise.reject(new Error('faile'));
});


//對外暴露
export default requests;