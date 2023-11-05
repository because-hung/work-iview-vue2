import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import redBag from '../views/redBag.vue'
import maskPage from '../views/maskPage.vue'
import anchor from '../views/anchorPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/red',
    name: 'redBag',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: redBag
  },
  {
    path: '/anchor',
    name: 'anchor',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: anchor
  },
  {
    path: '/maskPage',
    name: 'maskPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: maskPage
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'redBag') {
    router.replace('/maskPage')
    setTimeout(() => {
      next()
    }, 3000)
  } else {
    next()
  }
  console.log('to', to)
  console.log('from', from)
  console.log('next', next)
})

router.afterEach((to, from, next) => {
  console.log('to2', to)
  console.log('from2', from)
  console.log('next2', next)
})

export default router
