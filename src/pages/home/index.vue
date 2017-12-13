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
      <p>welcome!!</p>
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
      layer.alert('hello world!')
    },
    methods: {

    }
  }
</script>

<style lang="less" scoped>
  @import "home.less";
</style>
