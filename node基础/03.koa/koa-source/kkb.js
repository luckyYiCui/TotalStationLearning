/**
 * koa源码封装
 */
const http = require('http');
const request = require('./request');
const response = require('./response');
const context = require('./context');
 
class Koa {
    listen(...args) {
        const server = http.createServer((req,res) => {
            // 创建上下文
            const ctx = this.createContext(req,res);
            this.callback(ctx)

            // 响应
            res.end(ctx.body);
        });
        server.listen(...args)
    }
    use(callback) {
        console.log('callback',callback)
       this.callback = callback;
    }

    /**
     * 构建上下文
     * @param {*} req
     * @param {*} res
     * @returns
     * @memberof Koa
     */
    createContext(req, res) {
        const ctx = Object.create(context);
        
        ctx.response = Object.create(response);
        ctx.request = Object.create(request);
        ctx.req = ctx.request.req = req;
        ctx.res = ctx.response.res = res;
         
        return ctx;
    }
}

module.exports = Koa; 
