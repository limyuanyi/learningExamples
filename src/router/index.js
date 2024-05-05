import Vue from 'vue'
import VueRouter from 'vue-router'
//使用插件
Vue.use(VueRouter);

//引入路由組件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

//備份
let originPush=VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

//重寫
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        originPush.call(this,location,resolve,reject);
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}
 
VueRouter.prototype.replace = function(location,resole,reject){
    if(resole && reject){
        originReplace.call(this,location,resole,reject);
    }else{
        originReplace.call(this,location,resole,reject)
    }
}

//配置路由
export default new VueRouter({
    routes:[
        {
            path:"/home",
            component:Home,
            meta:{show:true}
        }
        ,
        {
            path:"/search/:keyword?",
            component:Search,
            meta:{show:true},
            name:"search",
            //布爾值寫法
            //props:true
            props:($route)=>{
                return {keyword:$route.params.keyword,k:$route.query.k};
            }
        }
        ,
        {    path:"/login",
            component:Login,
            meta:{show:false}
        }
        ,
        {
            path:"/Register",
            component:Register,
            meta:{show:false}
        }
        ,
        //重定向
        {
            path:'*',
            redirect:"/Home",
            meta:{show:true}
        }
    ]
})