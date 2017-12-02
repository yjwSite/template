/**
* 作者 ：食草狂魔
*
* 日期 ：2017/11/14
*
* 描述 ：首页
*/
<template>
  <el-container class="is-vertical">
    <HeaderBar :menuState="menuState"></HeaderBar>
    <el-main>
      <!--<Welcome></Welcome>-->
      <!--<MenuCount :menuCountData="menuCountData" style="margin-top: 20px;"></MenuCount>-->
      <!--<ModuleBar :title="moduleBarTitle" style="margin-top: 20px;"></ModuleBar>-->
      <!--<QuickEntry style="margin-top: 20px;"></QuickEntry>-->
    </el-main>
  </el-container>
</template>
<script>
  import HeaderBar from '../../components/header/Header.vue'
  export default {
    name: 'index',
    components: {
      HeaderBar
    },
    data () {
      return {
        menuState: 'home'
      }
    },
    mounted () {
    },
    methods: {

    }
  }
</script>

<style>
</style>
