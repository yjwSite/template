/**
* 作者 ：zn
*
* 日期 ：2017/12/08
*
* 描述 ：公共左侧菜单组件
*/
<template>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <template v-for="item in options.data">
        <el-menu-item v-if = "!item.children"
                      :index = "item.value.toString()">
          <router-link :to="{ path:item.frontUrl }">{{item.label}}</router-link>
        </el-menu-item>
        <el-submenu v-if = "item.children"
                    :index="item.value.toString()">
          <template slot="title">{{item.label}}</template>
          <template v-for="itemChild in item.children">
            <el-menu-item v-if="item.children && !itemChild.children"
                          :index='item.value.toString() + "-" + itemChild.value.toString()'>
              <router-link :to="{ path:itemChild.frontUrl }">{{itemChild.label}}</router-link>
            </el-menu-item>
            <el-submenu v-if="item.children && itemChild.children"
                        :index='item.value.toString() + "-" + itemChild.value.toString()'>
              <template slot="title">{{itemChild.label}}</template>
              <el-menu-item v-for="itemChild2nd in itemChild.children"
                            :index='item.value.toString() + "-" + itemChild.value.toString() + "-" + itemChild2nd.value.toString()'>
                <router-link :to="{ path:itemChild2nd.frontUrl }">{{itemChild2nd.label}}</router-link>
              </el-menu-item>
            </el-submenu>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </el-aside>
</template>
<script>
  export default {
    name: 'LeftBar',
    props: ["options"]
  }
</script>
<style>

</style>
