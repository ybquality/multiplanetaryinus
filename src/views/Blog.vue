<script setup>//添加setup后相当于里面所写内容都会写到setup这个钩子函数中
import {ref,reactive,computed,watch,watchEffect} from "vue";//引入vue中的方法
import PostList from "../components/PostList.vue";//内容展示
import TagCloud from "../components/TagCloud.vue";//分类标签组件
import Spinner from "../components/Spinner.vue";//进入加载动画组件
import getPosts from "../composibles/getPosts";//获取数据组件

//数据请求模块
const {post,load} = getPosts()
load()

</script>

<template>
  <div class="Blog">
    <span  class="text-2xl text-b">
      <router-link to="/addBlog">新增博客</router-link>
    </span>
    <!-- 做一个判断，检查到post内有数据则显示postlist -->
    <div v-if="post.length">
      <!-- 将当前页面的数据传递给组件=左边为自定名称，等号右边为当前页面定义的数据 -->
      <PostList :post2="post"></PostList>
      <hr>
      <TagCloud :post2="post"></TagCloud>
    </div>
    <div v-else>
      <Spinner></Spinner>
    </div>
  </div>
</template>

<style>
.blogitems{
  margin-bottom: 30px;
}
</style>
