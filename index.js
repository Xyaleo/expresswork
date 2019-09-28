var express = require('express');
var app = express();
var bodyparser = require('body-parser');        //引入中间件body-parser
app.use(bodyparser.urlencoded({extende:true}));
app.use(bodyparser.json())
app.use(express.static('./public'))             //express自带中间件，打开静态文件
app.post('/postData',function (req,res) {           //路由
    var result = req.body
    res.send(JSON.stringify(result));
})
app.listen(3000)