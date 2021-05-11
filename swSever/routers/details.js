//引入express模块
const { log } = require("debug");
const express = require("express");

//引入连接池模块
const pool = require("./../pool.js");
const query = require("./query");

//创建路由器对象
const r = express.Router();

//通过id返回详情列表的数据
r.get("/:id", (req, res) => {
  let pid = req.params.id;
  console.log(pid);
  var sql = "select * from sw_products where pid = ?";
  pool.query(sql, [pid], (err, result) => {
    if (err) {
      next(err);
    } else {
      console.log(result);
      res.send({ code: 200, msg: "查找成功", data: result });
    }
  });
});

//导出路由器对象
module.exports = r;
