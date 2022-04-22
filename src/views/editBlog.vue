<script setup>
import { reactive, ref } from "vue";
import axios from "axios";
import getPost from "../composibles/getPost";
import { useRoute,useRouter } from "vue-router";
import { toRaw } from "vue"

const route = useRoute()
const {postl,load} = getPost(route.params.id);//可以使用route拿到跳转页面的附加值
load();
// let i=await load();  //通过await赋值给i可通过i.value.title拿到数据
//直接使用postl，postl返回一个proxy对象，无法直接拿到proxy对象里数据


// console.log(i)
// console.log(i.value.id)

// console.log(route.params.id)
const handleSumit = async () => {
    await axios.patch("http://localhost:3001/posts/" + route.params.id,postl);
    alert("1");
};

</script>

<template>
  <div>
      <h2>修改内容</h2>
      <form ref="form" @submit.prevent="handleSumit">
          <label>标题</label> <br>
          <input for="title" v-model="postl.title"> <br>
          <label>内容</label> <br>
          <textarea for="body"  v-model="postl.body"></textarea> <br>

          <button>确认修改</button>
      </form>
      {{postl.title}}
  </div>
</template>

<style scoped>
input{
    border: 1px solid;
}
textarea{
    border: 1px solid;
}

</style>