import {get} from './index'

// 获取热门商品  本地接口（/api/hotproduct）
const hotUrl = "http://jspang.com/DemoApi/oftenGoods.php";
export const getHotProduct = () => get(hotUrl);

// 获取所有商品  本地接口（/api/goods）
const goodsUrl = "http://jspang.com/DemoApi/typeGoods.php";
export const getGoodsList = () => get(goodsUrl);

// 获取订单商品
const OrderListUrl = "/api/orderBarList";
export const getOrderList = () => get(OrderListUrl); 
