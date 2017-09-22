let express = require('express');
let app = express();

app.listen(3000);

// 跨域设置
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});

// 商品列表数据
const goodsList = require('./goods/goodsList');
app.get('/goods', (req, res) => {
  res.send(goodsList);
});

// 热门商品
const hotProduct = require('./hotProduct');
app.get('/hotproduct', (req, res) => {
  res.send(hotProduct);
});

// 订单
const orderBarList = require('./orderBarList');
app.get('/orderBarList', (req, res) => {
  res.send(orderBarList);
});
