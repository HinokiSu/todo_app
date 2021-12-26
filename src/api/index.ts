import request from '@/utils/request'

// 提交
const submitTodo: any = async (todo: any) => {
  const { data: res } = await request.http.post('/todo', todo)
  if (res.meta.status !== 200) {
    console.log('[axios]>> 提交todo 失败!')
    return null
  }
  return res.meta.msg
}

// 获取todos
const getTodos = async () => {
  const { data: res } = await request.http.get('/todo')
  if (res.meta.status !== 200) {
    console.log('[axios]>> 获取todos 失败!')
    return
  }
  return res.data
}

// 删除todo
const deleteTodo = async (id: string) => {
  const { data: res } = await request.http.delete('/todo', {
    params: {
      id,
    },
  })
  if (res.meta.status !== 200) {
    console.log('[axios]>> 删除todo 失败!')
    return
  }
  
  return res.meta.msg
}

// 修改 todo completed
const updateTodo = async (todo: any) => {
  const { data: res } = await request.http.put('/todo', {
    data: {
      todo,
    },
  })

  if (res.meta.status !== 200) {
    console.log('[axios]>> 修改todo 失败!')
    return
  }
  return res.meta.msg
}

export { submitTodo, getTodos, deleteTodo, updateTodo }
