/**
* 作者 ：食草狂魔
*
* 日期 ：2018/1/9
*
* 描述 ：公共组件 - 数据列表
*/
<template>
  <el-container class="datalistContainer is-vertical">
    <el-row :class="options.containerClassName" :style="options.containerStyle">
      <slot name="datalistItem" :data="item" :options="options" v-for="item in options.data"></slot>
      <slot name="noData" v-if="Array.isArray(options.data)&&options.data.length<1"></slot>
    </el-row>
    <el-pagination v-if="options.pageInfo"
                   @size-change="options.pageInfo.handleSizeChange"
                   @current-change="options.pageInfo.handleCurrentChange"
                   :current-page="options.pageInfo.currentPage"
                   :page-sizes="options.pageInfo.pageSizes"
                   :page-size="options.pageInfo.pageSize"
                   :layout="options.pageInfo.layout"
                   :total="options.pageInfo.total"
                   :class="options.pageInfo.className"
                   :prev-text="options.pageInfo.prevText"
                   :next-text="options.pageInfo.nextText"
                   class="pagination">
      <span class="pageSlot" v-if="options.pageInfo.slotFromat&&options.pageInfo.slotFromat.length>0">
        <template v-for="slotItem in options.pageInfo.slotFromat.split(',')">
          <span class="pageInfo yema" v-if="slotItem==='yema1'">页数：{{options.pageInfo.currentPage}} / {{ Math.ceil(parseInt(options.pageInfo.total) / parseInt(options.pageInfo.pageSize))}}</span>
          <span class="pageInfo pageof" v-if="slotItem==='pageof'">Page {{options.pageInfo.currentPage}} of {{ Math.ceil(parseInt(options.pageInfo.total) / parseInt(options.pageInfo.pageSize))}}</span>
          <span class="pageInfo zonggong" v-if="slotItem==='zonggong'">总共 {{options.pageInfo.total}} 条数据</span>
          <span v-if="slotItem==='space'">&nbsp;</span>
        </template>
      </span>
    </el-pagination>
  </el-container>
</template>
<script>
export default {
  name: 'DataList',
  props: ['options']
}
</script>
<style lang="less" scoped>
  @import "datalist.less";
</style>
