const Koa = require('./kkb');
const app = new Koa();

// app.use((req,res) => {
//    res.writeHead(200);
//     res.end('hi hi hi')
// })
app.use(ctx => {
    console.log(ctx.url)
    ctx.body = 'hello'
})
app.listen(3000, () => {
    console.log("监听端⼝3000");
});