<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const title = ref("");
const body = ref("");
const tags = ref([]);
const tag = ref("");

let yy = new Date().getFullYear();
let mm = new Date().getMonth()+1;
let dd = new Date().getDate();
const datetime = yy+'/'+mm+'/'+dd;
console.log(datetime)  



const router = useRouter();

const handleKeydown = () =>{
    if(tag.value == ""){
        console.log("test null")
    }
    else if(!tags.value.includes(tag.value)){
        tag.value = tag.value.replace(/\s/g, '');
        tags.value.push(tag.value);
    }
    tag.value = "";
};
const handleSumit = async () => {
    //准备数据
    const post = {
        id: Math.floor(Math.random() * 100000),
        title: title.value,
        body: body.value,
        tags: tags.value,
        datetime: datetime,
    };

    //发起请求
   const data = await axios.post("http://localhost:3001/posts",post);

   if(data.status === 201){
       router.push("/blog")
   }
};
</script>

<template>
  <div>
      <h2>新增内容</h2>
      {{datetime}}
      <form @submit.prevent="handleSumit">
          <label for="title">标题</label>  <br>
          <input type="text" v-model="title" required/><br>
          <label for="body">内容</label><br>
          <textarea v-model="body"></textarea><br>
          <label for="tag">标签（回车添加标签）</label><br>
          <input type="text" v-model.trim="tag" @keydown.enter.prevent="handleKeydown" /><br>
          <!-- 显示标签 -->
          <div v-for="tag in tags" :key="tag">
              #{{tag}}
          </div>

          <button>添加</button>
      </form>
  </div>
</template>

<style>
input{
    border: 1px solid;
}
textarea{
    border: 1px solid;
}
</style>