/**
 * 作者 ：食草狂魔
 *
 * 日期 ：2018/1/5
 *
 * 描述 ：headerConfig
 */
export default () => {
  let headerInfo = { "Content-Type" : "application/json" }
  // if (localStorage.token) {
  //   headerInfo["access_token"] = localStorage.token;
  // }
  return headerInfo
}
