<script setup>//添加setup后相当于里面所写内容都会写到setup这个钩子函数中
import SinglePost from './SinglePost.vue'
//三个钩子函数的用法
//onMounted在页面渲染之前执行，执行后页面才会进行加载,数据请求内容适合在onMounted中进行;
//onUnmounted在组件注销前执行，执行完组件就不再显示
//onUpdated当组件内容发生变化，执行
import { onMounted, onUnmounted, onUpdated } from "vue";
defineProps({
    post2: Array,
});

</script>

<template>
  博客内容
  <div class="PostList">
      <div v-for="posts in post2" :key="posts.id">
          <!-- 将当前页面的数据传递给组件=左边为自定名称，等号右边为当前页面定义的数据
          该处传递的值为vfor遍历的posts -->
          <SinglePost :post="posts"/>
      </div>
  </div>
</template>

<style>
</style>
