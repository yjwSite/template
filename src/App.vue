<template>
  <el-container id="app" class="is-vertical" style="height:1200px;">
    <router-view/>
  </el-container>
</template>

<script>
  export default {
    name: 'app',
    components: {
    }
  }
</script>

<style>
  @import "./assets/less/common.less";

  .containerMain {
    min-width: 1000px;
  }
  .el-container.is-vertical {
    flex-direction: column;
  }
</style>
