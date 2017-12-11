<template>
  <el-container id="app" class="is-vertical" style="min-height: 900px;">
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
  @import "./assets/stylus/common.styl";

  .containerMain {
    min-width: 1000px;
  }
  .el-container.is-vertical {
    flex-direction: column;
  }
</style>
