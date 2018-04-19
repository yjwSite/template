/**
* 作者 ：食草狂魔
*
* 日期 ：2017/11/15
*
* 描述 ：表格组件用法
*/
<template>
  <el-container>
    <el-main>
      <MTable :options="tableOptions" ref="myTable"></MTable>
    </el-main>
  </el-container>
</template>
<script>
import axios from '../../plugins/axios'
import MTable from '../../components/table/Table.vue'
export default {
  name: 'index',
  components: {
    MTable
  },
  data () {
    let vm = this
      return {
      tableOptions: {
        handleSelectionChange (rows) {
        }
      }
    }
  },
  mounted () {
    let vm = this,
      pageNo = 1,
      pageSize = 10,
      total = 400,
      dataList = []

      axios.get(`/portalInterface/goods/category`).then(res => {
      let { data } = res
      dataList = data.result
      vm.initTable(dataList, pageNo, pageSize, total)
    })
  },
  methods: {
    initTable (dataList, pageNo, pageSize, total) {
      let vm = this
      vm.tableOptions = {
        thead: [{
          prop: 'categoryId', // 数据的key值
          label: '分类ID', // 显示的标题
          width: '180' // 列宽
        }, {
          prop: 'categoryName', // 数据的key值
          label: '分类名称', // 显示的标题
          width: '180' // 列宽
        }],
        operation: {
          fixed: 'rihgt', // 操作列固定，如果不需要固定，此项不用写
          width: 150, // 操作列宽度，如果不需要，此项不用写
          items: [{
            xtype: 'link', // linkButton
            buttonType: 'danger', // 按钮样式
            buttonText: '删除',
            onClick (i, row) {
              alert(`我要删除${JSON.stringify(row)}`)
            }
          }, {
            xtype: 'button', // commonButton
            buttonType: 'danger', // 按钮样式
            buttonText: '导出',
            onClick (i, row) {
              alert(`我要导出${JSON.stringify(row)}`)
            }
          }, {
            xtype: 'button',
            buttonType: 'danger', // 按钮样式
            buttonText: '提交审核',
            onClick (i, row) {
              alert(`我要提交审核${JSON.stringify(row)}`)
            }
          }, {
            xtype: 'button',
            buttonType: 'primary', // 按钮样式
            buttonText: '查看',
            onClick (i, row) {
              alert(`我要查看${JSON.stringify(row)}`)
            }
          }]
        },
        data: dataList,
        pageInfo: {
          currentPage: pageNo,
          pageSizes: [1, 2, 3, 4],
          pageSize: pageSize,
          layout: 'total, sizes, prev, pager, next, jumper',
          total: total,
          handleSizeChange (val) {
            vm.changePageSize(val)
          },
          handleCurrentChange (val) {
            vm.loadMore(val)
          }
        },
        selection: {
          width: 55
        },
        toolbar: [{
          xtype: 'toolbarRow',
          items: [{
            xtype: 'text',
            defaultText: '信息资源名称',
            ref: 'srcName'
          }, {
            xtype: 'text',
            defaultText: '信息资源代码',
            ref: 'srcCode'
          }, {
            xtype: 'select',
            defaultText: '提供方',
            ref: 'select1',
            data: [{
              id: '1',
              label: '提供方1',
              value: '提供方1'
            }, {
              id: '2',
              label: '提供方2',
              value: '提供方2'
            }, {
              id: '3',
              label: '提供方3',
              value: '提供方3'
            }],
            valueKey: ''
          }, {
            xtype: 'select',
            defaultText: '资源状态',
            ref: 'select2',
            data: [{
              id: '1',
              label: '资源状态1',
              value: '资源状态1'
            }, {
              id: '2',
              label: '资源状态2',
              value: '资源状态2'
            }, {
              id: '3',
              label: '资源状态3',
              value: '资源状态3'
            }],
            valueKey: ''
          }, {
            xtype: 'text',
            defaultText: '创建时间',
            ref: 'createTime'
          }, {
            xtype: 'button',
            buttonType: 'primary', // 按钮样式
            buttonText: '查询',
            onClick () {
              console.log(vm.$refs.myTable.getRefs('srcName').$refs.input.value)
              console.log(vm.$refs.myTable.getRefs('srcCode').$refs.input.value)
              console.log(vm.$refs.myTable.getRefs('select1').value)
            }
          }]
        }, {
          xtype: 'toolbarRow',
          items: [{
            xtype: 'button',
            buttonType: 'primary', // 按钮样式
            buttonText: '添加',
            onClick () {
              alert(`我要添加`)
            }
          }, {
            xtype: 'button',
            buttonType: 'primary', // 按钮样式
            buttonText: '导入',
            onClick () {
              alert(`我要导入`)
            }
          }]
        }],
        handleSelectionChange (rows) {
          console.log(rows)
        }
      }
    },
    loadMore (currentPage) {
      alert(`handleCurrentChange: ${currentPage}`)

      let vm = this
      let pageNo = 1
      let pageSize = 10
      let total = 400
      let dataList = [{
        date: '2016-05-02',
        name: '王小虎5',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎6',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎7',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎8',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
      vm.initTable(dataList, pageNo, pageSize, total)
    },
    changePageSize (pageSize) {
      alert(`handleSizeChange: ${pageSize}`)
    }
  }
}
</script>

<style>
</style>
