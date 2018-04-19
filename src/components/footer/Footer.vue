/**
* 作者 ：sunmeng
*
* 日期 ：2017/11/14
*
* 描述 ：公共底部组件
*/
<template>
  <el-footer class="footer" id="footer">
    <p>公司电话：010-83256000     公司传真：010-83256000     公司地址：北京市丰台区南四环西路188号一区31号楼1层101-8</p>
    <p>版权所有：京ICP备15024075号-1 V1.0.0.151201.BETA</p>
  </el-footer>
</template>
<script>
export default {
  name: 'Footer',
  data () {
    return {
      hook: true
    }
  },
  mounted: function () {
    //      var total = document.documentElement.clientHeight;
    //      $(".loginContainer").css({"height": total - 88});
    //      document.addEventListener("DOMSubtreeModified", function (evt) {
    //        //var total = document.documentElement.clientHeight;
    //        var appHeight = $("#app").height();
    //        if (appHeight < total) {
    //          $("#footer").addClass("footerFixed");
    //          return;
    //        } else {
    //          $("#footer").removeClass("footerFixed");
    //          return;
    //        }
    //      }, false);

  }
}
</script>

<style scoped>
  @import "./footer.styl";
</style>
