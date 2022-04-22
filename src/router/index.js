import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CustomerInfoView from "@/views/CustomerInfoView";
import NewCustomerView from "@/views/NewCustomerView";
import AccountInfoView from "@/views/AccountInfoView";
import InputPageView from "@/views/InputPageView";
import OutputPageView from "@/views/OutputPageView";
import OldCustomerView from "@/views/OldCustomerView";
import TransactionView from "@/views/TransactionView";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'homeRoute',
        component: HomeView
    },
    {
        path: '/customer',
        name: 'customerRoute',
        component: CustomerInfoView
    },
    {
        path: '/account-info',
        name: 'accountRoute',
        component: AccountInfoView
    },
    {
        path: '/new-customer',
        name: 'newCustomerRoute',
        component: NewCustomerView
    },
    {
        path: '/old-customer',
        name: 'oldCustomerRoute',
        component: OldCustomerView
    },
    {
        path: '/input',
        name: 'inputRoute',
        component: InputPageView
    },
    {
        path: '/output',
        name: 'outputRoute',
        component: OutputPageView
    },
    {
        path: '/transaction',
        name: 'transactionRoute',
        component: TransactionView
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
