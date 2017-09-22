<template>
  <el-col class="pos-order" :span="6">
    <OrderBarList></OrderBarList>
  </el-col>

</template>

<script>
  import { mapActions } from 'vuex'
  import OrderBarList from '@/components/OrderBarList'
  import {getOrderList} from '@/api/productList'
  export default {
    name: 'pos-order',
    beforeMount() {
       this.getOrderBar();
    },
    methods: {
        ...mapActions(['getGoods', 'getOrderBar'])
    },
    components: {
      OrderBarList
    }
  }
</script>

<style scoped lang="less">
  .pos-order {
    height: 100%;
    background-color: #f9fafc;
    border-right: 1px solid #C0CCDA;
  }
</style>
