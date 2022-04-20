import { createRouter,createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Details from '../views/Details.vue'

const routes = [
    { path:"/", name:'Home', component: Home },
    { path:"/Blog", name:'Blog', component: Blog },
    { path:"/Details", name:'Details', component: Details },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;