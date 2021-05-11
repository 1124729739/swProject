//引入express模块
const { log } = require("debug");
const express = require("express");

//引入连接池模块
const pool = require("./../pool.js");
const query = require("./query");

//创建路由器对象
const r = express.Router();
//获取商品列表
//http://127.0.0.1:3030/sw/productList?cname=中文小说&offset="0";
r.get("/", (req, res, next) => {
  //获取查询字符串传递的数据
  let { cname, offset } = req.query;
  console.log(cname, offset);
  //判断是否为空，如果为空设置默认
  let start = offset * 20;
  let end = start + 20;
  //行SQL命令，将数据插入到数据库
  var sql =
    "select title,image,price,pid,author from sw_products where three_table_name=? limit ?,?";
  pool.query(sql, [cname, start, end], (err, result) => {
    if (err) {
      next(err);
    } else {
      //查询到的是数据，直接将数组放入到响应的对象
      res.send({ code: 200, msg: "查找成功", data: result });
    }
  });
});

//导出路由器对象
module.exports = r;
