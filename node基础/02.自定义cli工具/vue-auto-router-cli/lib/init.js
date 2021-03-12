/*
 * @Author: your name
 * @Date: 2021-03-11 11:19:34
 * @LastEditTime: 2021-03-11 14:21:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \2020CCsdf\node\node基础\02.自定义cli工具\vue-auto-router-cli\lib\init.js
 */
// 打印欢迎页面
const {promisify}  = require('util'); // 生成promise 工具
const figlet = promisify(require('figlet')); // 命令行输出美化工具
const clear = require('clear');  // 清除命令行
const chalk = require('chalk');  // 美化命令行文字颜色
const {clone} = require("./download");
const log = (content) => console.log(chalk.green(content));

module.exports = async name => {
    // 欢迎界面
    clear();
    const data = await figlet('KKB WELCOME');
    log(data);
    await clone('github:su37josephxia/vue-template', name);
    log('安装依赖');
    await spawn(process.platform === "win32" ? "npm.cmd" : "npm", ["install"], { cwd: `./${name}` })
    log(chalk.green('安装依赖成功！'));
    log(`
    👌安装完成：
    To get Start:
    ===========================
        cd ${name}
        npm run serve
    ===========================
                `)
    // 打开
    const open = require('open');
    open('http://localhost:8080');
    await spawn(process.platform === "win32" ? "npm.cmd" : "npm", ['run', 'serve'], { cwd: `./${name}` })
}

// 安装依赖, 对接输出流
const spawn = async (...args) =>{
    const {spawn} = require('child_process');
    return new Promise(resolve => {
        const proc = spawn(...args);
        proc.stdout.pipe(process.stdout);
        proc.stderr.pipe(process.stderr);
        proc.on('close' ,() =>{
            resolve()
        })
    })
}