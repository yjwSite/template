/**
 * 作者 ：食草狂魔
 *
 * 日期 ：2018/3/27
 *
 * 描述 ：子路由 - 用户模块
 */
const UserListPage = () => import('@/pages/user/userList.vue')

export default [{
  path: '/user/list',
  name: 'user-list',
  component: UserListPage
}]
