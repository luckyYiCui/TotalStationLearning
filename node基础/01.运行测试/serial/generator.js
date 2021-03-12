/*
 * @Author: your name
 * @Date: 2021-03-09 17:04:38
 * @LastEditTime: 2021-03-09 17:09:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \2020CCsdf\node\node基础\01.运行测试\serial\generator.js
 * 
 * generator 用法
 */
function* func() {
    console.log('func1');
    yield '1';
    console.log('func2');
    yield '1';
    console.log('func3');
    yield '1'
}

const f = func();
// rest.next()
// rest.next()
// rest.next()

// 迭代器
for(const [key,value] of f){
    console.log(`${key}: ${value}`)
}