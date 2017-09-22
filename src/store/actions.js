import * as types from './action-types'
import {getGoodsList, getOrderList} from '@/api/productList'
export default {
  addGood({commit}, product) {
    commit(types.ADD_GOOD, product);
  },
  getGoods({commit}) {
    getGoodsList().then(res => {
      commit(types.GET_GOODS, res.data);
    })
  },
  getOrderBar({commit}) {
    getOrderList().then(res => {
      commit(types.GET_ORDER_BAR, res.data);
    })
  }
}
