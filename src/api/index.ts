import request from '@/utils/request'

// 提交
const submitTodo: any = async () => {
  const retData = await request.http.post('/todo', {

  })
}

// 获取todos
const getTodos = async () => {
  const retData = await request.http.get('/todo')
  if (retData.status !== 200) {
    console.log('[axios]>> 获取todos 失败!')
    return null
  }
  console.log(retData.data)
  return retData.data
}

export { submitTodo, getTodos }
