<script setup>//添加setup后相当于里面所写内容都会写到setup这个钩子函数中
import PostList from "../components/PostList.vue";
import {ref,reactive,computed,watch,watchEffect} from "vue";//引入vue中的方法
import getPosts from "../composibles/getPosts";

//数据请求模块
const {post,load} = getPosts()
load()

</script>

<template>
  <div class="Blog">
    <!-- 做一个判断，检查到post内有数据则显示postlist -->
    <div v-if="post.length">
      <!-- 将当前页面的数据传递给组件=左边为自定名称，等号右边为当前页面定义的数据 -->
      <PostList :post2="post"></PostList>
    </div>
    <div v-else>加载中...</div>
  </div>
</template>

<style>
</style>
