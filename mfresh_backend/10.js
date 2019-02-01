// http模块的基本使用
const  http = require('http');
let  port = 8080;
let server = http.createServer();

server.listen(port,()=>{
  console.log('Node Web Server listen....' +port);
});

// 监听"客户端请求到来"事件  on 来自eventEmitter
server.on('request',(req,res)=>{
    console.log('Server Receiving a request.....');
    // req:完整的请求消息对象
    
    // res：空白的响应消息对象 writeHead +write +end
    res.writeHead(200,{
        'Server':'jc-code',
        'Content-Type':'text/html;charset=UTF-8',
        'Cache-Control':'no-cache'

    });//响应消息起始行、头部
    res.write('<h3>Welcome</h3>');
    res.write('<h3>...</h3>');//输出响应消息主体
    res.end();//终止响应消息
});