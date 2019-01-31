/*
* 使用express中间件
*/
const http = require('http');
const express = require('express');
let  app = express();
http.createServer(app).listen(8080);
let globalReq =null;
/*** 前置中间件：实现非核心功能***/
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extends:false //不适用扩展的解释模块
}));//调用中间件：
// 处理application/x-www-from-urlencoded类型的请求主体数据

//调用中间件：解析请求消息中的cookie头部，封装入req。cookies属性中
const  cookieParser = require('cookie-parser');
app.use(cookieParser());

/*** 路由——主功能、主业务逻辑*****/
app.post('/user/register',(req,res)=>{
 // 非核心功能1.权限检查
 //    非核心功能2.请求数据的处理
    console.log(req.body);
    console.log(req.cookies);
    res.send('主业务逻辑：POST /user/register');




});
/***** 后置中间件：实现非核心处理 ******/
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/static/mfresh_index.html');
});

