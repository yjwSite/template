/**
* 作者 ：zn
*
* 日期 ：2017/12/08
*
* 描述 ：公共左侧菜单递归子组件
*/
<template>
  <el-menu-item v-if="!item.children"
                :index="indexp + '-' + item.value.toString()">
    <router-link :to="{ path:item.frontUrl }">{{item.label}}</router-link>
  </el-menu-item>
  <el-submenu v-else="!item.children"
              :index="indexp + '-' + item.value.toString()">
    <template slot="title">
      <router-link :to="{ path:item.frontUrl}">
        {{item.label}}
      </router-link>
    </template>
    <template v-for="itemChild in item.children">
      <items :item="itemChild" :indexp="indexp + '-' + item.value.toString()"></items>
    </template>
  </el-submenu>

</template>
<script>
  export default {
    name: 'items',
    props: ["item", "indexp"]
  }
</script>
