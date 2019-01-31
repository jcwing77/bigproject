const http = require('http');
const express = require('express');
let app = express();
http.createServer(app).listen(8080);

// 在app中挂载路由&路由器
// app.get('/',(req,res)=>{});
app.use('/new',require('./routes/news'));