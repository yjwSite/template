/**
 * 作者 ：食草狂魔
 *
 * 日期 ：2017-11-10
 *
 * 描述 ：Highcharts驱动类
 */
"use strict" // 定义为严格模式编码要求

import Highcharts from 'highcharts/highstock'

// 加载 地图 模块
require('highcharts/modules/map')(Highcharts);

export default (id, option) => {
  // 创建图表
  Highcharts.chart(id, option);
}
