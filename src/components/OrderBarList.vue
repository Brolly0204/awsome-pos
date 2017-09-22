<template>
<el-tabs v-model="orderBarList.activeName" class="order-bar-list" @tab-click="handleClick">
  <el-tab-pane label="点餐" name="first">
    <el-table :data="orderBarList.products" border>
      <el-table-column prop="goodsName" label="商品"></el-table-column>
      <el-table-column prop="count" label="数量"></el-table-column>
      <el-table-column prop="price" label="价格(元)"></el-table-column>
      <el-table-column prop="setting" label="操作" width="100%" fixed="right">
        <template scope="scope">
            <el-button type="text" size="small" @click="remove(scope)">删除</el-button>
            <el-button type="text" size="small" @click="addGood(scope.row)">增加</el-button>
          </template>
      </el-table-column>
    </el-table>
    <div class="total-bar">
      <span class="count">数量: {{count}}</span>
      <span class="total">总金额: {{total}}元</span>
    </div>
    <div class="pos-btn">
      <el-button type="warning">挂单</el-button>
      <el-button type="danger" @click="clear()">删除</el-button>
      <el-button type="success" @click="checkout">结账</el-button>
    </div>
  </el-tab-pane>
  <el-tab-pane label="挂单">
    挂单
  </el-tab-pane>
  <el-tab-pane label="外卖">
    外卖
  </el-tab-pane>
</el-tabs>
</template>

<script>
import {
  mapState,
  mapActions,
  mapMutations
} from 'vuex';
import * as types from '@/store/action-types'
export default {
  name: 'order-bar-list',
  computed: {
    ...mapState(['orderBarList']),
    count() {
      let {
        products
      } = this.orderBarList;
      let count = 0;
      products.forEach(item => count += item.count);
      return count;
    },
    total() {
      let {
        products
      } = this.orderBarList;
      let price = 0;
      products.forEach(item => price += (item.price * item.count));
      return price;
    }
  },
  methods: {
    ...mapMutations([types.CLEAR_ORDER_BAR]),
    remove({
      $index,
      row
    }) {
      this.orderBarList.products = this.orderBarList.products.filter(item => item.goodsId != row.goodsId);
    },
    handleClick(tab, event) {
      //        console.log(tab, event);
    },
    clear() { // 删除订单
      if(this.orderBarList.products.length === 0) return;
      let flag = this.$confirm('确定清空该订单商品?', '删除提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this[types.CLEAR_ORDER_BAR]();
        this.$message({
          type: 'success',
          message: '删除成功'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })

    },
    ...mapActions(['addGood']),
    checkout() {
      if(this.orderBarList.products.length === 0) return;
      this.$confirm(`总共${this.total}元，确认要结账？`, '结账提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this[types.CLEAR_ORDER_BAR]();
        this.$message({
          type: 'success',
          message: `结账成功 ，你好棒！又成交了美美的一单~~`
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消结账'
        })
      });
    }
  }
}
</script>

<style scoped lang="less">
.order-bar-list {
    .total-bar {
        height: 49px;
        line-height: 49px;
        border-bottom: 1px solid rgba(128, 128, 128, 0.25);
        display: flex;
        justify-content: space-around;
    }
    .pos-btn {
        margin-top: 10px;
    }
}
</style>
