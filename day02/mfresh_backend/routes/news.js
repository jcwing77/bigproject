/** 
*与新闻相关的所有路由（API接口）
*/
const express = require('express');
const pool = require('../pool');

let router =  express.Router();

module.exports = router;

/**
 *按发布时间逆序返回新闻列表
 *请求参数：
 *pageNum-需显示的页号；默认为1
 *输出结果：
 *{
 *  totalRecord: 58,
 *  pageSize: 10,
 *  pageCount: 6,
 *  pageNum: 1,
 *  data: [{},{} ... {}]
 *}
 */

router.get('/select',(req,res)=>{
   res.send('GET/news/select....');
});


/**
 *根据新闻ID返回新闻详情
 *请求参数：
 *nid-新闻ID，必需
 *输出结果：
 *{
 *  "nid": 1,
 *  ...
 *}
 */

router.get('/detail',(req,res)=>{
   res.send('GET/news/detail...');
});


