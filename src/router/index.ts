import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Random from '@/views/Random.vue'
import Author from '@/views/Author.vue'
import Like from '@/views/Like.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Random',
    component: Random,
  },
  {
    path: '/author/:authorName',
    name: 'Author',
    component: Author,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: '/like',
    name: 'Like',
    component: Like,
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
