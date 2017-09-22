<template>
<div id="goodsList">
  <el-tabs>
    <el-tab-pane label="汉堡">
      <Humburgers :lists="goodsList.humburgers" :addGood="addGood"></Humburgers>
    </el-tab-pane>
    <el-tab-pane label="小食">
      <Snacks :lists="goodsList.snacks" :addGood="addGood"></Snacks>
    </el-tab-pane>
    <el-tab-pane label="饮料">
      <Drinks :lists="goodsList.drinks" :addGood="addGood"></Drinks>
    </el-tab-pane>
    <el-tab-pane label="套餐">
      <Packages :lists="goodsList.packages" :addGood="addGood"></Packages>
    </el-tab-pane>
  </el-tabs>
</div>
</template>

<script>
import Humburgers from './subpage/Humburgers.vue'
import Drinks from './subpage/Drinks.vue'
import Packages from './subpage/Packages.vue'
import Snacks from './subpage/Snacks.vue'
import {
  mapActions
} from 'vuex'
export default {
  name: 'cookieList',
  props: {
    productList: {
      type: Object,
      defalut: () => {
        return {
          products: []
        }
      }
    }
  },
  methods: {
    ...mapActions(['addGood'])
  },
  computed: {
    goodsList() {
      let [humburgers, snacks, drinks, packages] = this.productList.products;
      return {
        humburgers,
        snacks,
        drinks,
        packages
      };
    }
  },
  components: {
    Humburgers,
    Drinks,
    Packages,
    Snacks
  }
}
</script>

<style  lang="less">
@import "index.less";
</style>
