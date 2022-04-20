import {ref } from "vue";//引入vue中的方法
import axios from 'axios'

const getPosts = () =>{
//数据请求
const post = ref([]);
const load = async () => {
  try{
    let {data} = await axios("http://localhost:3001/posts")
    post.value = data
  }catch(error){
    console.log(error)
  }
}
return{post,load}
}

export default getPosts