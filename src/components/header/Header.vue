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
            <router-link :to="{ path: '/templateManage/main' }" :class="{ act: menuState==='templateManage' }">
              模板管理
            </router-link>
          </el-col>
          <el-col :span="3">
            <router-link :to="{ path: '/catalogManage/main' }" :class="{ act: menuState==='catalogManage' }">
              目录管理
            </router-link>
          </el-col>
          <el-col :span="3">
            <router-link :to="{ path: '/catalogAuditing/main' }" :class="{ act: menuState==='catalogAuditing' }">
              目录审核
            </router-link>
          </el-col>
          <el-col :span="3">
            <router-link :to="{ path: '/systemManage/main' }" :class="{ act: menuState==='systemManage' }">
              系统管理
            </router-link>
          </el-col>
          <el-col :span="3">
            <router-link :to="{ path: '/statistical/main' }" :class="{ act: menuState==='statistical' }">
              统计分析
            </router-link>
          </el-col>
          <el-col :span="2">
            <router-link :to="{ path: '/search/main' }" :class="{ act: menuState==='search' }">
              搜索
            </router-link>
          </el-col>
          <el-col :span="3">
            <router-link :to="{ path: '/helpcenter/main' }" :class="{ act: menuState==='helpcenter' }">
              帮助中心
            </router-link>
          </el-col>
          <el-col :span="2">
            <router-link :to="{ path: '/systemLog/main' }" :class="{ act: menuState==='systemLog' }">
              日志
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
    props: ["menuState"],
    name: 'HeaderBar',
    data() {
      return {
        userName: "未知用户"
      }
    },
    mounted: function () {
    },
    methods: {}
  }
</script>

<style>
  @import "./header.styl";
</style>
