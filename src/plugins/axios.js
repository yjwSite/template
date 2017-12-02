/**
 * 作者 ：食草狂魔
 *
 * 日期 ：2017/11/23
 *
 * 描述 ：Ajax请求类封装
 */
import config from '../config'
import $ajax from 'axios'

function getOptions({ method, url, data, headers }) {
  let $ajaxOptions = {}

  if("string" != typeof method){
    throw new Error("url must be string !")
  }

  if("object" != typeof data){
    data = {}
  }

  if("post" == method.toLowerCase()){
    $ajaxOptions["method"] = "POST"
    $ajaxOptions["data"] = data
  }
  else{
    $ajaxOptions["method"] = "GET"
    $ajaxOptions["params"] = data
  }

  if("string" != typeof url){
    throw new Error("url must be string !")
  }

  $ajaxOptions["url"] = url
  $ajaxOptions["baseURL"] = config.apis.defaultHost
  $ajaxOptions["headers"] = headers
  $ajaxOptions["transformRequest"] = [function transformRequest (data, headers) {
    /* 这里是重点，其他的其实可以照着axios的源码抄 */
    /* 这里就是用来解决POST提交json数据的时候是直接把整个json放在request payload中提交过去的情况
     * 这里简单处理下，把 {name: 'admin', pwd: 123}这种转换成name=admin&pwd=123就可以通过
     * x-www-form-urlencoded这种方式提交
     * */
    if (data) {
      let keys = Object.keys(data)
      /* 这里就是把json变成url形式，并进行encode */
      return encodeURI(keys.map(name => `${name}=${data[name]}`).join('&'))
    }
    return data
  }]

  return $ajaxOptions
}

// export default
export default ({ method, url, data, headers = { "Content-Type" : "application/x-www-form-urlencoded" } }) => {
  let $options = getOptions({
    method: method,
    url: url,
    data: data,
    headers: headers
  })
  // console.log("options:", JSON.stringify($options))
  // console.log("options type:", typeof $options)
  try {
    return $ajax($options)
  }
  catch (ex) {
    throw new Error(`network exception ! \n ex:${ex.message} \n method:${method} \n url:${url} \n params:${JSON.stringify(params)}`)
  }
}
