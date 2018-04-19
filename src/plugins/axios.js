/**
 * 作者 ：食草狂魔
 *
 * 日期 ：2017/11/23
 *
 * 描述 ：Ajax请求类封装
 */
import config from '../config'
import $ajax from 'axios'

function getOptions ({ method, url, data, headers }) {
  let $ajaxOptions = {}

  if (typeof method !== 'string') {
    throw new Error('url must be string !')
  }

  if (typeof data !== 'object') {
    data = {}
  }

  if (method.toLowerCase() === 'post') {
    $ajaxOptions['method'] = 'POST'
    $ajaxOptions['data'] = data
  } else if (method.toLowerCase() === 'put') {
    $ajaxOptions['method'] = 'PUT'
    $ajaxOptions['data'] = data
  } else if (method.toLowerCase() === 'delete') {
    $ajaxOptions['method'] = 'DELETE'
    $ajaxOptions['params'] = data
  } else if (method.toLowerCase() === 'patch') {
    $ajaxOptions['method'] = 'PATCH'
    $ajaxOptions['params'] = data
  } else {
    $ajaxOptions['method'] = 'GET'
    $ajaxOptions['params'] = data
  }

  if (typeof url !== 'string') {
    throw new Error('url must be string !')
  }

  $ajaxOptions['url'] = url
  $ajaxOptions['baseURL'] = config.apis.defaultHost
  $ajaxOptions['headers'] = headers

  /* 【如果需要 x-www-form-urlencoded 这种方式提交，请解开注释】 */
  // $ajaxOptions["transformRequest"] = [function transformRequest (data, headers) {
  //   /* 这里是重点，其他的其实可以照着axios的源码抄 */
  //   /* 这里就是用来解决POST提交json数据的时候是直接把整个json放在request payload中提交过去的情况
  //    * 这里简单处理下，把 {name: 'admin', pwd: 123}这种转换成name=admin&pwd=123就可以通过
  //    * x-www-form-urlencoded这种方式提交
  //    * */
  //   if (data) {
  //     let keys = Object.keys(data)
  //     /* 这里就是把json变成url形式，并进行encode */
  //     return encodeURI(keys.map(name => `${name}=${data[name]}`).join('&'))
  //   }
  //   return data
  // }]

  return $ajaxOptions
}

// export default
export default ({
  method,
  url,
  data,
  requestFun,
  requestError,
  responseFun,
  responseError,
  headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
}) => {
  let $options = getOptions({
    method: method,
    url: url,
    data: data,
    headers: headers
  })
  // console.log("options:", JSON.stringify($options))
  // console.log("options type:", typeof $options)
  try {
    // 请求拦截器
    $ajax.interceptors.request.use(requestFun, requestError)
    // 响应拦截器
    $ajax.interceptors.response.use(responseFun, responseError)
    return $ajax($options)
  } catch (ex) {
    throw new Error(`network exception ! \n ex:${ex.message} \n method:${method} \n url:${url} \n params:${JSON.stringify(data)}`)
  }
}
