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
 *pid-产品ID，必需
 *输出结果：
 * {"code":1,"msg":"succ", "productCount":1}
 * 或
 * {"code":400}
 */
router.post('/add',(req,res)=>{

});

/**
 *根据购物车详情记录编号删除该购买记录
 *请求参数：
 did-详情记录编号
 *输出结果：
 * {"code":1,"msg":"succ"}
 * 或
 * {"code":400}
 */
router.post('/delete',(req,res)=>{

});

/**
 *查询指定用户的购物车内容
 *请求参数：
 uid-用户ID，必需
 *输出结果：
 {
    "uid": 1,
    "products":[
      {"pid":1,"title1":"xxx","pic":"xxx","price":1599.00,"count":3},
      {"pid":3,"title1":"xxx","pic":"xxx","price":1599.00,"count":3},
      ...
      {"pid":5,"title1":"xxx","pic":"xxx","price":1599.00,"count":3}
    ]
  }
 */

router.get('/select',(req,res)=>{

});
/**
 *根据购物车详情记录编号修改该商品购买数量
 *请求参数：
 did-详情记录编号
 pid-商品编号
 count-更新后的购买数量
 *输出结果：
 * {"code":1,"msg":"succ"}
 * 或
 * {"code":400}
 */
router.post('/update',(req,res)=>{

});