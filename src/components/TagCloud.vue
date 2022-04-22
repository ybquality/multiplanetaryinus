<template>
  <div>
      <span v-for="tag in tags" :key="tag" class="m-2 bg-green-400">
          <router-link :to="{name: 'Tag',params:{tag}}">#{{tag}}</router-link>
      </span>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tags = ref([]);
const tagSet = new Set();//使用set可以去重

//将tag遍历
props.post2.forEach((item) => {
    item.tags.forEach((tag) => tagSet.add(tag));
})
tags.value = [...tagSet];//将tagset进行数组解构之后赋给tags

const props = defineProps({
    post2: Array,
})

</script>

<style scoped>

</style>