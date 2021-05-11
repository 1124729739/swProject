//引入express模块
const express=require('express');
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require("express-session");
const cors=require("cors");
const history = require('connect-history-api-fallback');


//创建web服务器
const app=express();
//设置端口
app.listen(3000);
// 处理跨域
app.use(cors({
  origin:['http://localhost:8080',"http://127.0.0.1:5500"],
  credentials:true
}));
//引入body-parser模块
const bodyParser=require('body-parser');
//使用body-parser将所有流传递的数据解析为对象
app.use( bodyParser.urlencoded({
  extended:false
}) );

//引入用户注册路由器
const registerRouter = require('./routers/register.js');
//引入用户登录路由器
const loginRouter= require('./routers/login.js');
//引入商品类别路由器
const productCategoryRouter= require("./routers/productCategory.js");
//引入商品路由
const getProduct = require("./routers/getProduct.js");
//引入当前类别商品列表路由
const currentListProduct = require("./routers/currentListProduct");
//引入商品详情路由
const details = require("./routers/details");

//挂载用户路由器到web服务器下,添加前缀/sw/users
app.use('/sw/register',registerRouter);
app.use('/sw/login',loginRouter);
app.use('/sw/prc',productCategoryRouter);
app.use('/sw/getProduct',getProduct);
app.use('/sw/productList',currentListProduct);
app.use('/sw/details',details);

//错误处理中间件
//要拦截的URL为空，表示拦截所有的
app.use((err,req,res,next)=>{
  //err 产生的错误
  console.log(err);
  //响应500、服务器端错误
  res.send({code:500,msg:'服务器端错误'});
  
});
