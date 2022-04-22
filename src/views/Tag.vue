//标签页
<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import getPosts from "../composibles/getPosts";
import PostList from "../components/PostList.vue";

const route = useRoute();
const {post,load} = getPosts();
load();

//使用计算属性将我们拿到的route tag与我们通过getpost获取到的全部数据里的tag进行比对，相同的就返回
const postWithTag = computed(() =>{
    return post.value.filter((p) => p.tags.includes(route.params.tag));
})
</script>

<template>
    <div class="tag">
        <span  class="text-2xl text-b">
            <router-link to="/addBlog">新增博客</router-link>
        </span>
        <!-- 做一个判断，检查到post内有数据则显示postlist -->
        <div v-if="post.length">
            <PostList :post2="postWithTag"></PostList>
        </div>
        <div v-else>
            数据加载中..
        </div>
  </div>
</template>

<style>

</style>