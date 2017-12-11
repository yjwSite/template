/**
* 作者 ：食草狂魔
*
* 日期 ：2017/10/26
*
* 描述 ：产品详情页
*/
<template>
  <div>
    <h3>产品详情页</h3>
  </div>
</template>
<script>
    import HeaderBar from '../../components/header/Header.vue'
    import FooterBar from '../../components/footer/Footer.vue'
    export default {
        name: 'detail',
        components: {
          HeaderBar,
          FooterBar
        },
        data () {
          return {
            headTitle: "产品详情页"
          }
        }
    }
</script>

<style></style>
