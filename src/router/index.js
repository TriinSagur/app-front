import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CustomerInfoView from "@/views/CustomerInfoView";
import BookInfoView from "@/views/BookInfoView";
import AuthorInfoView from "@/views/AuthorInfoView";
import NewCustomerView from "@/views/NewCustomerView";
import RemoveCustomerView from "@/views/RemoveCustomerView";

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
    path: '/book',
    name: 'bookRoute',
    component: BookInfoView
  },
  {
    path: '/author',
    name: 'authorRoute',
    component: AuthorInfoView
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
  }

]

const router = new VueRouter({
  routes
})

export default router
