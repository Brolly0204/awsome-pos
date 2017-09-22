<template>
  <div id="app">
    <el-row>
      <LeftNav/>
      <router-view></router-view>
    </el-row>
  </div>
</template>

<script>
  import LeftNav from '@/components/LeftNav'

  export default {
    name: 'app',
    components: {
      LeftNav
    }
  }
</script>

<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    .el-row {
      height: 100%;
    }
  }
</style>
