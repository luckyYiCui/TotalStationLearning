/*
 * @Author: your name
 * @Date: 2021-03-09 15:49:43
 * @LastEditTime: 2021-03-10 09:25:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \2020CCsdf\node\node基础\01.运行测试\serival\_tests_\index.js
 * 异步编程测试
 */
// test('callback',done => { 
//     const { callback } = require("../index");  
//    callback() 
//     setTimeout(done, 1000);
// });


// test('promise callback',done => { 
//     const { promise } = require("../index");   
//     promise()
//     setTimeout(done, 1000);
// });

// test('gennerator callback',done => { 
//     const { generator } = require("../index");   
//     generator()
//     setTimeout(done, 1000);
// });

test('asyncAwait callback',done => { 
    const { asyncAwait } = require("../index");   
    asyncAwait()
    setTimeout(done, 1000);
});
