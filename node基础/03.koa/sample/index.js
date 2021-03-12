/*
 * @Author: your name
 * @Date: 2021-03-12 10:30:19
 * @LastEditTime: 2021-03-12 11:19:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \2020CCsdf\node\node基础\03.koa\sample\index.js
 */
const koa = require('koa');
const app = new koa();
/**
 * ctx: 上下文，对res,req进行封装和挂载 （使api更加优雅）
 * next: 执行下一个中间件
 */
 app.use(async (ctx,next) =>{
    //执行1
    const start = new Date().getTime(); 
    console.log(`start ${ctx.url}`)
    // 执行下一个中间件
    await next();
    //执行3
    const end = new Date().getTime();
    console.log(`请求时间：${end - start} ms`)
})

// app.use(async (ctx, next) => {
//     //执行2
//     ctx.body = {
//         name: 'bob',
//         age: 12
//     }
//     // 执行下一个中间件
//     await next();
// });
// 静态资源中间件
// 路由中间件
app.use(require('koa-static')(__dirname + '/'));

const router = require('koa-router')();
router.get('/home', async (ctx,next) =>{
   ctx.body ={
     title: 'koa2 json'
   }   
   await next()
})
app.use(router.routes())
app.listen(3000)