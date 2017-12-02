<template>
  <el-container id="app" class="is-vertical" style="min-height: 900px;">
    <router-view/>
    <FooterBar></FooterBar>
  </el-container>
</template>

<script>
  import FooterBar from './components/footer/Footer.vue'
  export default {
    name: 'app',
    components: {
      FooterBar
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
