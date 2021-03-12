/*
 * @Author: your name
 * @Date: 2021-03-11 15:22:30
 * @LastEditTime: 2021-03-11 17:55:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \2020CCsdf\node\node基础\02.自定义cli工具\vue-auto-router-cli\lib\refresh.js
 */
const fs = require('fs')
const handlebars = require('handlebars')
const chalk = require('chalk')
module.exports = async () => {
    // 获取页面列表
    const list =
        fs.readdirSync('./src/views')
            .filter(v => v !== 'Home.vue')
            .map(v => ({
                name: v.replace('.vue', '').toLowerCase(),
                file: v
            }));
    
    console.log('list',list);
    compile({
        list
    }, './src/router.js', './template/router.js.hbs')

    // 生成菜单
    compile({
        list
    }, './src/App.vue', './template/App.vue.hbs')

    /**
     * 
     * @param {*} meta 
     * @param {*} filePath 
     * @param {*} templatePath 
     */
    function compile(meta, filePath, templatePath) { 
        if (fs.existsSync(templatePath)) { 
            const content = fs.readFileSync(templatePath).toString()
            const reslut = handlebars.compile(content)(meta);
            console.log('result',reslut)
            fs.writeFileSync(filePath, reslut)
        }
        console.log(chalk.red(`🚀${filePath} 创建成功`))
    }
}