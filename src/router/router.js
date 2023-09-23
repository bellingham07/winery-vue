import {createRouter, createWebHistory} from 'vue-router'
import EIndexView from "@/components/eshop/IndexView";
import CIndexView from "@/components/celebrity/IndexView";
import RegisterPage from "../components/login/RegisterPage"
import LoginPage from '../components/login/LoginPage'
import IndexMain from '../components/celebrity/children/IndexMain'
import GoodRecommend from '../components/celebrity/children/GoodRecommend'
import FindEshop from "../components/celebrity/children/FindEshop";
import MySelf from '../components/celebrity/children/MySelf'
import FindCooperation from "@/components/eshop/children/FindCooperation.vue";
import productUpdate from "@/components/eshop/children/ProductUpdate.vue";
import treatyInfo from "@/components/eshop/children/TreatyInfo.vue";
import shopInfo from "@/components/eshop/children/ShopInfo.vue";
import IndexRecommend from "@/components/eshop/children/IndexRecommend.vue";
import myselfInfo from "@/components/eshop/shopinfo/MyselfInfo.vue";
import myOrder from "@/components/eshop/shopinfo/MyOrder.vue";
import CTreaty from "@/components/celebrity/children/CTreaty.vue";


const routes = [

    // 商家路由
    {
        path: '/eshop',
        name: 'eshop',
        component: EIndexView,
        children: [
            {
                path: '',
                component: IndexRecommend
            },
            {
                path: 'find',
                component: FindCooperation,
            },
            {
                path: 'product',
                component: productUpdate
            },
            {
                path: 'treaty',
                component: treatyInfo
            },
            {
                path: "myself",
                component: shopInfo,
                children: [
                    {
                        path: 'info',
                        component: myselfInfo
                    },
                    {
                        path: 'order',
                        component: myOrder
                    }
                ]
            }
        ]

    },
    // 网红路由
    {
        path: '/celebrity',
        name: 'celebrity',
        component: CIndexView,
        children: [
            {
                path: '',
                component: IndexMain
            },
            {
                path: 'recommend',
                component: GoodRecommend
            },
            {
                path: 'myself',
                component: MySelf
            },
            {
                path: 'treaty',
                component: CTreaty
            },
            {
                path: 'find',
                component: FindEshop
            }
        ]
    },
    // 登录路由
    {
        path: '/',
        name: 'login',
        component: LoginPage
    },
    // 注册路由
    {
        path: '/register',
        name: 'register',
        component: RegisterPage
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
