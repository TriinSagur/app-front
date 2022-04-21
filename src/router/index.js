import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import customerInfoView from "@/views/CustomerInfoView";
import NewCustomerView from "@/views/NewCustomerView";
import AccountInfoView from "@/views/AccountInfoView";


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
    component: customerInfoView
  },
  {
    path: '/new-customer',
    name: 'newCustomerRoute',
    component: NewCustomerView
  },
  {
    path: '/account-info',
    name: 'accountRoute',
    component: AccountInfoView
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
