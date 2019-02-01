const qs = require('querystring');
let str = 'uname=tom&upwd=123&type=3';

// 解析一个查询字符串，得到其中不同的部分
let obj = qs.parse(str);
console.log(obj)