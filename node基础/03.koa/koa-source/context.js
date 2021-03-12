/*
 * @Author: your name
 * @Date: 2021-03-12 14:18:01
 * @LastEditTime: 2021-03-12 14:58:28
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \2020CCsdf\node\node基础\03.koa\koa-source\context.js
 */
module.exports = {
    get url() {
        return this.request.url
    },
    get body() {
        return this.response.body
    },
    set body(val){
        this.response.body = val
    },
    get method() {
        return this.request.method
    }
}