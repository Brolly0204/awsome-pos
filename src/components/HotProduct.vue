<template>
  <div class="product-context">
    <h3 class="product-title">热门商品</h3>
    <div class="product-list">
      <el-row>
        <el-col :span="6" v-for="(product, n) in hotProducts" v-bind:key="product.goodsId" >
          <div  @click="addGood(product)">
          <el-tag
            :type="product.type"
            :closable="false"
           
          >
            <span>{{product.goodsName}}</span>
            <span>￥{{product.price}}元</span>
          </el-tag>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'hotProduct',
      props: {
        hotProducts: {
          type: Array,
          default: () => {
            return []
          }
        },
        addGood: Function
      }
    }
</script>

<style scoped lang="less">
  .product-context {
    .product-title {
      text-align: left;
      padding-left: 20px;
      background-color: #f9fafc;
      height: 41px;
      line-height: 41px;
      border-bottom: 1px solid #C0CCDA;
    }
    .product-list {
      padding: 10px;
      .el-col {
        cursor: pointer;
        margin: 5px 0;
        .el-tag {
          height: 35px;
          line-height: 35px;
        }
      }
    }
  }
</style>
