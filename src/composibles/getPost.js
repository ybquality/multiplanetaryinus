import {ref } from "vue";//引入vue中的方法
import axios from 'axios'

const getPost = (id) =>{
//数据请求
const postl = ref({});
const load = async () => {
  try{
    let {data} = await axios("http://localhost:3001/posts/" +id)
    postl.value = data
  }catch(error){
    console.log(error)
  }
  return postl
}
return{postl,load}
}

export default getPost