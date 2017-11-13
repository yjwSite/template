/**
 * 作者 ：食草狂魔
 *
 * 日期 ：2017/10/26
 *
 * 描述 ：业务配置文件
 */
export default {
  apis:{
    modules:{
      customer: {
        host: '',
        url: '/customer'
      },
      pay: {
        host: '',
        url: '/pay'
      },
      order: {
        host: '',
        url: '/order'
      },
      goods: {
        host: '',//'http://172.16.135.186:8080',
        url: '/goods'
      },
      address: {
        host: '',
        url: '/address'
      },
      newsh5: {
        host: '',
        url: '/newsh5'
      },
      bannerh5: {
        host: '',//'http://172.16.135.205:8080',
        url: '/bannerh5'
      },
      noticeh5: {
        host: '',//'http://172.16.135.205:8080',
        url: '/noticeh5'
      }
    },
    defaultHost: 'http://172.16.126.142:9090',
    defaultUrl: ''
  },
  siteInfo:{
    // 多站点配置
    sites: {
      login_site_host: 'http://login.mainsite.com/', // 登录站地址
      main_site_host: 'http://www.mainsite.com/',  // 本站地址
      file_server_url: "http://www.fileserver.com/"   // 文件服务器地址
    }
  }
}
