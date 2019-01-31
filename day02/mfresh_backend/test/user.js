const  pool = require('../pool');

// 测试用户登录--查询一行记录
(function () {
    let  n= 'admin';
    let p = '123456';
    let sql= `select * from mf_user where uname=? and upwd =?`;
    pool.query(sql,[n,p],(err,result)=>{
       if(err) throw err;
        // console.log(result);// [{}]
    });

})();

// 测试用户列表——查询多行记录
(function () {

    let sql= `select * from mf_user `;
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);// [{}]
    });

})();

// 测试用户注册——添加一行记录
(function () {
    let n = 'king';
    let p ='456789';
    let h='13591111111';
    let sql= `insert into mf_user values(null,?,?,?)`;
    pool.query(sql,[n,p,h],(err,result)=>{
        if(err) throw err;
        console.log(result);// { affectedRows: 1,insertId: 3}
    });

})();