<script setup>
import getPost from "../composibles/getPost";
import { useRoute } from "vue-router";

const route = useRoute()
const {postl,load} = getPost(route.params.id);//可以使用route拿到跳转页面的附加值

load();


const props = defineProps({
    id: String,
});


</script>

<template>
    <div class="postl" v-if="postl">
        <h2> {{postl.title}} </h2>
        <p> {{postl.body}} </p>
        <hr>
        <span>
            <router-link :to="{name: 'editBlog',params:{id}}">修改博客</router-link>
        </span>
    </div>
    <div v-else>
        数据加载中..
    </div>
</template>



<style>

</style>