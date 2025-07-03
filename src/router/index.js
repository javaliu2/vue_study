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
    },
    {
        path: '/c',
        component: () => import('../views/container/ContainerView.vue'),
        redirect: '/c/p1',  // 访问 /c 的话转发到 /c/p1 
        children: [
            {
                path: '/c/p1',
                component: () => import('../views/container/P1View.vue'),
                children: [{
                    path: '/c/p1/p11',
                    component: () => import('../views/container/P11View.vue'),
                }]
            },
            {
                path: '/c/p2',
                component: () => import('../views/container/P2View.vue')
            },
            {
                path: '/c/p3',
                component: () => import('../views/container/P3View.vue')
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router  // 导出这个实例，供其他文件使用