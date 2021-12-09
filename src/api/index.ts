import request from '@/utils/request'

// 提交
const submitTodo: any = async (todo: any) => {
  const retData = await request.http.post('/todo', todo)
  if (retData.status !== 200) {
    console.log('[axios]>> 提交todo 失败!')
    return null
  }
  return 'success'
}

// 获取todos
const getTodos = async () => {
  const retData = await request.http.get('/todo')
  if (retData.status !== 200) {
    console.log('[axios]>> 获取todos 失败!')
    return
  }
  return retData.data
}

// 删除todo
const deleteTodo = async (id: any) => {
  const retData = await request.http.delete('/todo', {
    data: {
      _id: id,
    },
  })
  if (retData.status !== 200) {
    console.log('[axios]>> 删除todo 失败!')
    return
  }
  return 'success'
}

export { submitTodo, getTodos, deleteTodo }
