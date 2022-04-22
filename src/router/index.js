import { createRouter,createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Details from '../views/Details.vue'
import addBlog from "../views/addBlog.vue";
import Tag from "../views/Tag.vue";
import editBlog from "../views/editBlog.vue";

const routes = [
    { path:"/", name:'Home', component: Home },
    { path:"/Blog", name:'Blog', component: Blog },
    { path:"/Details/:id", name:'Details', component: Details,props:true },//当加上props后会将跳转页面参数传递至跳转页
    { path:"/addBlog", name:'addBlog', component: addBlog },
    { path:"/tags/:tag", name:'Tag', component: Tag },
    { path:"/editBlog/:id", name:'editBlog', component: editBlog },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;