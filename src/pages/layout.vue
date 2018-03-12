/**
* 作者 ：食草狂魔
*
* 日期 ：2017/12/08
*
* 描述 ：子路由布局页
*/
<template>
  <el-container class="is-vertical">
    <HeaderBar :menuState="menuState"></HeaderBar>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <LeftBar :options="leftBarOption"></LeftBar>
      </el-aside>
      <router-view/>
    </el-container>
  </el-container>
</template>
<script>
  import HeaderBar from '@/components/header/Header.vue'
  import LeftBar from '@/components/leftbar/LeftBar.vue'

  export default {
    name: 'layout',
    components: {
      HeaderBar,
      LeftBar
    },
    data () {
      return {
        menuState: "home",
        leftBarOption: {
          title: "左侧菜单数据配置",
          data: [
            {
              "value": 1,
              "label": "首页",
              "icon": "图片路径",
              "frontUrl": "/",
              "parentId": 0
            },
            {
              "value": 2,
              "label": "基地分布图",
              "icon": "图片路径",
              "frontUrl": "/mapArea",
              "parentId": 0
            },
            {
              "value": 3,
              "label": "数据管理",
              "icon": "图片路径",
              "frontUrl": "/dataManage/catalogManage",
              "parentId": 0,
              "children": [
                {
                  "value": 4,
                  "label": "目录管理",
                  "icon": "图片路径",
                  "frontUrl": "/dataManage/catalogManage",
                  "parentId": 3
                }
              ]
            },
            {
              "value": 5,
              "label": "任务管理",
              "icon": "图片路径",
              "frontUrl": "/taskManage/myTask",
              "parentId": 0,
              "children": [
                {
                  "value": 6,
                  "label": "我的任务",
                  "icon": "图片路径",
                  "frontUrl": "/taskManage/myTask",
                  "parentId": 5
                },
                {
                  "value": 7,
                  "label": "任务发布",
                  "icon": "图片路径",
                  "frontUrl": "/taskManage/addTask",
                  "parentId": 5
                }
              ]
            },
            {
              "value": 8,
              "label": "工单管理",
              "icon": "图片路径",
              "frontUrl": "/workOrderManage/workBench",
              "parentId": 0,
              "children": [
                {
                  "value": 9,
                  "label": "工作台",
                  "icon": "图片路径",
                  "frontUrl": "/workOrderManage/workBench",
                  "parentId": 8
                },
                {
                  "value": 10,
                  "label": "工单生成",
                  "icon": "图片路径",
                  "frontUrl": "/workOrderManage/addOrder",
                  "parentId": 8
                }
              ]
            },
            {
              "value": 11,
              "label": "工具管理",
              "icon": "图片路径",
              "frontUrl": "/toolsManage/tools",
              "parentId": 0,
              "children": [
                {
                  "value": 12,
                  "label": "工具集",
                  "icon": "图片路径",
                  "frontUrl": "/toolsManage/tools",
                  "parentId": 11
                },
                {
                  "value": 13,
                  "label": "工单生成",
                  "icon": "图片路径",
                  "frontUrl": "/toolsManage/addTools",
                  "parentId": 11
                }
              ]
            },
            {
              "value": 14,
              "label": "人员管理",
              "icon": "图片路径",
              "frontUrl": "/employeeManage/KPIManage",
              "parentId": 0,
              "children": [
                {
                  "value": 15,
                  "label": "绩效管理",
                  "icon": "图片路径",
                  "frontUrl": "/employeeManage/KPIManage",
                  "parentId": 14
                }
              ]
            },
            {
              "value": 16,
              "label": "系统管理",
              "icon": "图片路径",
              "frontUrl": "/systemManage/userManage",
              "parentId": 0,
              "children": [
                {
                  "value": 17,
                  "label": "用户管理",
                  "icon": "图片路径",
                  "frontUrl": "/systemManage/userManage",
                  "parentId": 16
                },
                {
                  "value": 18,
                  "label": "基地管理",
                  "icon": "图片路径",
                  "frontUrl": "/systemManage/baseManage",
                  "parentId": 16,
                  "children": [
                    {
                      "value": 19,
                      "label": "存储配置",
                      "icon": "图片路径",
                      "frontUrl": "/systemManage/baseManage/storageManage",
                      "parentId": 18
                    }
                  ]
                },
                {
                  "value": 20,
                  "label": "日志管理",
                  "icon": "图片路径",
                  "frontUrl": "/systemManage/logManage",
                  "parentId": 16
                },
                {
                  "value": 21,
                  "label": "通知管理",
                  "icon": "图片路径",
                  "frontUrl": "/systemManage/noticeManage",
                  "parentId": 16
                }
              ]
            }
          ]
        }
      }
    }
  }
</script>
<style>
</style>
