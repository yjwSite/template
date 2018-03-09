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
  export default {
    name: 'UEditor',
    props: ['options'],
    data() {
      return {
        editor: null
      }
    },
    mounted () {
      // 初始化UE http://blog.csdn.net/zrk1000/article/details/46865093
      let vm = this
      UE.delEditor('editor')
      vm.editor = UE.getEditor('editor', vm.$props.options.config)
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
