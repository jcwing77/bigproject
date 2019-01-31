const http = require('http');
const express = require('express');

let app = express();

http.createServer(app).listen(8080);

// 定义路由 = 方法 + 地址+处理
app.get('/user/login', (req, res) => {
    // res.writeHead + write +end
    res.send('<h3>登录成功！</h3>')
});

app.post('/user/register', (req, res) => {

});

app.get('/user/select', (req, res) => {
    let data = [{
            nid: 101,
            title: '新闻标题1'
        },
        {
            nid: 102,
            title: '新闻标题2'
        },
        {
            nid: 103,
            title: '新闻标题3'
        },
    ];
    // res.writeHead +write(JSON.stringify)+end
    res.json(data);

});

app.get('/user/detail', (req, res) => {

});
app.get('/index', (req, res) => {
    // res.writeHead +write(fs.readFile)+end
    res.sendFile('./static/mfresh_index.html');
});