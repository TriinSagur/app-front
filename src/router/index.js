import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CustomerInfoView from "@/views/CustomerInfoView";
import NewCustomerView from "@/views/NewCustomerView";
import RemoveCustomerView from "@/views/RemoveCustomerView";
import allCustomersView from "@/views/AllCustomersView";
import accountInfoView from "@/views/AccountInfoView";
import updateCustomerView from "@/views/UpdateCustomerView";
import inputPageView from "@/views/InputPageView";
import outputPageView from "@/views/OutputPageView";
import transactionView from "@/views/TransactionView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homeRoute',
    component: HomeView
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
  },
  {
    path: '/customer',
    name: 'customerRoute',
    component: CustomerInfoView
    },

  {
    path: '/new-customer',
    name: 'newCustomerRoute',
    component: NewCustomerView
  },
  {
    path: '/remove-customer',
    name: 'removeCustomerRoute',
    component: RemoveCustomerView
  },
  {
    path: '/all-customer',
    name: 'allCustomerRoute',
    component: allCustomersView
  },
  {
    path: '/account-info',
    name: 'accountRoute',
    component: accountInfoView
  },
  {
    path: '/update-customer',
    name: 'updateCustomertRoute',
    component: updateCustomerView
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
  }

]

const router = new VueRouter({
  routes
})

export default router
