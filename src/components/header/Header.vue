/**
* 作者 ：食草狂魔
*
* 日期 ：2017/9/20
*
* 描述 ：公共头部组件
*/
<template>
  <el-header style="height: 100px;">
    <el-row>
      <el-col :span="4" class="logo">
        <router-link :to="{ path: '/' }">
          <img src="./logo.png">
        </router-link>
      </el-col>
      <el-col :span="16">
        <el-row class="menu">
          <el-col :span="2">
            <router-link :to="{ path: '/' }" :class="{ act: menuState==='home' }">
              首页
            </router-link>
          </el-col>
          <el-col :span="3">
            <router-link :to="{ path: '/product/detail' }" :class="{ act: menuState==='productDetail' }">
              产品详情
            </router-link>
          </el-col>
          <el-col :span="3">
            <router-link :to="{ path: '/product/list' }" :class="{ act: menuState==='productList' }">
              产品列表
            </router-link>
          </el-col>
          <el-col :span="3">
            <router-link :to="{ path: '/user/list' }" :class="{ act: menuState==='userList' }">
              用户列表
            </router-link>
          </el-col>
        </el-row>
      </el-col>
      <el-col class="adminInfo" :span="3">
        <p>hi,<span class="userName">{{userName}}</span> | <a href="javascript:void(0);" class="logout">退出</a>
        </p>
      </el-col>
    </el-row>
  </el-header>
</template>
<script>
export default {
  props: ['menuState'],
  name: 'HeaderBar',
  data () {
    return {
      userName: '未知用户'
    }
  },
  mounted: function () {
  },
  methods: {}
}
</script>

<style scoped>
  @import "./header.styl";
</style>
