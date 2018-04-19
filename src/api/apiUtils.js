/**
 * 作者 ：食草狂魔
 *
 * 日期 ：2018/3/30
 *
 * 描述 ：api接口工具类
 */
import config from '../config'

// 加载全局参数
function loadGlobalParams (targetObj, type) {
  if (config.apiParams && config.apiParams.configs) {
    config.apiParams.configs.forEach((item, i) => {
      if (item.type === type) {
        item.keys.forEach((key, i) => {
          if (key.source === 'localStorage') {
            targetObj[key.name] = localStorage[key.name]
          } else if (key.source === 'cookie') {
            // 待实现
          }
        })
      }
    })

    return targetObj
  } else {
    throw new Error(`apiParams exception ! \n apiParams:${config.apiParams}`)
  }
}

export default {
  loadGlobalParams
}
