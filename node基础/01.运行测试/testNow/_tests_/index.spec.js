/*
import { path } from 'path';
 * @Author: your name
 * @Date: 2021-03-09 10:58:19
 * @LastEditTime: 2021-03-09 15:31:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \2020CCsdf\node\node基础\01.运行测试\testNow\_tests_\index.spec.js
 */
const fs = require('fs');

test('集成测试 测试生成测试代码文件',() => {
    // 准备环境
    // 删除测试文件夹
    // fs.rmdirSync(__dirname + "/data/tests",{
    //     recursive: true
    // });
    const src = new(require('../index'));
    src.getJestSource(__dirname + '/data');
})

// test('测试测试代码生成',() =>{
//     const src = new(require("../index"));
//     const ret = src.getTestSource('fun', 'class');
//     console.log('ret', ret);
//     expect(ret)
//        .toBe(`test('TESTfun',() =>{
// const fun = require("../class");
// const ret = fun();
// expect(ret)
// .toBe('test ret');
// })`);
// });


// test('测试文件名生成',() =>{
//     const test = new(require("../index"));
//     const ret = test.getTestFileName('/abc/class.js');
//     expect(ret)
//        .toBe('/abc/_test_/class.spec.js');
// })