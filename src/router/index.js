import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CustomerInfoView from "@/views/CustomerInfoView";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'homeRoute',
        component: HomeView
    },
    {
        path: '/customer',
        name: 'CustomerRoute',
        component: CustomerInfoView
    },
    {
        path: '/about',
        name: 'aboutRoute',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
        }
    }
]

const router = new VueRouter({
    routes
})

export default router
