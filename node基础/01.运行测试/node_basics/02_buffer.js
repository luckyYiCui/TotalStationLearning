/*
 * @Author: your name
 * @Date: 2021-03-10 16:39:39
 * @LastEditTime: 2021-03-10 16:44:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \2020CCsdf\node\node基础\01.运行测试\node_basics\02_buffer.js
 */
// 存储二进制文件
const buf1 = Buffer.alloc(10);
console.log('buf1', buf1);

const buf2 = Buffer.from('a' );
console.log('buf2', buf2);

const buf3 = Buffer.from('中文');
console.log('buf3', buf3)

const buf4 = Buffer.concat([buf2,buf3]);
console.log('buf4',buf4,buf4.toString());
