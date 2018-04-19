/**
 * 作者 ：食草狂魔
 *
 * 日期 ：2017/12/13
 *
 * 描述 ：接口类 - 测试
 */
import apiBase from '../apiBase'
import apiFactory from '../apiFactory'

const module = {
  moduleName: 'test',
  apis: [{
    // 测试
    method: 'get', // 请求方式
    name: 'test', // 接口名称
    url: '/goods/category' // 接口全路径
  }]
}

class ApiSub extends apiBase {
  constructor (module) {
    super()
    this.moduleName = module.moduleName
    this.apis = module.apis
  }
}

export default apiFactory(new ApiSub(module))
