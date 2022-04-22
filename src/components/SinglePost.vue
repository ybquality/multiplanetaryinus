<script setup>//使用语法糖
import { computed } from "vue";//引入vue提供的计算属性

const props = defineProps({//定义一个props来接收
    post: Object,
});

const snippet = computed(() => {
    return props.post.body.substring(0,100) + "...";
});

</script>

<template>
  <div class="post">
    <!-- 使用name来定位可以进行传递其他值 -->
    <router-link :to="{name: 'Details',params:{id:post.id}}">
        <h3>{{post.title}} </h3>
        <p>{{snippet}} </p>
        <span v-for="tag in post.tags" :key="tag">#{{tag}} </span>
    </router-link>
  </div>
</template>

<style>
.post{
  margin-bottom: 30px;
}
</style>