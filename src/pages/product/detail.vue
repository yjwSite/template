/**
* 作者 ：食草狂魔
*
* 日期 ：2017/10/26
*
* 描述 ：产品详情页
*/
<template>
  <el-main>
    <div class="detailTitle" style="width: 100%;">产品详情页</div>
    <UEditor :options="UEditorOptions" ref="myEditor"></UEditor>
    <el-button @click="getContent">获取Content</el-button>
    <el-button @click="getHtmlContent">获取HtmlContent</el-button>
    <el-button @click="setContent">设置Content</el-button>
  </el-main>
</template>
<script>
import UEditor from '@/components/ueditor/UEditor.vue'
export default {
  name: 'detail',
  components: {
    UEditor
  },
  data () {
    return {
      UEditorOptions: {
        containerStyle: 'width: 100%;',
        config: {
          // ueditor的自定义配置
        }
      }
    }
  },
  mounted () {
    let vm = this
    vm.$refs.myEditor.getInstance().ready(() => {
      vm.$refs.myEditor.getInstance().setContent("<p style='color:red;'>初始化赋值</p>")
    })
  },
  methods: {
    getContent () {
      let vm = this
      console.log(vm.$refs.myEditor.getInstance().getContentTxt())
    },
    getHtmlContent () {
      let vm = this
      console.log(vm.$refs.myEditor.getInstance().getContent())
    },
    setContent () {
      let vm = this
      vm.$refs.myEditor.getInstance().setContent("<p style='color:red;'>初始化赋值</p>")
    }
  }
}
</script>

<style lang="less" scoped>
  @import "product.less";
</style>
