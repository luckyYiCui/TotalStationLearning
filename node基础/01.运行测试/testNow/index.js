/*
import { path } from 'path';
 * @Author: your name
 * @Date: 2021-03-09 10:38:05
 * @LastEditTime: 2021-03-09 15:38:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \2020CCsdf\node\node基础\01.运行测试\testNow\index.js
 */
const path = require('path');
const fs = require('fs');

module.exports = class TestNow{
    /**
     * 生成spec文件入口
     * @param {*} sourcePath  需要生成的文件夹目录
     */
    getJestSource(sourcePath = path.resolve('./')) {
        console.log('sourcePath',sourcePath)
        const testPath = `${sourcePath}/_tests_`;
        // 文件件是否有文件
        if(!fs.existsSync(testPath)) {
            fs.mkdirSync(testPath)
        }
        // 遍历文件
        let list = fs.readdirSync(sourcePath);
        console.log('list',list)
        list
           .map(v => `${sourcePath}/${v}`)  // 添加完整路径
           .filter(v => fs.statSync(v).isFile())  // 过滤所有文件夹
           .filter(v => v.indexOf('.spec') === -1) // 排除测试代码
           .map(v => this.getTestFile(v));  // 生成代码文件
    }
     /**
     * 生成文件getTestFile
     * @param {*} filename  
     */
    getTestFile(filename) {
        console.log('filename', filename)
        const testFileName = this.getTestFileName(filename);
        console.log('testFileName',testFileName)
        // 判断文件是否存在
        if(fs.existsSync(testFileName)) {
            console.log('该测试代码已存在', testFileName);
            return
        }
        const mod = require(filename);
        let source;
        if(typeof mod === 'object') {
            source = Object.keys(mod)
                .map(v => this.getTestSource(v,path.basename(filename),true))
                .join('\n')
        } else if(typeof mod ==='function'){
            const basename = path.basename(filename);
            source = this.getTestSource(basename.replace('.js',''), basename)
        }
        fs.writeFileSync(testFileName, source)
        console.log('source',source)
    }

    /**
     * 生成代码文件
     * @param {*} methodName 方法名成
     * @param {*} classFile 文件路径
     * @param {*} isClass 是否导出是class
     */
    getTestSource(methodName, classFile, isClass = false) {
        return `test('${'TEST'+methodName}',() =>{
const ${ isClass?'{' + methodName +'}':methodName } = require("${"../" + classFile }");
const ret = ${methodName}();
expect(ret)
.toBe('test ret');
})`
    }

    /**  getTestFileName  生成文件名方法
    * @param {*} filename 代码文件
    */
    getTestFileName(filename) {
        const dirName = path.dirname(filename);
        const baseName = path.basename(filename);
        const extName = path.extname(filename);
        const testName = baseName.replace(extName,`.spec${extName}`); 
        // format组装
        return path.format({
            root: dirName + '/_tests_/',
            base: testName
        });
    }
}