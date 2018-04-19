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
// js文件小驼峰
import testAPIs from '../../api/test/testAPIs'
import productListService from './service/productListService'

// Vue组件大驼峰
import MTable from '@/components/table/Table.vue'

export default {
  name: 'productList',
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
      let vuex = vm.$store.state.productStore.shopCartStore

      // 查询
      let searchFun = async () => {
        let keyword = vm.$refs.myTable.getRefs('keyword').$refs.input.value
        let { data } = await testAPIs.test({ keyword: keyword, pageNo: vm.tableOptions.pageInfo.currentPage = 1, pageSize: vm.tableOptions.pageInfo.pageSize })
        vm.tableOptions.data = data.result
      }

      // 加入购物车
      let addCartFun = (i, row) => {
        vuex.shopCartList.push(row)
        vm.$store.dispatch('productStore/shopCartStore/addShopCart', { shopCartList: vuex.shopCartList })
        vm.$message.success('加入购物车成功！')
      }

      // 行删除
      let rowDeleteFun = (i, row) => {
        alert(`我要删除${JSON.stringify(row)}`)
      }

      // 行重置密码
      let resetPwdFun = (i, row) => {
        alert(`行重置密码${JSON.stringify(row)}`)
      }

      // 改变pageSize事件
      let handleSizeChangeFun = async (val) => {
        vm.tableOptions.pageInfo.pageSize = val
        let { data } = await testAPIs.test({ pageNo: vm.tableOptions.pageInfo.currentPage, pageSize: vm.tableOptions.pageInfo.pageSize })
        vm.tableOptions.data = data.result
      }

      // 改变currentPage事件
      let handleCurrentChangeFun = async (val) => {
        vm.tableOptions.pageInfo.currentPage = val
        let { data } = await testAPIs.test({ pageNo: vm.tableOptions.pageInfo.currentPage, pageSize: vm.tableOptions.pageInfo.pageSize })
        vm.tableOptions.data = data.result
      }

      // 去购物车
      let toShopCartFun = () => {
        vm.$router.push({ path: '/product/shopcart' })
      }

      // 选中行事件
      let handleSelectionChangeFun = (rows) => {
        alert(`您选中了${rows.length}行`)
      }

      let formatter = (row, column, cellValue) => {
        // jsx
        let contentStr = <div>
          <span>1</span>
          <span>|</span>
          <span>2</span>
          <span>人</span>
        </div>

        return contentStr
      }

      // 提示框接口
      let queryStringFun = async (queryString, cb) => {
        let { data } = await testAPIs.test({ queryString: queryString })
        // ...此处二次组织cb回调函数的数据结构
        let datalist = productListService().getQueryStringData(data.result)
        cb(datalist)
      }

      // 提示框选择事件
      let handleSelectFun = () => {
        alert('handleSelect')
      }

      vm.tableOptions = productListService({
        dataList: dataList,
        pageNo: pageNo,
        pageSize: pageSize,
        total: total
      }).getTableOptions({
        searchFun: searchFun,
        addCartFun: addCartFun,
        rowDeleteFun: rowDeleteFun,
        resetPwdFun: resetPwdFun,
        handleSizeChangeFun: handleSizeChangeFun,
        handleCurrentChangeFun: handleCurrentChangeFun,
        toShopCartFun: toShopCartFun,
        handleSelectionChangeFun: handleSelectionChangeFun,
        formatter: formatter,
        queryStringFun,
        handleSelectFun
      })
    }
  }
}
</script>
<style lang="less" scoped>
  @import "product.less";
</style>
