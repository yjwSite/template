/**
* 作者 ：sunmeng
*
* 日期 ：2017/11/14
*
* 描述 ：公共面包屑组件
*/
<template>
  <el-breadcrumb class="breadCrumb" separator-class="el-icon-arrow-right">
    <el-breadcrumb-item
      v-for="item in options.bread"
      :to="{path : item.path}"
      :label="item.label">
      {{ item.label }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
  export default {
    name: 'BreadCrumb',
    props: ['options']
  }
</script>

<style scoped>
  @import "breadcrumb.less";
</style>
