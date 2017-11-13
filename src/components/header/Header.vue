/**
* 作者 ：食草狂魔
*
* 日期 ：2017/9/20
*
* 描述 ：公共头部组件
*/
<template>
  <div class="header clearfloat">
    <a href="javascript:history.go(-1);" v-if="ret=='true'">
      <span class="return"></span>
    </a>
    <div class="title">
      {{headTitle}}
    </div>
    <div class="message" v-if="message=='true'">
      <router-link :to="{ path: '/product/detail' }">
        <img src="./icon/message.png">
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Header',
    props: ['ret', 'headTitle', 'message']
  }
</script>

<style>
  @import "./header.styl";
</style>
