/**
* 作者 ：sunmeng
*
* 日期 ：2017/12/11
*
* 描述 ：公共组件 - 导航菜单
*/
<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo NavBar" mode="horizontal">
    <template v-for="item in options.data">
      <el-menu-item :index="item.value" v-if="!item.children" @click="item.onClick(item)">{{ item.label }}</el-menu-item>
      <el-submenu :index="item.value" v-if="item.children">
        <template slot="title">{{ item.label }}</template>
        <template v-for="itemChild in item.children">
          <el-menu-item :index="itemChild.value" @click="itemChild.onClick(item)">{{ itemChild.label }}</el-menu-item>
        </template>
      </el-submenu>
    </template>
  </el-menu>
</template>
<script>
  export default {
    name: 'NavBar',
    props:['options'],
    data(){
      return {
        activeIndex:"1"
      }
    }
  }
</script>
<style>
</style>
