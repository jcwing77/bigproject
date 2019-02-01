/**
 * 与用户相关的API
 */
const express = require('express');
const pool = require('../pool');

let router = express.Router();
module.exports = router;


/**
 *验证电话号码是否已经存在
 *请求参数：
 phone-用户名
 *输出结果：
 * {"code":1,"msg":"exist"}
 * 或
 * {"code":2,"msg":"non-exist"}
 */
router.get('/check/phone/',(req,res)=>{

    let phone = req.query.phone;
   let sql =  `SELECT * FROM mf_user WHERE phone=?`;
   pool.query(sql,[phone],(err,result)=>{
      if(err) throw err;
     if (result.length >0){
        res.send({"code":1,"msg":"exist"});
     } else {
        res.send({"code":2,"msg":"non-exist"});
     }
   });

});

/**
 *验证用户名是否已经存在
 *请求参数：
 uname-用户名
 *输出结果：
 * {"code":1,"msg":"exist"}  存在
 * 或
 * {"code":2,"msg":"non-exist"}  不存在
 */
router.get('/check/uname',(req,res)=>{
    let uname = req.query.uname;
    let sql =  `SELECT * FROM mf_user WHERE uname=?`;
    pool.query(sql,[uname],(err,result)=>{
        if(err) throw err;
        if (result.length >0){
            res.send({"code":1,"msg":"exist"});
        } else {
            res.send({"code":2,"msg":"non-exist"});
        }
    });

});
/**
 *用户登录验证
 *请求参数：
 unameOrPhone-用户名或密码
 upwd-密码
 *输出结果：
 * {"code":1,"uid":1,"uname":"test","phone":"13012345678"}
 * 或
 * {"code":400}
 */
router.get('/login',(req,res)=>{
    let unameOrPhone = req.query.unameOrPhone;
    let sql =  `SELECT uid,uname,phone FROM mf_user WHERE (uname=? AND upwd=?) OR (phone=? AND upwd=?)`;
    pool.query(sql,[phone],(err,result)=>{
        if(err) throw err;
        if (result.length >0){
            res.send({"code":1,"msg":"exist"});
        } else {
            res.send({"code":2,"msg":"non-exist"});
        }
    });

});
/**
 *注册新用户
 *请求参数：
 uname-用户名
 upwd-密码
 phone-电话号码
 *输出结果：
 * {"code":1,"uid":3,"uname":"test"}
 * 或
 * {"code":500}
 */
router.post('/register',(req,res)=>{
   res.send('Post /user/register....');
});