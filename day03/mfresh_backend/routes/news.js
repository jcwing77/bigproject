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
    //news/select
   //news/select?pageNum=3
    let pageNum = req.query.pageNum;
    if(!pageNum){
       pageNum = 1;
    }else {
       pageNum = parseInt(pageNum);
    }

   let  pager = {// 要输出给客户端分页器对象
       totalRecord: 0,
       pageSize: 5,
       pageCount: 0,
       pageNum,
       data:[]

   };
    let startLoaded = false;//统计信息是否加载完成
    let dataLoaded = false;//页面数据是否加载完成
    // 获取总记录数，计算总页数
    let sql1 = `SELECT COUNT(*) AS c FROM mf_news `;
    pool.query(sql1,(err,result)=>{
       if (err) throw err;
       pager.totalRecord = result[0].c;//总记录数
        pager.pageCount = Math.ceil((pager.totalRecord/pager.pageSize));//总页数
   startLoaded = true;//分页数据加载完成
   if(dataLoaded){//判断页面数据是否加载完成
      res.json(pager);
   }
    });
    // 获取指定页面中的数据
    let sql2 = `SELECT nid,title,pubTime FROM mf_news
    ORDER BY pubTime DESC LIMIT ?,?`;
    let start = (pager.pageNum-1)*pager.pageSize;
    let count = pager.pageSize;
    pool.query(sql2,[start,count],(err,result)=>{
       if (err) throw err;
       pager.data =result; //页面中的数据
        dataLoaded = true;//页面数据加载完成
        if(startLoaded){ //判断数据是否加载完成
           res.json(pager);
        }
    })

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

router.get('/detail/:nid',(req,res)=>{
   // /news/detail?nid=5      req.query.nid
    //  /news/detail/5        req.params.nid
    let nid = req.params.nid;
    let sql ="SELECT * FROM mf_news WHERE nid=?";
    pool.query(sql,[nid],(err,result)=>{
       if(err) throw err;
       if(result.length>0){ //根据编号查询到新闻
          res.json(result[0]);
       }else {    //没有查询到任何新闻
          res.json({});
       }
    });

});


