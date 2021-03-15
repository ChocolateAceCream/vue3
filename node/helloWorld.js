const Koa = require('koa')
console.log(require.main === module)
// console.log(module)
console.log(require.main.filename)

const app = new Koa()

app.use(async ctx => {
  ctx.body = 'hello world'
})

app.listen(3000)