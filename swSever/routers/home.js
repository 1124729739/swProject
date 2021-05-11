//引入express模块
const express=require('express');
//引入连接池模块
const pool=require('./../pool.js');
//console.log(pool);
//创建路由器对象
const r=express.Router();
//轮播图
r.get("/banner",(req,res)=>{
    //执行SQL命令，将数据插入到数据库
    var sql = "select * from  yg_index_carousel";
    pool.query(sql,(err,result)=>{
        if (err) throw err;
        res.send(result)
    })
})
//畅销爆款
r.get("/salable",(req,res)=>{
    //执行SQL命令，将数据插入到数据库
    var sql = "select * from  yg_index_commodity where workshopId=1";
    pool.query(sql,(err,result)=>{
        if (err) throw err;
        res.send(result)
    })
})


//导出路由器对象
module.exports=r;