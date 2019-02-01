// 同步IO和异步IO
console.log('1开始读取文件内容.....');
const fs= require('fs');
// 同步读取
// let  data = fs.readFileSync('./static/login.html');
// console.log('2文件内容读取完成');
// console.log(data.toString());

// 异步读取
fs.readFile('./static/login.html',(err,data)=>{
    console.log('2文件内容读取完成');
console.log(data.toString());
});

// console.log(result);

console.log('3整个脚本执行完毕....');