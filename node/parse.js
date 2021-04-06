let jsep = require("jsep");
// 给你一把"螺丝刀"——recast
const recast = require("recast");

// 你的"机器"——一段代码
// 我们使用了很奇怪格式的代码，想测试是否能维持代码结构
const code =
  `
  const a = {c: {b: 123}}
  
  `
// 用螺丝刀解析机器
const ast = recast.parse(code);
console.log(ast)

// ast可以处理很巨大的代码文件
// 但我们现在只需要代码块的第一个body，即add函数
const add  = ast.program.body[0]

console.log(add)

jsep.addIdentifierChar("{");
jsep.addIdentifierChar("}");
jsep.addIdentifierChar("@");
let parse_tree = jsep('@{a+a}');
console.log('-----------parse_tree----------------')
console.log(parse_tree)

