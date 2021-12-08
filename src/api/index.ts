import request from "@/utils/request"

// 提交
const submitTodo:any = () => {
  
}

// 获取todos
const getTodos = async () => {
  const retData = await request.http.get('/todo')
  console.log(retData)
  if(retData.status !== 200) {
    console.log('[axios]>> 获取todos 失败!')
    return null
  }
  return retData.data.todos
}


export  {submitTodo, getTodos}