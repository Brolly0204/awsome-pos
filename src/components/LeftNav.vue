<template>
  <el-col class="leftNav" :span="2">
    <ul class="nav-container">
      <li><i class="iconfont icon-shouyin"></i><span>收银</span></li>
      <li><i class="iconfont icon-dianpu"></i><span>店铺</span></li>
      <li><i class="iconfont icon-goods"></i><span>商品</span></li>
      <li><i class="iconfont icon-huiyuan"></i><span>会员</span></li>
      <li><i class="iconfont icon-tongji"></i><span>统计</span></li>
      <li><i class="el-icon-setting"></i><span>设置</span></li>
    </ul>
  </el-col>
</template>

<script>
  export default {}
</script>

<style scoped lang="less">
  .leftNav {
    height: 100%;
    background-color: #eef1f6;
    .nav-container {
      cursor: pointer;
      padding-top: 20px;
      li {
        height: 50px;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        padding: 5px 0;
        i {
          font-size: 20px;
        }

        &:hover {
          background-color: #E1E7F5;
        }
      }
    }
  }
</style>
