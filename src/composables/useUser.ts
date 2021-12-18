import { ref, reactive } from 'vue'

import { registerUser, findUserByAll } from '@/api/user'

interface user {
  _id?: string
  username: string
  password: string
}

export default function useUser() {
  const user = reactive({})

  // 添加用户
  const addUser = async (user: user) => {
    const res = await registerUser(user)
    if (!res) {
      console.log('添加用户失败!')
    } else {
      console.log(res)
    }
  }

  // 查询用户 by all condition
  const verifyUser = async (user: user) => {
    const res = await findUserByAll(user)
    if(res) {
      console.log('登录成功')
    } else {
      console.log('用户名或密码错误')
    }
  }

  return {
    addUser,
    verifyUser
  }
}
