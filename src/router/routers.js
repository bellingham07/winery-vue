export const constanRoutes = [
    {
        //登录
        path: '/login',
        component : () => import('@/views/login/login.vue'),
        name: 'Login',
        meta: {
            title: '登录',
            hidden: true
        }
    },
    {
        //首页
        path: '/',
        component: () => import('@/layout/layout.vue'),
        name: 'Layout',
        meta: {
            hidden: false,
        }
    }
]