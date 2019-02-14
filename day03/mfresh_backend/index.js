/*
项目入口文件
 */
const  http = require('http');
const express = require('express');


// 服务器
let port = 8080;
let app = express();
http.createServer(app).listen(port,()=>{
    console.log('Server listening PORT '+port);
});

// 中间件
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
app.use(bodyParser.urlencoded({
    extended:false
}));//请求主体被封装到req.body属性中
app.use(cookieParser());//请求头部中的cookie被封装到req.cookie属性中
app.use(cors({
    origin:'*',//控制响应头Access-Control-Allow-Origin
    credentials:true //控制响应头Access-Control-Allow-Credentials
}));//设置需要的响应消息头部，以允许客户端的跨域请求
// 路由&路由器
app.use('/news',require('./routes/news'));
app.use('/product',require('./routes/product'));
app.use('/user',require('./routes/user'));
app.use('/cart',require('./routes/cart'));


