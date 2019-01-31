const  http = require('http');
const express = require('express');
// let  app = function (req,res) {
//     console.log('服务器接收到一个客户端的请求');
//     //解析请求消息
//     // 输出响应消息
// }

let app = express();
http.createServer(app).listen(8080);
// app.listen(8080);