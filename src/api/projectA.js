import {managerAxios} from './aixos'

// 暴露接口方法 -登录
export const login = ({ username, password }) => {
    return managerAxios.post('/login', {
      username,
      password
    })
  }
  
  // 暴露接口方法 - 获取用户列表
  export const users = ({ query, pagenum, pagesize }) => {
    return managerAxios.get('users', {
      // get的参数必须通过这种方式来设置
      params: {
        query,
        pagenum,
        pagesize
      }
      // 设置请求头 迁移到了 axios的请求拦截器
      // headers: {
      //   Authorization: window.sessionStorage.getItem('token')
      // }
    })
  }
  
  // 暴露接口方法 - 获取左侧菜单
  export const menus = () => {
    return managerAxios.get('/menus', {
      // 设置请求头
      // headers: {
      //   Authorization: window.sessionStorage.getItem('token')
      // }
    })
  }
  
  // 接口方法 - 获取权限列表 list的形式
  // /:type  意思是 type这个位置传参用的
  export const rightList = () => {
    return managerAxios.get('/rights/list')
  }
  // 接口方法 - 添加用户
  export const addUser = ({ username, password, email, mobile }) => {
    return managerAxios.post('/users', {
      username,
      password,
      email,
      mobile
    })
  }
  
  // 接口方法 - 删除用户
  export const deleteUser = ({ id }) => {
    return managerAxios.delete(`/users/${id}`)
  }
  // 接口方法 - 修改用户状态
  export const updateUserState = ({ id, type }) => {
    return managerAxios.put(`/users/${id}/state/${type}`)
  }
  // 接口方法 - 修改用户信息 数据的提交和post类似
  export const updateUserInfo = ({ id, email, mobile }) => {
    return managerAxios.put(`/users/${id}`, {
      email,
      mobile
    })
  }
  
  // 接口方法 - 角色列表获取
  export const roles = () => {
    return managerAxios.get('/roles')
  }
  // 接口方法 - 分配用户角色
  export const disRoles = ({ id, rid }) => {
    return managerAxios.put(`/users/${id}/role`, {
      rid
    })
  }
  
  // 接口方法 - 删除角色的指定权限
  export const delRoleRight = ({ roleId, rightId }) => {
    return managerAxios.delete(`roles/${roleId}/rights/${rightId}`)
  }
  
  // 接口方法 - 获取所有权限，树形结构
  export const rightsTree = () => {
    return managerAxios.get('rights/tree')
  }
  // 接口方法 - 角色授权
  export const giveRoleRights = ({ roleId, rids }) => {
    return managerAxios.post(`roles/${roleId}/rights`, {
      rids
    })
  }
  
  // 获取商品数据列表
  export const getCategories = () => {
    return managerAxios.get('/categories', {
      params: {
        type: 3
      }
    })
  }
  // 获取数据报表
  export const getReports = () => {
    return managerAxios.get('/reports/type/1')
  }
  