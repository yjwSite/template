/**
* 作者 ：sunmeng
*
* 日期 ：2017/12/11
*
* 描述 ：公共组件 - 穿梭框
*/
<template>
  <el-transfer
    v-model="value3"
    :filterable = "options.filterable"
    :left-default-checked="options.leftChecked"
    :right-default-checked="options.rightChecked"
    :render-content="options.renderFunc"
    :titles="options.titleText"
    :button-texts="options.buttonText"
    :format="{
      noChecked: '${total}',
      hasChecked: '${checked}/${total}'
    }"
    @change="options.handleChange"
    :data="options.data">
    <div slot="left-footer">
      <div v-for="item in options.toolButtonLeft" :style="item.containerStyle">
        <el-button
          v-if="item.xtype==='button'&&typeof item.onClick==='function'"
          :style="item.buttonStyle"
          @click="item.onClick"
          class="transfer-footer"
          size="small">{{ item.label }}</el-button>
        <el-button
          v-if="item.xtype==='link'"
          :style="item.buttonStyle"
          @click="item.onClick"
          class="transfer-footer"
          size="small">{{ item.label }}</el-button>
        <el-upload
          v-if="item.xtype==='upload'"
          :ref="item.ref"
          multiple
          :action="item.action"
          :file-list="fileList"
          :data="item.data"
          :auto-upload="true"
          :on-success="item.onSuccess">
          <el-button :type="item.buttonType" :class="item.className" :style="item.style">{{item.label}}</el-button>
        </el-upload>
      </div>
    </div>
    <div slot="right-footer">
      <div v-for="item in options.toolButtonRight" :style="item.containerStyle">
        <el-button
          v-if="item.xtype==='button'&&typeof item.onClick==='function'"
          :style="item.buttonStyle"
          @click="item.onClick"
          class="transfer-footer"
          size="small">{{ item.label }}</el-button>
        <el-button
          v-if="item.xtype==='link'"
          :style="item.buttonStyle"
          @click="item.onClick"
          class="transfer-footer"
          size="small">{{ item.label }}</el-button>
        <el-upload
          v-if="item.xtype==='upload'"
          :ref="item.ref"
          multiple
          :action="item.action"
          :file-list="fileList"
          :data="item.data"
          :auto-upload="true"
          :on-success="item.onSuccess">
          <el-button :type="item.buttonType" :class="item.className" :style="item.style">{{item.label}}</el-button>
        </el-upload>
      </div>
    </div>
  </el-transfer>
</template>

<script>
  export default {
    props:["options"],
    data() {
      return {
        data:[],
        value3:['1'],
        fileList:[]
      }
    }
  };
</script>

<style>
  .el-transfer-panel{
    width: 300px;
  }
</style>
