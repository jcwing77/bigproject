/**
 * 与购物车相关的所有路由（API接口）
 */

const express = require('express');
const pool = require('../pool');

let router = express.Router();

module.exports = router;

/**
 *向购物车中添加商品
 *请求参数：
 *uid-用户ID，必需
 *cpid-产品ID，必需
 *输出结果：
 * {"code":1,"msg":"succ", "productCount":1}
 * 或
 * {"code":400}
 */
router.get('/add',(req,res)=>{
    let userId= req.query.userId;
    let pid= req.query.pid;
    //先查询用户的购物车列表中是否存在添加商品，如存在则执行更新操作，如不存在则执行添加操作
    let sql=`SELECT * FROM mf_cart WHERE userId= ? AND cpid= ?`;

    pool.query(sql,[userId,pid],(err,result)=>{
        if(err) throw err;
        console.log(result);
        if(result.length>0){
            sql=`UPDATE mf_cart SET count=count+1 WHERE userId=? AND cpid=? `;

        }else {
            sql=`INSERT INTO mf_cart VALUES (NULL,?,?,count,is_checked) `;

        }
        pool.query(sql,[userId,pid],(err,result)=>{
            if(err) throw err;
            if(result.affectedRows>0){
                res.send({"code":1,"msg":"succ", "productCount":1});
            }else {
                res.send({"code":400});
            }
        })
    })

});

/**
 *根据购物车详情记录编号删除该购买记录
 *请求参数：
 cid-详情记录编号
 *输出结果：
 * {"code":1,"msg":"succ"}
 * 或
 * {"code":400}
 */
router.get('/delete',(req,res)=>{
let cid=req.query.cid;
let sql=`DELETE FROM mf_cart WHERE cid=? `;
pool.query(sql,[cid],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
       res.send({"code":1,"msg":"succ"}) ;
    }else {
        res.send({"code":400});
    }
})
});

/**
 *查询指定用户的购物车内容
 *请求参数：
 userId-用户ID，必需
 *输出结果：
 {
    "userId": 1,
    "products":[
      {"pid":1,"title1":"xxx","pic":"xxx","price":1599.00,"count":3},
      {"pid":3,"title1":"xxx","pic":"xxx","price":1599.00,"count":3},
      ...
      {"pid":5,"title1":"xxx","pic":"xxx","price":1599.00,"count":3}
    ]
  }
 */

router.get('/select',(req,res)=>{
    let userId=req.query.userId;
    let sql=`SELECT pid,title1,pic,price,count,is_checked FROM mf_cart c,mf_product p WHERE c.cpid=p.pid AND userId=? `;
    pool.query(sql,[userId],(err,result)=>{
        if(err) throw err;
        if(result.length>0){ //根据编号查询到购物车
            res.json(result);

        }else {    //没有查询到任何购物车信息
            res.json({});
        }
    })
});
/**
 *根据购物车详情记录编号修改该商品购买数量
 *请求参数：
 cid-详情记录编号
 pid-商品编号
 count-更新后的购买数量
 *输出结果：
 * {"code":1,"msg":"succ"}
 * 或
 * {"code":400}
 */
router.get('/update',(req,res)=>{
    let cid=req.query.cid;
    let pid= req.query.pid;
    let count= req.query.count;
    let sql=`UPDATE mf_cart SET count=? WHERE cid=? AND cpid=? `;
    pool.query(sql,[count,cid,pid],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send({"code":1,"msg":"succ"}) ;
        }else {
            res.send({"code":400});
        }
    })
});