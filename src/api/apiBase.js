/**
 * 作者 ：食草狂魔
 *
 * 日期 ：2018/2/27
 *
 * 描述 ：api请求基类
 */
class apiBase {
  constructor() {
  }
  responseFun (data) {
    console.log("api请求基类===================>", JSON.stringify(data))

    return data
  }
}

export default (data) => {
  return new apiBase(data)
}
