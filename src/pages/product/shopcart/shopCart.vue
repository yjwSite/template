/**
* 作者 ：食草狂魔
*
* 日期 ：2018/3/15
*
* 描述 ：shopCart
*/
<template>
  <el-main>
    购物车
    <MTable :options="tableOptions" ref="myTable"></MTable>
  </el-main>
</template>
<script>
// js文件小驼峰
import shopCartService from './service/shopCartService'

// Vue组件大驼峰
import MTable from '@/components/table/Table.vue'

export default {
  name: 'shopCart',
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
  mounted: function () {
    let vm = this
    let vuex = vm.$store.state.productStore.shopCartStore

    vm.initTable(vuex.shopCartList)
  },
  methods: {
    initTable (dataList) {
      let vm = this

      // 清空购物车
      let removeAllFun = () => {
        vm.$store.dispatch('productStore/shopCartStore/removeShopCart', { shopCartList: [] })
        vm.tableOptions.data = []
        vm.$message.success('清空购物车成功！')
      }

      // 移除
      let rowDeleteFun = (i, row) => {
        vm.tableOptions.data.splice(i, 1)
        vm.$store.dispatch('productStore/shopCartStore/removeShopCart', { shopCartList: vm.tableOptions.data })
        vm.$message.success('移除成功！')
      }

      // 选中行事件
      let handleSelectionChangeFun = (rows) => {
        alert(`您选中了${rows.length}行`)
      }

      vm.tableOptions = shopCartService({
        dataList: dataList
      }).getTableOptions({
        removeAllFun: removeAllFun,
        rowDeleteFun: rowDeleteFun,
        handleSelectionChangeFun: handleSelectionChangeFun
      })
    }
  }
}
</script>
<style lang="less" scoped>
</style>
