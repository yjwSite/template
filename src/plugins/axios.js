/**
 * 作者 ：食草狂魔
 *
 * 日期 ：2017/10/26
 *
 * 描述 ：Ajax请求统一入口
 */
import config from '../config/config'
import axios from 'axios'

let options = {
  baseURL: config.apis.defaultHost
}

export default axios.create(options)
