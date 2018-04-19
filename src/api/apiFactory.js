/**
 * 作者 ：食草狂魔
 *
 * 日期 ：2017/11/23
 *
 * 描述 ：api接口工厂类
 */
import config from '../config'
import $ajax from '../plugins/axios'
import headerConfig from './headerConfig'
import apiUtils from './apiUtils'

export default (module) => {
  let apiObject = {}

  module.apis.forEach((item) => {
    apiObject[item.name] = (params) => {
      let locationId = ''
      if (params && params.URI) {
        locationId = `/${params.URI}`
        delete params.URI
      }

      // 加载全局参数
      params = apiUtils.loadGlobalParams(params, 'parameter')

      return $ajax({
        method: item.method,
        url: `${config.apis.modules[module.moduleName].host}${config.apis.modules[module.moduleName].url || config.apis.defaultUrl}${item.url}${locationId}`,
        data: params,
        requestFun: module.requestFun,
        requestError: module.requestError,
        responseFun: module.responseFun,
        responseError: module.responseError,
        headers: item.headers || headerConfig()
      })
    }
  })

  return apiObject
}
