/*
import { fs } from 'fs';
 * @Author: your name
 * @Date: 2021-03-10 17:03:06
 * @LastEditTime: 2021-03-11 10:39:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \2020CCsdf\node\node基础\01.运行测试\node_basics\03_http.js
 */
const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    const {url,method,headers} = req; 
    if(url === '/' && method === 'GET') {
        // 异步方式读取，否做每个人请求都会堵塞这
        fs.readFile('./index.html',(err, data) =>{
            if(err) {
                // res.statusCode = 500;
                res.writeHead(500, {'Content-type': 'text/plain;charset=utf-8'});
                res.end('500 服务器错误')
                return
            }
            res.statusCode = 200;
            res.setHeader('Content-type', 'text/html');
            res.end(data)
        })
    } else if(url === '/users' && method === 'GET') {
        res.writeHead(200, {'Content-type':'application/json'});
        res.end(JSON.stringify({name:'tom', age: 12}))
    } else if(method === 'GET' && headers.accept.indexOf('image/*') !== -1){
        console.log('url',url)
        // 如果图片比较大，则需要缓冲区去缓存，如流
        fs.createReadStream('.'+url).pipe(res)
    }
}).listen(3000)

// 打印原型链
function getPrototypeChain(obj) {
    var protoChain= [];
    while (obj=Object.getPrototypeOf(obj)) {
        //返回给定对象的原型。如果没有继承属性，则返回 null 。
        protoChain.push(obj);
    }
    protoChain.push(null);
    return protoChain;    
}