import * as types from './action-types'

export default {
    [types.ADD_GOOD](state, product) {
        let {products} = state.orderBarList;
        let isHave = products.filter(item => item.goodsId === product.goodsId);
        if(isHave.length) {
            isHave[0].count++;
        } else {
            product.count = 1;
            products.push(product);
        }
        state.orderBarList.products = [...products];
    },
    [types.GET_GOODS](state, lists) {
        state.productList.products = lists
    },
    [types.GET_ORDER_BAR](state, lists) {
        state.orderBarList = lists;
    },
    [types.CLEAR_ORDER_BAR](state) {
       console.log(state);
       state.orderBarList.products = [];
    }   
}
