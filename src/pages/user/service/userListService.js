/**
 * 作者 ：食草狂魔
 *
 * 日期 ：2018/3/27
 *
 * 描述 ：userListService
 */
'use strict' // 定义为严格模式编码要求
import commonService from '../../commonService'

class UserListService extends commonService {
  constructor (data) {
    super()
    this.data = data
  }
  getTableOptions ({ searchFun, handleSizeChangeFun, handleCurrentChangeFun, handleSelectionChangeFun, queryStringFun, handleSelectFun }) {
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
      data: self.data.dataList,
      pageInfo: {
        currentPage: self.data.pageNo,
        pageSizes: [1, 2, 3, 4],
        pageSize: self.data.pageSize,
        layout: 'total, sizes, prev, pager, next, jumper',
        total: self.data.total,
        handleSizeChange: handleSizeChangeFun,
        handleCurrentChange: handleCurrentChangeFun
      },
      toolbar: [{
        xtype: 'toolbarRow',
        items: [{
          xtype: 'button',
          buttonType: 'primary', // 按钮样式
          buttonText: '查询',
          containerStyle: 'float:right',
          onClick: searchFun
        }, {
          xtype: 'autocomplete',
          defaultText: '请输入查找的内容',
          containerStyle: 'float:right',
          ref: 'keyword',
          triggerOnFocus: false,
          querySearch: queryStringFun,
          handleSelect: handleSelectFun
        }]
      }],
      handleSelectionChange: handleSelectionChangeFun
    }

    return options
  }
}

export default (data) => {
  return new UserListService(data)
}
