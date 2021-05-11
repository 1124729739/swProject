//引入express模块
const express = require("express");

//引入连接池模块
const pool = require("./../pool.js");
const query = require("./query");

//创建路由器对象
const r = express.Router();

//获取商品列表
//http://127.0.0.1:3030/sw/getProducts?cid=1&count=5
r.get("/", (req, res) => {
  //获取查询字符串传递的数据
  var { cid, count } = req.query;
  //判断是否为空，如果为空设置默认值
  if (!cid) {
    cid = 1;
  }
  if (!obj.count) {
    count = 0;
  }

  //计算开始查询的值
  //行SQL命令，将数据插入到数据库
  var sql = "select title,image,price from sw_Products limit ,?";
  pool.query(sql, [uname, upwd], (err, result) => {
    if (result.length > 0) {
      res.send({ message: "ok", code: 200, result: result[0] });
    } else {
      res.send({ message: "login failed", code: 201 });
    }
  });
});

//导出路由器对象
module.exports = r;
