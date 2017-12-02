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
    <BreadCrumb :options="breadOptions" class="breadcreamb"></BreadCrumb>
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
  import BreadCrumb from '../../components/breadcrumb/BreadCrumb.vue'
  export default {
    name: 'index',
    components: {
      HeaderBar,
      BreadCrumb
    },
    data () {
      return {
        menuState: 'home',
        breadOptions:{
          bread:[
            {
              label:"一级",
              path:"/"
            },{
              label:"二级",
              path:"/"
            },{
              label:"三级",
              path:"/"
            },{
              label:"四级",
              path:"/"
            }
          ]
        }
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
