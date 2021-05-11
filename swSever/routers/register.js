//引入express模块
const express=require('express');
//引入连接池模块
const pool=require('./../pool.js');
//console.log(pool);
//创建路由器对象
const r=express.Router();
//添加用户注册信息
r.post("/",(req,res)=>{
    //获取请求数据主体
    var obj = req.body;
    console.log(obj)
    //客户端获取的数据,改为数据库对应的属性名
    var sql ="insert into sw_user set ? ";
    pool.query(sql,[obj],(err,result)=>{
        if(err){throw err};
        res.send({code:"200",msg:"用户添加成功"})
    })
})
//根据用户名查询
r.get("/selectUname",(req,res)=>{
    var  userName=req.query.userName;
    var sql = "select * from sw_user where uname=?"
    pool.query(sql,[userName],(err,result)=>{
        if(err) throw err;
        console.log(result)
        if(result.length>0){
            res.send({ok:"0",msg:"用户名已存在"})
        }else{
            res.send({ok:"1",msg:"用户名可使用"})
        }
    });
})

//导出路由器对象
module.exports=r;