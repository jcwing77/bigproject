/*
* 使用express中间件
*/
const http = require('http');
const express = require('express');
let  app = express();
http.createServer(app).listen(8080);
let globalReq =null;
/*** 前置中间件：实现非核心功能***/
app.use((req,res,next)=>{
   console.log('非核心功能1:权限检查');
   globalReq = req;
   req.companyName = 'TEDU';
   next();//调用请求——响应循环中的下一个环节
});
app.use((req,res,next)=>{
    console.log('非核心功能2.请求数据的处理');
    console.log(globalReq === req);
    res.set('Cache-Control','no-cache');
    next();
});
/*** 路由——主功能、主业务逻辑*****/
app.get('/user/login',(req,res,next)=>{
 // 非核心功能1.权限检查
 //    非核心功能2.请求数据的处理
    console.log('主业务逻辑：GET 、user/login');
    console.log(globalReq === req);
    console.log(req.companyName);
    res.send('主业务逻辑：GET /user/login');

    // 非核心功能3.记录操作日志
    next();

});
/***** 后置中间件：实现非核心处理 ******/
app.use((req,res,next)=>{
   console.log("非核心功能3.记录操作日志");
    console.log(globalReq === req);
   next();
});

