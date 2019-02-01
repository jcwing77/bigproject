//根据客户端请求的不同，输出不同的响应消息

const  http = require('http');
const url =require('url');
const qs = require('querystring');
const mysql = require();

http.createServer((req,res)=>{
console.log("接收到一个客户端请求。。。。");
    // 解析请求消息
    let method = req.method;
    let  urlObj = url.parse(req.url,true);
    let headers = req.headers;
    // console.log(method);
    // console.log(urlObj);
    // console.log(headers);

    // 输出响应消息
    let path =urlObj.pathname;//纯请求地址
    if(method === 'GET'&&path==='/user/login'){
         res.writeHead(200,{});
         // 读取GET请求提交的数据：追加url查询字符串
        let n = urlObj.query.uname;
        let p = urlObj.query.upwd;
         res.end('GET /user/login....');
    }else if(method==='POST'&&path==='/user/register'){
        res.writeHead(200,{});
        //读取post请求主体中的数据：可能很大且可能是二进制
        req.on('data',(buf)=>{
            console.log(buf.toString());
            let obj= qs.parse(buf.toString());
            let n = obj.uname;
            let p = obj.upwd;
            // console.log(p);
            // console.log(n);
            res.end('GET /user/register....'+n +p);
        });

    }else if(method==='GET'&&path==='/news/select'){
        res.writeHead(200,{});
        res.end('GET /user/select....');
    }else if (method==='GET'&&path==='/news/detail'){
        res.writeHead(200,{});
        res.end('GET /user/detail....');
    } else {
        res.writeHead(404,{});
        res.end(method+' '+path+':NOT FOUND....');
    }

}).listen(8080);