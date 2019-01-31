const http = require('http');
const express = require('express');
let app = express();
http.createServer(app).listen(8080);

// 在app中挂载路由&路由器
// app.get('/',(req,res)=>{});
app.use('/news',require('./routes/news'));
app.use('/user',require('./routes/user'));
app.use('/product',require('./routes/product'));
app.use('/cart',require('./routes/cart'));