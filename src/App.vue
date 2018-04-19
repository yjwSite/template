<template>
  <el-container id="app" class="containerMain is-vertical">
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
    min-width: 1190px;
  }
  .el-container.is-vertical {
    flex-direction: column;
  }
</style>
