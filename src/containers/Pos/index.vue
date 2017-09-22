<template>
  <el-col class="pos" :span="22">
    <el-row>
      <!-- 订单栏 -->
      <order-bar></order-bar>
      <!-- 商品列表 -->
      <ProductList />
    </el-row>
  </el-col>
</template>

<script>
  import OrderBar from './subpage/OrderBar'
  import ProductList from './subpage/ProductList'
  export default {
    name: 'pos',
    components: {
      OrderBar,
      ProductList
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .pos {
    height: 100%;
  }
</style>
