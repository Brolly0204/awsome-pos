<template>
<el-col class="product-container" :span="18">
  <HotProduct :hotProducts="hotProducts" :addGood="addGoods" />
  <GoodsList :productList="productList" v-if="productList.products.length" />
</el-col>
</template>

<script>
import GoodsList from '@/components/GoodsList/GoodsList.vue'
import HotProduct from '@/components/HotProduct'
import {
  getHotProduct,
  getGoodsList
} from '@/api/productList'
import {
  mapActions,
  mapState
} from 'vuex';

export default {
  name: 'productList',
  components: {
    GoodsList,
    HotProduct
  },
  methods: {
    addGoods(good) {
      this.addGood(good);
    },
    ...mapActions(['addGood', 'getGoods'])
  },
  computed: {
    ...mapState(['productList'])
  },
  beforeMount() {

    // 热门商品
    getHotProduct().then(res => {
      this.hotProducts = res.data;
    });

    // 所有商品
    this.getGoods();
  },
  data() {
    return {
      hotProducts: [],
      goodsList: {}
    }
  }
}
</script>

<style scoped lang="less">
.product-container {
    height: 100%;
}
</style>
