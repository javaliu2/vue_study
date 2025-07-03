import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloView from '../views/HelloView.vue'

Vue.use(VueRouter)
// 名称必须是routes，而不能是routers
const routes = [
    {
        path: '/hello',
        name: 'hello',
        component: HelloView
    },
    {
        path: '/hi',
        name: 'hi',
        component: () => import('../views/HiView.vue')
    },
    {
        path: '/404',
        component: () => import('../views/404View.vue')
    },
    {
        path: '*',  // 捕获未匹配的请求，将其转发到404页面
        redirect: '/404'
    }
]

const router = new VueRouter({
    routes
})

export default router  // 导出这个实例，供其他文件使用