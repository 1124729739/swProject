//引入express模块
const express = require("express");
//引入连接池模块
const pool = require("./../pool.js");
const query = require("./query");
//console.log(pool);
//创建路由器对象
const r = express.Router();

// 初始化类别页面
r.get("/", (req, res) => {
  let obj = {
    category1: undefined,
    category2: undefined,
  };
  // 获取一级列表的所有类名和id
  let sql = "select category_name,cid from sw_category1 ";
  pool.query(sql, (err, result) => {
    if (err) throw err;
    obj.category1 = result;
    // 获取初始化二级列表数据
    let sql = "select * from sw_category2 where first_table_id=1";
    pool.query(sql, (err, result) => {
      if (err) throw err;
      obj.category2 = result;
      res.send(obj);
    });
  });
});

//根据一级列表id去查找对应的二级类别
r.get("/towTable", (req, res) => {
  let firstId = req.query.firstId;
  console.log(firstId);
  let sql = `select * from sw_category2 where first_table_id=${firstId}`;
  pool.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

//导出路由器对象
module.exports = r;
