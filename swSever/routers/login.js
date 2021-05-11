//引入express模块
const express=require('express');

//引入连接池模块
const pool=require('./../pool.js');
const query=require("./query");

//创建路由器对象
const r=express.Router();

//查询用户信息
r.get("/",(req,res)=>{
    //获取路由传参的数据
    var {uname,upwd} = req.query;
    //行SQL命令，将数据插入到数据库
    var sql = "  select * from sw_user where uname=? and upwd=?";
    pool.query(sql,[uname,upwd],(err,result)=>{
        console.log(result);
        if(result.length>0){
            res.send({message:'ok',code:200,result:result[0]});
        }else{
            res.send({message:'login failed',code:201});
        }
    })
})



//导出路由器对象
module.exports=r;