/**
* 作者 ：zn
*
* 日期 ：2017/12/08
*
* 描述 ：公共左侧菜单组件
*/
<template>
  <el-menu>
    <div v-for="item in options.data">
      <MItems :item='item' :indexp="item.value"></MItems>
    </div>
  </el-menu>
</template>
<script>

  import MItems from './LeftBarChild'

  export default {
    name: 'LeftBar',
    props: ["options"],
    components: {
      MItems
    }
  }
</script>
<style>

</style>
