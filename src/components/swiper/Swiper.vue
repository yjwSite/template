/**
* 作者 ：食草狂魔
*
* 日期 ：2018/3/12
*
* 描述 ：Swiper
*/
<template>
  <swiper :options="options.swiperOption" ref="mySwiper">
    <!--@someSwiperEvent="callback"-->
    <!-- slides -->
    <swiper-slide v-for="item in options.imgList">
      <img :src="item.imgSrc">
    </swiper-slide>
    <!-- Optional controls -->
    <slot name="button-prev" slot="button-prev"></slot>
    <slot name="button-next" slot="button-next"></slot>
    <!--<div class="swiper-pagination" slot="pagination"></div>-->
    <!--<div class="swiper-scrollbar" slot="scrollbar"></div>-->
  </swiper>
</template>
<script>
export default {
  name: 'MSwiper',
  props: ['options'],
  data () {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
  }
}
</script>
<style lang="less" scoped>
</style>
