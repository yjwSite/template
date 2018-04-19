/**
* 作者 ：食草狂魔
*
* 日期 ：2017/11/14
*
* 描述 ：公共组件 - 表格
*        2017/12/18: 可点击列加入；列可自定义icon；
*        2018/03/09: 工具栏加入标签，可写文字可写分隔符'|'
*                    表格显示加入iconLink、iconText、纯iconImage、标签tag列
*                    操作列加入下拉菜单功能
*                    枚举分页栏样式布局
*        2018/03/27: 表格显示加入links列
*                    工具栏加入autocomplete自动提示搜索框
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
          <label
            v-if="toolbarItem.xtype==='label'"
            :ref="toolbarItem.ref"
            :style="toolbarItem.style">
            {{ toolbarItem.text }}
          </label>
          <el-autocomplete
            v-if="toolbarItem.xtype==='autocomplete'"
            v-model="toolbarItem.value"
            :fetch-suggestions="toolbarItem.querySearch"
            :placeholder="toolbarItem.defaultText"
            :trigger-on-focus="toolbarItem.triggerOnFocus"
            :ref="toolbarItem.ref"
            :style="toolbarItem.style"
            @select="toolbarItem.handleSelect"
          ></el-autocomplete>
        </div>
      </el-col>
    </el-row>
    <el-table
      :data="options.data"
      :empty-text="options.emptyText || '暂无数据'"
      :border="options.border || false"
      :style="`width: 100%;${options.tableStyle || ''}`"
      header-cell-class-name="myheadclass"
      :size="options.size"
      :highlight-current-row="options.highlightCurrentRow || false"
      @selection-change="options.handleSelectionChange">
      <el-table-column v-if="options.selection"
                       type="selection"
                       :align="item.align || 'center'"
                       :width="options.selection.width">
      </el-table-column>
      <template v-for="item in options.thead">
        <el-table-column v-if="item.xtype==='iconLink'"
                         :align="item.align || 'center'"
                         :prop="item.prop"
                         :label="item.label"
                         :width="item.width"
                         :sortable="item.sortable"
                         :render-header="item.renderHeader">
          <template slot-scope="scope">
            <a href="javascript:void(0);" @click="item.onClick(scope.$index, scope.row)" :style="item.style">
              <i v-if="item.icon && item.iconType==='front'" :class="item.iconClassName" :style="scope.row[item.iconStyle] || item.iconStyle"></i>
              <span :style="item.textStyle">{{ scope.row[item.prop] }}</span>
              <i v-if="item.icon && item.iconType==='append'" :class="item.iconClassName" :style="scope.row[item.iconStyle] || item.iconStyle"></i>
            </a>
          </template>
        </el-table-column>
        <el-table-column v-else-if="item.xtype==='iconText'"
                         :align="item.align || 'center'"
                         :prop="item.prop"
                         :label="item.label"
                         :width="item.width"
                         :sortable="item.sortable"
                         :render-header="item.renderHeader">
          <template slot-scope="scope">
            <i v-if="item.icon && item.iconType==='front'" :class="item.iconClassName" :style="scope.row[item.iconStyle] || item.iconStyle"></i>
            <span :style="item.textStyle">{{ scope.row[item.prop] }}</span>
            <i v-if="item.icon && item.iconType==='append'" :class="item.iconClassName" :style="scope.row[item.iconStyle] || item.iconStyle"></i>
          </template>
        </el-table-column>
        <el-table-column
          v-else-if="item.xtype==='iconImage' || options.icon"
          :prop="item.prop || ''"
          :width="item.width || options.icon.width"
          :align="item.align || options.icon.align"
          :label="item.label || options.icon.label">
          <template slot-scope="scope">
            <i v-if="item.iconClassName || options.icon.iconClassName" :class="item.iconClassName || options.icon.iconClassName" :style="item.style || options.icon.iconStyle"></i>
            <img v-if="item.iconSrc || options.icon.iconSrc" :src="item.iconSrc || options.icon.iconSrc" :style="item.style || options.icon.iconStyle" />
          </template>
        </el-table-column>
        <el-table-column
          v-else-if="item.xtype==='tag'"
          :fixed="item.fixed"
          :width="item.width"
          :align="item.align || 'center'"
          :label="item.label"
          :prop="item.prop"
          :render-header="item.renderHeader">
          <template slot-scope="scope">
            <el-tag v-for="tag in scope.row[item.prop].split(',')" :key="tag" :type="item.tagType" :class="item.tagClassName" :style="item.tagStyle">
              {{tag}}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          v-else-if="item.xtype==='echarts'"
          :fixed="item.fixed"
          :width="item.width"
          :align="item.align || 'center'"
          :label="item.label"
          :prop="item.prop"
          :render-header="item.renderHeader">
          <template slot-scope="scope">
            <div :id="`tb_echarts_${scope.$index}`" ref="echarts" @click="item.onClick(scope.$index, scope.row)" :style="item.style || 'width: 200px; height: 200px;margin-left: 50%;transform: translate(-50%);'"></div>
          </template>
        </el-table-column>
        <el-table-column
          v-else-if="item.xtype==='links'"
          :fixed="item.fixed"
          :width="item.width"
          :align="item.align || 'center'"
          :label="item.label"
          :prop="item.prop"
          :render-header="item.renderHeader">
          <template slot-scope="scope">
            <a v-for="link in scope.row[item.prop]"  :class="item.linkClassName" :style="item.linkStyle" @click="item.OnClick(link)">
              {{link[item.textProp]}}
            </a>
          </template>
        </el-table-column>
        <el-table-column v-else
                         :align="item.align || 'center'"
                         :type="item.xtype"
                         :prop="item.prop"
                         :label="item.label"
                         :width="item.width"
                         :formatter="item.formatter">
        </el-table-column>
      </template>
      <el-table-column
        :fixed="options.operation.fixed"
        :width="options.operation.width"
        align="center"
        label="操作"
        v-if="options.operation">
        <template slot-scope="scope">
          <template v-for="item in options.operation.items">
            <el-button v-if="item.xtype==='button'"
                       size="mini"
                       :style="item.style"
                       :disabled="item.buttonText==scope.row.disabledBtn"
                       @click="item.onClick(scope.$index, scope.row)">{{item.buttonText}}</el-button>
            <el-button v-if="item.xtype==='link'"
                       type="text"
                       size="mini"
                       :style="item.style"
                       :disabled="item.buttonText==scope.row.disabledBtn"
                       @click="item.onClick(scope.$index, scope.row)">{{item.buttonText}}</el-button>
            <el-dropdown v-if="item.xtype==='menu'"
                         placement="bottom"
                         :trigger="item.trigger"
                         @command="item.handleCommand">
              <span :class="item.className">
                <i v-if="item.iconType==='front'" :class="item.icon"></i>
                {{ item.menuText }}
                <i v-if="item.iconType==='append'" :class="item.icon"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="subMenu in item.items" :command="{ command: subMenu.command, row:scope.row,  i: scope.$index }">{{ subMenu.itemText }}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination v-if="options.pageInfo"
                   class="pagination"
                   :current-page="options.pageInfo.currentPage"
                   :page-sizes="options.pageInfo.pageSizes"
                   :page-size="options.pageInfo.pageSize"
                   :layout="options.pageInfo.layout"
                   :total="options.pageInfo.total"
                   :class="options.pageInfo.className"
                   :prev-text="options.pageInfo.prevText"
                   :next-text="options.pageInfo.nextText"
                   @size-change="options.pageInfo.handleSizeChange"
                   @current-change="options.pageInfo.handleCurrentChange">
      <span class="pageSlot"  v-if="options.pageInfo.slotFromat">
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
  name: 'MTable',
  props: ['options'],
  data () {
    return {
      fileList: []
    }
  },
  methods: {
    getRefs (refName) {
      if (this.$refs[refName]) { return this.$refs[refName][0] } else { throw new Error(`the control ${refName} is undefined !`) }
    }
  }
}
</script>
<style scoped>
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
