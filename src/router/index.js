import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CustomerInfoView from "@/views/CustomerInfoView";
import NewCustomerView from "@/views/NewCustomerView";
import accountInfoView from "@/views/AccountInfoView";
import inputPageView from "@/views/InputPageView";
import outputPageView from "@/views/OutputPageView";
import transactionView from "@/views/TransactionView";
import testPage from "@/views/TestPage";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'homeRoute',
        component: HomeView
    },
    {
        path: '/new-customer',
        name: '/newCustomerRoute',
        component: NewCustomerView
    },
    {
        path: '/customer',
        name: 'customerRoute',
        component: CustomerInfoView
    },
    {
        path: '/account-info',
        name: 'accountRoute',
        component: accountInfoView
    },
    {
        path: '/input',
        name: 'inputRoute',
        component: inputPageView
    },
    {
        path: '/output',
        name: 'outputRoute',
        component: outputPageView
    },
    {
        path: '/transaction',
        name: 'transactionRoute',
        component: transactionView
    },
    {
        path: '/test',
        name: 'testRoute',
        component: testPage
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
