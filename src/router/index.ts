import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Layout from '../views/Layout.vue'
import LoginView from '../views/LoginView.vue'
import App from '../App.vue'
import { component } from 'vue/types/umd'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: "", name: "home-content", component: () => import("../views/HomeView.vue") },
      { path: "/profile", name: 'profile', component: () => import("../views/ProfileView.vue") },
      { path: "/edit-account", name: 'edit', component: () => import("../views/Settings.vue")},
      {
        path: "", component: () => import("../views/InboxView.vue"),
        children: [
          { path: "/inbox", name: 'inbox', component: () => import("../components/inbox_page_component/Start_inbox.vue") }
        ]
      }
    ]
  },
  {
    path: '/login',
    name: "login",
    component: LoginView
  }
  // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path != '/login') {
    if (sessionStorage.getItem('CurAcc')) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
export default router
