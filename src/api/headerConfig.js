/**
 * 作者 ：食草狂魔
 *
 * 日期 ：2018/1/5
 *
 * 描述 ：headerConfig
 */
import apiUtils from './apiUtils'
export default () => {
  let headerInfo = { 'Content-Type': 'application/json' }

  // 加载全局参数
  headerInfo = apiUtils.loadGlobalParams(headerInfo, 'header')

  return headerInfo
}
