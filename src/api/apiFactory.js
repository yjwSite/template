/**
 * 作者 ：食草狂魔
 *
 * 日期 ：2017/11/23
 *
 * 描述 ：api接口工厂类
 */
import config from '../config'
import $ajax from '../plugins/axios'

export default (module) => {

  let apiObject = {}

  module.apis.forEach((item) => {
    apiObject[item.name] = (params) => {
      return $ajax({
        method: item.method,
        url: `${config.apis.modules[module.moduleName].host}${config.apis.modules[module.moduleName].url || config.apis.defaultUrl}${item.url}`,
        data: params,
        headers: item.headers || { "Content-Type" : "application/x-www-form-urlencoded" }
      })
    }
  })

  return apiObject
}
