/*
 * @Author: your name
 * @Date: 2021-03-11 10:17:11
 * @LastEditTime: 2021-03-11 10:23:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \2020CCsdf\node\node基础\01.运行测试\node_basics\04_steam.js
 */
/**流
 * 读取图片
 * 复制图片
 */
//steam优点： 节省内存
const fs = require("fs");
const rs = fs.createReadStream('./bg.jpg');
const ws = fs.createWriteStream('./01_bg.jpg');
rs.pipe(ws);