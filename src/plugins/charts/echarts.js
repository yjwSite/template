/**
 * 作者 ：食草狂魔
 *
 * 日期 ：2017-11-10
 *
 * 描述 ：ECharts驱动类
 */
"use strict" // 定义为严格模式编码要求

const echarts = require('echarts');
require('echarts/extension/bmap/bmap');

function getDom (id){
  return document.getElementById(id);
};
module.exports = (id, option) => {

  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(getDom(id));

  // 绘制图表
  myChart.setOption(option);
}
