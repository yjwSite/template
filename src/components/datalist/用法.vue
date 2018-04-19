/**
* 作者 ：食草狂魔
*
* 日期 ：2018/3/8
*
* 描述 ：用法
*/
<template>
  <el-main class="appContainer">
    <el-row class="gray">
      <MDataList :options="datalistOptions" class="container" style="margin-bottom: 15px;">
        <div slot="datalistItem" slot-scope="props" class="dataBox">
          <router-link :to="{path:`/front/appMarket/details?actId=2&detailId=${props.data.id}`}" target="_blank">
            <div class="dataItemBox">
              <div class="imageBox">
                <img style="width: 60px;height: 60px" :src="props.data.iconId || 'static/images/serviceIcon2.png'">
              </div>
              <p class="title" :title="props.data.appName.length>8?props.data.appName:''">{{props.data.appName.substring(0,8)}}</p>
              <p class="remark">{{props.data.introduction.length>49?props.data.introduction.substring(0,49)+'...':props.data.introduction}}</p>
            </div>
          </router-link>
        </div>
        <div slot="noData" class="noData"></div>
      </MDataList>
    </el-row>
  </el-main>
</template>
<script>
import MDataList from '@/components/datalist/DataList.vue'
export default {
  name: 'appMarket',
  components: {
    MDataList
  },
  data () {
    return {
      datalistOptions: {}
    }
  },
  mounted: async function () {
    let vm = this,
      pageNo = 1,
      pageSize = 15

      /*
      let [tagList, dataList] = await Promise.all([
        labelsAPIs.labels({ type: 'appLabel', pageSize: 19, pageNumber: 1 }),
        appsAPIs.apps({ appType: 0, isUsed: 1, pageSize: pageSize, pageNumber: pageNo})
      ])
      vm.initDataList(dataList.data.result.datas, pageNo, pageSize, parseInt(dataList.data.result.total))
      */
  },
  methods: {
    initDataList (dataList, pageNo, pageSize, total) {
      let vm = this

      // 改变pageSize事件
      let handleSizeChangeFun = async (val) => {
        vm.datalistOptions.pageInfo.pageSize = val
      }

      // 改变currentPage事件
      let handleCurrentChangeFun = async (val) => {
        vm.datalistOptions.pageInfo.currentPage = val

        let keyword = vm.$refs.searchBar.$refs.keyword.$refs.input.value
        let labels = vm.searchOptions.checkGroup.join(',')

        let {data} = await appsAPIs.apps({
          appType: 0,
          label: labels == '0' ? '':labels,
          name: keyword,
          pageSize: vm.datalistOptions.pageInfo.pageSize,
          pageNumber: vm.datalistOptions.pageInfo.currentPage
        })

        vm.datalistOptions.data = data.result.datas
      }

      // 服务详情点击事件
      let detailsOnClickFun = (item) => {
        //          console.log(item)
        vm.$router.push({ path: '/front/serviceAbility/details' })
      }

      vm.datalistOptions = appMarketService({
        dataList: dataList,
        pageNo: pageNo,
        pageSize: pageSize,
        total: total
      }).getDataListOptions({
        handleSizeChangeFun,
        handleCurrentChangeFun,
        detailsOnClickFun
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>


