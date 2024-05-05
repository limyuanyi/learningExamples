//先引入mockjs模塊
import Mock from'mockjs';
//引入JSON數據[JSON數據格式沒有對外暴露，但是可以引入]
//webpack:默認對外暴露的:圖片，JSON數據格式
import banner from'./banner.json';
import floor from './floor.json';

//mock數據(參數請求地址，請求數據)
Mock.mock("/mock/banner",{code:200,data:banner});
Mock.mock("/mock/floor",{code:200,data:floor});