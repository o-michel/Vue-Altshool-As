import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MoreInfo from '../views/MoreInfo.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    // props: true

  },
  {
    path: '/about',
    name: 'about',
    // props: true,  
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    children: [
      { path: "more", component: MoreInfo}
    ],
  },
  // {
  //   path: '/more',
  //   name: 'More details',
  //   // props: true,  
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue/MoreInfo.vue')
  // },
  {
    path: "/:pathMatch(.*)*",
    name: "not found",
    component: () => import("@/views/PageNotFound.vue"),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
