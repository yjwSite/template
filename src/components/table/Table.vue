/**
* 作者 ：食草狂魔
*
* 日期 ：2017/11/14
*
* 描述 ：公共组件 - 表格
*/
<template>
  <el-container class="tableContainer is-vertical">
    <el-row class="toolbar" v-if="options.toolbar&&options.toolbar.length>0">
      <el-col class="toolbarRow" v-for="item in options.toolbar" v-if="item.xtype==='toolbarRow'">
        <div class="toolbarItem" v-for="toolbarItem in item.items" :span="4" :class="toolbarItem.className" :style="toolbarItem.containerStyle">
          <el-input v-if="toolbarItem.xtype==='text'" :placeholder="toolbarItem.defaultText" :ref="toolbarItem.ref" :class="toolbarItem.className" :style="toolbarItem.style" :value="toolbarItem.value"></el-input>
          <el-select v-if="toolbarItem.xtype==='select'" v-model="toolbarItem.valueKey" :value-key="toolbarItem.valueKey" :placeholder="toolbarItem.defaultText" :ref="toolbarItem.ref" :class="toolbarItem.className" :style="toolbarItem.style">
            <el-option
              v-for="item2 in toolbarItem.data"
              :key="item2.value"
              :label="item2.label"
              :value="item2.value">
            </el-option>
          </el-select>
          <el-button :class="toolbarItem.className" :style="toolbarItem.style" v-if="toolbarItem.xtype==='button'&&typeof toolbarItem.onClick==='function'" :type="toolbarItem.buttonType" :ref="toolbarItem.ref" @click="toolbarItem.onClick">{{toolbarItem.buttonText}}</el-button>
          <el-date-picker
            v-if="toolbarItem.xtype==='datepicker'"
            :default-value="toolbarItem.value"
            type="date"
            :placeholder="toolbarItem.defaultText"
            :ref="toolbarItem.ref"
            :class="toolbarItem.className"
            :style="toolbarItem.style"
            v-model="toolbarItem.value">
          </el-date-picker>
          <el-upload
            v-if="toolbarItem.xtype==='upload'"
            :ref="toolbarItem.ref"
            multiple
            :action="toolbarItem.action"
            :file-list="fileList"
            :data="toolbarItem.data"
            :auto-upload="true"
            :on-success="toolbarItem.onSuccess">
            <el-button :type="toolbarItem.buttonType" :class="toolbarItem.className" :style="toolbarItem.style">{{toolbarItem.buttonText}}</el-button>
          </el-upload>
          <el-cascader
            v-if="toolbarItem.xtype==='cascader'"
            expand-trigger="hover"
            :options="toolbarItem.data"
            :ref="toolbarItem.ref"
            :value="toolbarItem.value"
            v-model="toolbarItem.value"
            change-on-select="true">
          </el-cascader>
        </div>
      </el-col>
    </el-row>
    <el-table
      :data="options.data"
      border
      style="width: 100%"
      @selection-change="options.handleSelectionChange"
      header-cell-class-name="myheadclass"
      :size="options.size">
      <el-table-column align="center"
        v-if="options.selection"
        type="selection"
        :width="options.selection.width">
      </el-table-column>
      <el-table-column align="center"
        v-for="item in options.thead"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        :formatter="item.formatter">
      </el-table-column>
      <el-table-column
        :fixed="options.operation.fixed"
        :width="options.operation.width"
        align="center"
        label="操作"
        v-if="options.operation">
        <template slot-scope="scope">
          <el-button v-for="item in options.operation.items" v-if="item.xtype==='button'"
            size="mini"
            @click="item.onClick(scope.$index, scope.row)">{{item.buttonText}}</el-button>
          <el-button v-for="item in options.operation.items" v-if="item.xtype==='link'"
                     type="text"
                     size="mini"
                     :style="item.style"
                     :disabled="item.buttonText==scope.row.disabledBtn"
                     @click="item.onClick(scope.$index, scope.row)">{{item.buttonText}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination v-if="options.pageInfo"
      @size-change="options.pageInfo.handleSizeChange"
      @current-change="options.pageInfo.handleCurrentChange"
      :current-page="options.pageInfo.currentPage"
      :page-sizes="options.pageInfo.pageSizes"
      :page-size="options.pageInfo.pageSize"
      :layout="options.pageInfo.layout"
      :total="options.pageInfo.total"
      :class="options.pageInfo.className"
      class="pagination">
    </el-pagination>
  </el-container>
</template>

<script>
  export default {
    props: ['options'],
    data () {
      return {
        fileList: []
      }
    },
    methods: {
      getRefs (refName) {
        if(this.$refs[refName])
          return this.$refs[refName][0]
        else
          throw new Error(`the control ${refName} is undefined !`)
      }
    }
  }
</script>
<style>
  .tableContainer{
    display: block;
  }
  .tableContainer .toolbar .toolbarItem{
    line-height: 30px;
    margin-bottom: 20px;
    float: left;
  }
  .tableContainer .pagination{
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>
