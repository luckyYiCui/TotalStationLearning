/*
 * @Author: your name
 * @Date: 2021-03-10 11:17:17
 * @LastEditTime: 2021-03-10 14:38:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \2020CCsdf\node\node基础\01.运行测试\catche\index.js
 */

function updateTime() {
    this.timmer = this.timmer || setInterval(() => this.time = new Date().toUTCString(), 5000);
    return this.time
}

const http = require('http');
http.createServer((req,res) => {
    const {url} = req;
    if(url === '/') {
        res.end(`
           <html>
              HTML Update Time ${updateTime()}
              <script src="main.js"></script>
           </html>
        `)
    } else if(url === '/main.js') {
        const content = `document.write('<br>update time: ${updateTime()}')`;
        // 强缓存
        // res.setHeader('Expires', new Date(Date.now() + 10 * 1000).toUTCString())
        // res.setHeader('Cache-control','max-age=20'); // 20s 过期

        // 协商缓存
        // res.setHeader('Cache-control','no-cache'); //不使用强缓存
        // res.setHeader('last-modified', new Date().toUTCString());  //最后一次更新时间
        // // new Date(req.headers['if-modified-since'] 将最后一次更新的时间自动配置在 if-modified-since 中
        // if (new Date(req.headers['if-modified-since']).getTime() + 3 * 1000 > Date.now()) {  //3s后过期
        //     console.log('协商缓存命中....')
        //     res.statusCode = 304
        //     res.end()
        //     return
        // }

        res.setHeader('Cache-control','no-cache');
        const crypto = require('crypto');
        const hash = crypto.createHash('sha1').update(content).digest('hex');
        res.setHeader('Etag', hash);
        if(req.headers['if-none-match'] === hash) {
            console.log('Etag协商缓存命中....')
            res.statusCode = 304;
            res.end();
            return
        }

        res.statusCode = 200;
        res.end(content);
    } else if(req.path == '/favicon.ico') {
        res.statusCode = 200;
        res.end('')
    }
}).listen(8080, () =>{
    console.log('http cache test run at' + 8080)
});
