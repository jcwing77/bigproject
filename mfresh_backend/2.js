// (function (module,exports,require,__dirname,__filename) {
// 使用另一个模块对象中的数据
var obj1= require('./1.js');
console.log(obj1);
//print();
var obj2= require('./1.js');
// console.log(obj2);
console.log(obj2===obj1);//true
var obj3= require('./1.js');
// console.log(obj3);
console.log(obj3===obj1);//true

// })