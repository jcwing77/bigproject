//(function(module,exports,require,__dirname,__filename){
var companyName ='净美仕';
function print() {
    console.log(companyName);
}
// print();
// console.log(window);//undefined
// console.log(global);   //Node.js中的全局对象

// Node.js中的变量都不是全局的！
// console.log(global.companyName);  //undefined
// global.print();//error

   // exports = module.exports = {};
// exports.age =20;
// module.exports.salary =8000;
module.exports = {salary:9000};//生效
exports ={age:30}; //无效

// module.exports = companyName;
// module.exports = print;
module.exports = {
    // cn:companyName,
    // p:print
    // companyName:companyName,
    // print:print
    companyName,
    print
}
// })
