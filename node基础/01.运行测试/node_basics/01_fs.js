/*
 * @Author: your name
 * @Date: 2021-03-10 15:55:41
 * @LastEditTime: 2021-03-10 16:39:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \2020CCsdf\node\node基础\01.运行测试\node_basics\01.index.js
 */
const fs = require("fs");
// 1.同步读取
const data = fs.readFileSync('./config.js');
console.log('data',data.toString());

// 2.异步读取文件
fs.readFile('./config.js',(err, data1) =>{
    if(err) throw err;
    console.log('data1',data1) 
});

// 3.promisify
const { promisify } = require("util");
// promisify包装过后返回 promise
const readfile = promisify(fs.readFile);
// process.nextTick 与 settimeout 区别：process.nextTick回调可以捕获err
process.nextTick(async () =>{
    const data2 = await readfile('./config.js');
    console.log('data2', data2)
})

// 
const fsp = require("fs").promises;
fsp.readFile("./confs.js")
  .then(data=>console.log(data))  
  .catch(err=>console.log(err));

// 5.async / await
(async() =>{
    const readfile = promisify(fs.readFile);
    const data4 = await readfile('./config.js');
    console.log('data4',data4)
})()