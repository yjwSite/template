/**
 * 作者 ：食草狂魔
 *
 * 日期 ：2017-11-10
 *
 * 描述 ：图表工厂类
 */
"use strict" // 定义为严格模式编码要求

class ChartsFactory {
  constructor ({ type, id, options }) {
    this.type = type;
    this.id = id;
    this.options = options;
    this.init();
  }
  init () {
    require('./' + this.type)(this.id, this.options);
  }
}

exports.newInstance = (config) => {
  return new ChartsFactory(config)
}
