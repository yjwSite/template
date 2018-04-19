/**
 * 作者 ：食草狂魔
 *
 * 日期 ：2017/12/14
 *
 * 描述 ：业务逻辑层 - 产品列表
 */
'use strict' // 定义为严格模式编码要求
import commonService from '../../commonService'

class ProductListService extends commonService {
  constructor (data) {
    super()
    this.data = data
  }
  getTableOptions ({ searchFun, addCartFun, rowDeleteFun, resetPwdFun, handleSizeChangeFun, handleCurrentChangeFun, toShopCartFun, handleSelectionChangeFun, formatter, queryStringFun, handleSelectFun }) {
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
        width: '180', // 列宽
        formatter: formatter
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
          xtype: 'link', // linkButton
          buttonText: '加入购物车',
          onClick: addCartFun
        }, {
          xtype: 'link', // commonButton
          buttonText: '删除',
          onClick: rowDeleteFun
        }, {
          xtype: 'link',
          buttonText: '重置密码',
          onClick: resetPwdFun
        }]
      },
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
      }, {
        xtype: 'toolbarRow',
        items: [{
          xtype: 'select',
          defaultText: '角色',
          ref: 'roleSelect',
          containerStyle: 'float:left',
          data: [{
            id: '0',
            label: '全部',
            value: '全部'
          }, {
            id: '1',
            label: '管理员',
            value: '管理员'
          }, {
            id: '2',
            label: '公司任务管理员',
            value: '公司任务管理员'
          }, {
            id: '3',
            label: '基地管理员',
            value: '基地管理员'
          }, {
            id: '4',
            label: '基地任务管理员',
            value: '基地任务管理员'
          }, {
            id: '5',
            label: '工单管理员',
            value: '工单管理员'
          }, {
            id: '6',
            label: '采集工程师',
            value: '采集工程师'
          }, {
            id: '7',
            label: '清洗工程师',
            value: '清洗工程师'
          }, {
            id: '8',
            label: '加工工程师',
            value: '加工工程师'
          }, {
            id: '9',
            label: '汇集工程师',
            value: '汇集工程师'
          }],
          valueKey: ''
        }, {
          xtype: 'button',
          buttonType: 'primary', // 按钮样式
          buttonText: '去购物车',
          containerStyle: 'float:right',
          onClick: toShopCartFun
        }]
      }],
      handleSelectionChange: handleSelectionChangeFun
    }

    return options
  }
}

export default (data) => {
  return new ProductListService(data)
}
