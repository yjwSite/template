/**
 * 作者 ：食草狂魔
 *
 * 日期 ：2017-11-10
 *
 * 描述 ：图表工厂类
 */
'use strict' // 定义为严格模式编码要求

import d3 from './d3'
import echarts from './echarts'
import highcharts from './highcharts'

class ChartsFactory {
  constructor ({ type, id, options }) {
    this.type = type
    this.id = id
    this.options = options
    this.init()
  }
  init () {
    switch (this.type) {
      case 'd3': {
        this.chartsInstance = d3(this.id, this.options)
        return
      }
      case 'echarts': {
        this.chartsInstance = echarts(this.id, this.options)
        return
      }
      case 'highcharts': {
        this.chartsInstance = highcharts(this.id, this.options)
        return
      }
      default: {
        this.chartsInstance = echarts(this.id, this.options)
      }
    }
  }
  getChartsInstance () {
    return this.chartsInstance
  }
}

export default {
  newInstance: (config) => {
    return new ChartsFactory(config)
  }
}
