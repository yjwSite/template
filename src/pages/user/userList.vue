/**
* 作者 ：食草狂魔
*
* 日期 ：2018/3/27
*
* 描述 ：用户列表页
*/
<template>
  <el-main>
    <MTable :options="tableOptions" ref="myTable"></MTable>
  </el-main>
</template>
<script>
// js文件小驼峰
import testAPIs from '../../api/test/testAPIs'
import userListService from './service/userListService'

// Vue组件大驼峰
import MTable from '@/components/table/Table.vue'

export default {
  name: 'userList',
  components: {
    MTable
  },
  data () {
    return {
      tableOptions: {
        handleSelectionChange (rows) {
        },
        toolbar: []
      }
    }
  },
  mounted: async function () {
    let vm = this
    let pageNo = 1
    let pageSize = 10
    let total = 400

    let { data } = await testAPIs.test({})
    vm.initTable(data.result, pageNo, pageSize, total)
  },
  methods: {
    initTable (dataList, pageNo, pageSize, total) {
      //        console.log(dataList)
      let vm = this

      // 查询
      let searchFun = async () => {
        let keyword = vm.$refs.myTable.getRefs('keyword').$refs.input.value
        let {data} = await testAPIs.test({
          keyword: keyword,
          pageNo: vm.tableOptions.pageInfo.currentPage = 1,
          pageSize: vm.tableOptions.pageInfo.pageSize
        })
        vm.tableOptions.data = data.result
      }

      // 改变pageSize事件
      let handleSizeChangeFun = async (val) => {
        vm.tableOptions.pageInfo.pageSize = val
        let {data} = await testAPIs.test({
          pageNo: vm.tableOptions.pageInfo.currentPage,
          pageSize: vm.tableOptions.pageInfo.pageSize
        })
        vm.tableOptions.data = data.result
      }

      // 改变currentPage事件
      let handleCurrentChangeFun = async (val) => {
        vm.tableOptions.pageInfo.currentPage = val
        let {data} = await testAPIs.test({
          pageNo: vm.tableOptions.pageInfo.currentPage,
          pageSize: vm.tableOptions.pageInfo.pageSize
        })
        vm.tableOptions.data = data.result
      }

      // 选中行事件
      let handleSelectionChangeFun = (rows) => {
        alert(`您选中了${rows.length}行`)
      }

      // 提示框接口
      let queryStringFun = async (queryString, cb) => {
        let { data } = await testAPIs.test({ queryString: queryString })
        // ...此处二次组织cb回调函数的数据结构
        let datalist = userListService().getQueryStringData(data.result)
        cb(datalist)
      }

      // 提示框选择事件
      let handleSelectFun = () => {
        alert('handleSelect')
      }

      vm.tableOptions = userListService({
        dataList: dataList,
        pageNo: pageNo,
        pageSize: pageSize,
        total: total
      }).getTableOptions({
        searchFun: searchFun,
        handleSizeChangeFun: handleSizeChangeFun,
        handleCurrentChangeFun: handleCurrentChangeFun,
        handleSelectionChangeFun: handleSelectionChangeFun,
        queryStringFun,
        handleSelectFun
      })
    }
  }
}
</script>
<style lang="less" scoped>
</style>
