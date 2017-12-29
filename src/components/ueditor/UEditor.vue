/**
* 作者 ：食草狂魔
*
* 日期 ：2017/12/29
*
* 描述 ：公共组件 - UEditor
*/
<template>
  <div :style="options.containerStyle">
    <script id="editor" type="text/plain"></script>
  </div>
</template>
<script>
  import '../../../static/js/lib/ueditor/ueditor.config.js'
  import '../../../static/js/lib/ueditor/ueditor.all.js'
  import '../../../static/js/lib/ueditor/lang/zh-cn/zh-cn.js'

  export default {
    name: 'UEditor',
    props: ['options'],
    data() {
      return {
        editor: null
      }
    },
    mounted () {
      //初始化UE
      let vm = this
      vm.editor = UE.getEditor('editor', vm.$props.options.config);
    },
    destoryed () {
      this.editor.destory();
    },
    methods:{
      getInstance () {
        return this.editor;
      }
    }
  }
</script>
<style lang="less" scoped>
</style>
