/**
 * 作者 ：食草狂魔
 *
 * 日期 ：2017/12/02
 *
 * 描述 ：业务配置文件 - 开发环境
 */
export default {
  env: 'development',
  apiParams: {
    // api接口通用参数获取策略
    configs: [
      // {
      // type: "header", // 参数类型：header、parameter、
      // keys: [{
      //   name: "token", // 参数key
      //   source: "localStorage" // 值的来源
      // }, {
      //   name: "accountId",
      //   source: "cookie"
      // }]
      // },
      {
      type: "parameter",
      keys: [{
        name: "token", // 参数key
        source: "localStorage" // 值的来源
      }]
    }]
  },
  apis:{
    // api接口url配置
    modules:{
      // 目录审核
      checkDir: {
        host: '',
        url: '/checkDir'
      },
      // 目录管理
      dir: {
        host: '', // http://192.168.112.47:8081
        url: '/dir'
      },
      // 系统管理
      sys: {
        host: '',
        url: '/sys'
      },
      // 授权模块
      auth: {
        host: '',
        url: ''
      },
      // 模板管理
      template: {
        host: '',
        url: '/template'
      },
      // 部门管理
      department: {
        host: '',
        url: '/department'
      },
      // 角色管理
      role: {
        host: '',
        url: '/role'
      },
      // 用户管理
      user: {
        host: '',
        url: '/user'
      },
      // 测试用
      test: {
        host: '',
        url: '/portalInterface'
      }
    },
    defaultHost: 'http://www.youedata.com',//'http://192.168.112.3:8089',//'',//'http://210.13.50.98:10133', //http://www.youedata.com/portalInterface/goods/category
    defaultUrl: ''
  },
  siteInfo:{
    // 多站点配置
    sites: {
      login_site_host: 'http://login.mainsite.com/', // 登录站地址
      main_site_host: 'http://www.mainsite.com/',  // 本站地址
      file_server_url: "http://www.dev.com"   // 文件服务器地址
    }
  }
}
