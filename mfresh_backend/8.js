const url = require('url');
let str = 'http://127.0.0.1/user/login?uname=tom&upwd=123#chapter3';
// 解析一个完整的url
// let obj = url.parse(str);
let obj = url.parse(str,true);
console.log(obj);
