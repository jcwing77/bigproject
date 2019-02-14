/**
 * 与产品相关的路由
 */

const express = require('express');
const pool = require('../pool');

let  router = express.Router();

module.exports = router;



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

    let pageNum = req.query.pageNum;
    if(!pageNum){
        pageNum = 1;
    }else {
        pageNum = parseInt(pageNum);
    }

    let  pager = {// 要输出给客户端分页器对象
        totalRecord: 0,
        pageSize: 6,
        pageCount: 0,
        pageNum,

        data:[]

    };
    let startLoaded = false;//统计信息是否加载完成
    let dataLoaded = false;//页面数据是否加载完成
    // 获取总记录数，计算总页数

      let sql1 = `SELECT COUNT(*) AS c FROM mf_product`;

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
    let sql2 = `SELECT pid,title1,title2,price,pic FROM mf_product
    ORDER BY pid DESC LIMIT ?,?`;
    let start = (pager.pageNum-1)*pager.pageSize;
    let count = pager.pageSize;
    pool.query(sql2,[start,count],(err,result)=>{
        if (err) throw err;
        pager.data =result; //页面中的数据
        dataLoaded = true;//页面数据加载完成
        if(startLoaded){ //判断数据是否加载完成
            res.json(pager);
            // console.log(res.json(pager));
        }
    })
});

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

router.get('/detail/:pid',(req,res)=>{
    // res.send('GET product/detail');
    // /product/detail?pid=5      req.query.pid
    //  /product/detail/5        req.params.pid
    let pid = req.params.pid;
    console.log(pid);
    let sql ="SELECT * FROM mf_product WHERE pid=?";
    pool.query(sql,[pid],(err,result)=>{
        if(err) throw err;
        if(result.length>0){ //根据编号查询到新闻
            res.json(result[0]);
            console.log( res.json(result[0]));
        }else {    //没有查询到任何新闻
            res.json({});
        }
    });
});