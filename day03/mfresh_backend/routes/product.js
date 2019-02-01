/**
 * 与产品相关的路由
 */

const express = require('express');
const pool = require('../pool');

let  router = express.Router();

module.exports = router;

/**
 *根据产品ID返回产品详情
 *请求参数：
 pid-产品ID，必需
 *输出结果：
 {
    "pid": 1,
    "title1":"xxx",
    ...
  }
 */

router.get('/detail',(req,res)=>{
res.send('GET product/detail');
});

/**
 *分页获取产品信息
 *请求参数：
 pageNum-需显示的页号；默认为1
 type-可选，默认为1
 *输出结果：
 {
    totalRecord: 37,
    pageSize: 6,
    pageCount: 7,
    pageNum: 1,
    type: 1,
    data: [{},{} ... {}]
  }
 */

router.get('/select',(req,res)=>{

});