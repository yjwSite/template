/**
* 作者 ：sunmeng
*
* 日期 ：2017/11/14
*
* 描述 ：左侧菜单(后期JSX语法重构！！！)
*/
<template>
	<el-container>
		<el-tree class="cataTree"
		  :data="options.data"
		  :props="defaultProps"
		  :show-checkbox="false"
		  node-key="value"
		  :default-expanded-keys="[0, 0]"
      default-expand-all="true"
		  :expand-on-click-node="false"
		  :render-content="renderContent"
      @node-click="options.treeMethod.nodeClick">
		</el-tree>
	</el-container>
</template>

<script>
  export default {
  	name:'treeBar',
  	props: ['options'],
    data() {
      return {
      	message:"管理",
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    methods: {
      renderContent(h, { node, data, store }) {
        let vm = this,
          template;

        if(vm.$props.options.see){
          template = <span style="flex:1;display:flex;align-items:center;justify-content:space-between;font-size:16px;padding-right:8px;">
            <span>
            <span>{node.label}</span>
          </span>
          <span>
          <el-button style="font-size: 12px;color:#424242" type="text" on-click={ () => vm.$props.options.treeMethod.append(node, data, store) }>添加子项</el-button>
          <el-button style="font-size: 12px;color:#424242" type="text" on-click={ () => vm.$props.options.treeMethod.remove(node, data, store) }>删除</el-button>
          </span>
          </span>
        }
        else{
          template = <span style="flex:1;display:flex;align-items:center;justify-content:space-between;font-size:16px;padding-right:8px;">
            <span>
            <span>{node.label}</span>
          </span>
          <span>
          </span>
          </span>
        }

        return (template);
      }
    }
  };
</script>

<style>
	@import "./treeBar.styl";
</style>
