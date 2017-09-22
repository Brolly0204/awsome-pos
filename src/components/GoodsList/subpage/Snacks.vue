<template>
  <div class="snacks-list lists">
    <el-row>
      <el-col :span="6" v-for=" (list, n) in lists" :key="list.goodsId">
        <div  @click="addGood(list)">
          <div class="productImg"><img :src="list.goodsImg" alt=""></div>
          <div class="productInfo">
            <span class="title">{{list.goodsName}}</span>
            <span class="price">￥{{list.price}}</span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'snacks-list',
  props: {
    lists: {
      type: Array,
      default: function() {
        return []
      },
    },
    addGood: Function
  },
  data() {
    return {}
  }
}
</script>

<style scoped lang="less">

</style>
