/**
* 作者 ：食草狂魔
*
* 日期 ：2017/12/20
*
* 描述 ：产品列表页
*/
<template>
  <el-main>
    <MTable :options="tableOptions" ref="myTable"></MTable>
  </el-main>
</template>
<script>
  import testAPIs from '../../api/testAPIs'
  import productListService from './service/productListService'
  import MTable from '../../components/table/Table.vue'

  export default {
    name: 'productList',
    components: {
      MTable
    },
    data() {
      return {
        tableOptions: {
          handleSelectionChange (rows) {
          },
          toolbar: []
        }
      }
    },
    mounted: async function () {
      let vm = this,
        pageNo = 1,
        pageSize = 10,
        total = 400;

      let { data } = await testAPIs.test({})
      vm.initTable(data.result, pageNo, pageSize, total)

    },
    methods: {
      initTable(dataList, pageNo, pageSize, total) {
        console.log(dataList)
        let vm = this

        // 查询
        let searchFun = async () => {
          let keyword = vm.$refs.myTable.getRefs("keyword").$refs.input.value
          let { data } = await testAPIs.test({ keyword: keyword, pageNo: vm.tableOptions.pageInfo.currentPage, pageSize: vm.tableOptions.pageInfo.pageSize })
          vm.initTable(data.result, vm.tableOptions.pageInfo.currentPage, vm.tableOptions.pageInfo.pageSize, total)
        }

        // 行编辑
        let rowEditFun = (i, row) => {
          alert(`我要编辑${JSON.stringify(row)}`)
        }

        // 行删除
        let rowDeleteFun = (i, row) => {
          alert(`我要删除${JSON.stringify(row)}`)
        }

        // 行重置密码
        let resetPwdFun = (i, row) => {
          vm.$router.push({path: "/systemManage/userManage/editPassword"})
        }

        // 改变pageSize事件
        let handleSizeChangeFun = async (val) => {
          vm.tableOptions.pageInfo.pageSize = val
          let { data } = await testAPIs.test({ pageNo: vm.tableOptions.pageInfo.currentPage, pageSize: vm.tableOptions.pageInfo.pageSize })
          vm.initTable(data.result, vm.tableOptions.pageInfo.currentPage, vm.tableOptions.pageInfo.pageSize, total)
        }

        // 改变currentPage事件
        let handleCurrentChangeFun = async (val) => {
          vm.tableOptions.pageInfo.currentPage = val
          let { data } = await testAPIs.test({ pageNo: vm.tableOptions.pageInfo.currentPage, pageSize: vm.tableOptions.pageInfo.pageSize })
          vm.initTable(data.result, vm.tableOptions.pageInfo.currentPage, vm.tableOptions.pageInfo.pageSize, total)
        }

        // 新建用户
        let createUserFun = () => {
          alert(`新建用户`)
        }

        // 选中行事件
        let handleSelectionChangeFun = (rows) => {
          alert(`您选中了${rows.length}行`)
        }

        vm.tableOptions = productListService({
          dataList: dataList,
          pageNo: pageNo,
          pageSize: pageSize,
          total: total
        }).getTableOptions({
          searchFun: searchFun,
          rowEditFun: rowEditFun,
          rowDeleteFun: rowDeleteFun,
          resetPwdFun: resetPwdFun,
          handleSizeChangeFun: handleSizeChangeFun,
          handleCurrentChangeFun: handleCurrentChangeFun,
          createUserFun: createUserFun,
          handleSelectionChangeFun: handleSelectionChangeFun
        })
      }
    }
  }
</script>
<style>
</style>
