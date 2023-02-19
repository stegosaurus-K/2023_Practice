// post_param请求
const express = require("express");
const app = express();
const path = require("path");
// 引入解析请求体的中间件

// public相当于http://localhost:3000/
app.use(express.static(path.resolve(__dirname, "public")));
// 配置静态资源的路径
app.use(express.urlencoded())


app.get("/login", (req,res) => {
  if (req.query.username === "admin" && req.query.password === "123123") {
    res.send("<h1>欢迎回来！</h1>")
  } else {
    res.send("<h1>用户名或密码错误！</h1>")
  }
})


app.post("/login", (req, res) => {
  console.log(req.body)
  res.send("<h1>post请求已收到！</h1>")
})


app.listen(3000, () => {
  console.log("服务器启动了！")
})