/**
 * 作者 ：食草狂魔
 *
 * 日期 ：2018/3/15
 *
 * 描述 ：shopCartService
 */
class ShopCartService {
  constructor (data) {
    this.data = data
  }
  getTableOptions ({
    removeAllFun,
    rowDeleteFun,
    handleSelectionChangeFun
  }) {
    let self = this
    let options = {
      thead: [{
        xtype: 'index',
        label: '序号',
        width: '50'
      }, {
        prop: 'categoryName', // 数据的key值
        label: '用户名', // 显示的标题
        width: '180' // 列宽
      }, {
        prop: 'categoryName', // 数据的key值
        label: '姓名', // 显示的标题
        width: '180' // 列宽
      }, {
        prop: 'categoryName', // 数据的key值
        label: '邮箱', // 显示的标题
        width: '180' // 列宽
      }, {
        prop: 'categoryName', // 数据的key值
        label: '角色', // 显示的标题
        width: '180' // 列宽
      }, {
        prop: 'categoryName', // 数据的key值
        label: '安全权限', // 显示的标题
        width: '180' // 列宽
      }, {
        prop: 'categoryName', // 数据的key值
        label: '创建时间', // 显示的标题
        width: '180' // 列宽
      }],
      operation: {
        items: [{
          xtype: 'link', // commonButton
          buttonText: '移除',
          onClick: rowDeleteFun
        }]
      },
      data: self.data.dataList,
      toolbar: [{
        xtype: 'toolbarRow',
        items: [{
          xtype: 'button',
          buttonType: 'primary', // 按钮样式
          buttonText: '清空购物车',
          containerStyle: 'float:right',
          onClick: removeAllFun
        }]
      }],
      handleSelectionChange: handleSelectionChangeFun
    }
    return options
  }
}

export default (data) => {
  return new ShopCartService(data)
}
