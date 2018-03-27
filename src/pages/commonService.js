/**
 * 作者 ：食草狂魔
 *
 * 日期 ：2018/3/27
 *
 * 描述 ：通用业务逻辑处理类
 */
class commonService {
  constructor(data) {
    this.data = data
  }
  getQueryStringData (datalist) {
    datalist.map(item => {
      item['value'] = item.categoryName
    })
    return datalist
  }
}

export default commonService
