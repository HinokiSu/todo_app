import request from '@/utils/request'

interface meta {
  data: object
  status: number
}

/**
 *
 * @param row 将请求回来的数据格式化
 * @returns
 */
const meta = (row: any) => {
  return <meta>{
    data: row.data,
    status: row.status,
  }
}

// 提交注册信息
const registerUser: any = async (userInfo: any) => {
  const retData = await request.http.post('/user', userInfo)
  if (retData.status !== 200) {
    console.log('[axios]>> 提交用户注册 失败!')
    return null
  }
  return meta(retData)
}

// 查询用户
const findUserByAll: any = async (userInfo: any) => {
  const retData = await request.http.get('/user', {
    params: {
      userInfo,
    },
  })
  console.log(retData)
  if (retData.status !== 200) {
    console.log('[axios]>> 查询用用户失败!')
    return false
  }
  if(retData.data) {
    return true
  } else {
    return false
  }
  
}

export { registerUser, findUserByAll }
