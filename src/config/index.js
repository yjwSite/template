/**
 * 作者 ：食草狂魔
 *
 * 日期 ：2017/12/02
 *
 * 描述 ：业务配置文件索引
 */
import developmentConfig from './Development'
import productionConfig from './Production'
import testConfig from './Test'
export default {
  development: developmentConfig,
  test: testConfig,
  production: productionConfig

}['development']
