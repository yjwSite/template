/**
 * 作者 ：食草狂魔
 *
 * 日期 ：2017-11-10
 *
 * 描述 ：webpack启动类
 */
"use strict" // 定义为严格模式编码要求

const factory = require('./chartsFactory');

function main (refs, type) {
  Array.from(refs).forEach((el, i) => {
    const config = require(`./${el}`);
    factory.newInstance({ type: type, id: config.id, options: config.options });
    // console.log(el);
  });
}
/*
* ECharts Demo
* */
const echartsRefs = [
  'ECharts/Sales/Sales',
  'ECharts/AxisPointer/AxisPointer',
  'ECharts/Lines/Lines',
  'ECharts/Bar/Bar',
  'ECharts/BusLines/BusLines',
  'ECharts/Pie/Pie',
  'ECharts/Radar/Radar'
];

main(echartsRefs, "echarts");


/*
* HighCharts Demo
* */
const highchartsRefs = [
  'Highcharts/Lines/Lines',
  'Highcharts/Pie/Pie'
];

main(highchartsRefs, "highcharts");


/*
* D3 Demo
* */
const d3Refs = [
  'D3/Grid/Grid',
  'D3/Bar/Bar',
  'D3/ScatterPlot/ScatterPlot',
  'D3/Drawing/Drawing'
]

main(d3Refs, "d3");
