/**
* 作者 ：食草狂魔
*
* 日期 ：2017/10/26
*
* 描述 ：首页
*/
<template>
  <div>
    <HeaderBar :headTitle="headTitle" message="true"></HeaderBar>
    <h3>首页</h3>
    <FooterBar></FooterBar>
  </div>
</template>
<script>
  import HeaderBar from '../components/header/Header.vue'
  import FooterBar from '../components/footer/Footer.vue'

  export default {
    name: 'index',
    components: {
      HeaderBar,
      FooterBar
    },
    data () {
      return {
        headTitle: '首页'
      }
    },
    mounted () {
    },
    methods: {
      loadMore () {

      }
    }
  }
</script>

<style>

</style>
