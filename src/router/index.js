import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import redBag from '../views/redBag.vue'
import maskPage from '../views/maskPage.vue'
import anchor from '../views/anchorPage.vue'
import anchor2 from '../views/anchorPage2.vue'
import vantTest from '../views/vantTest.vue'
import vantSw from '../views/vantSwiper.vue'

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
    path: '/gamelist',
    name: 'gamelist',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/gameList.vue')
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
    path: '/anchor2',
    name: 'anchor2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: anchor2
  },
  {
    path: '/maskPage',
    name: 'maskPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: maskPage
  },
  {
    path: '/vant',
    name: 'vant',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: vantTest
  },
  {
    path: '/vantSw',
    name: 'vantSw',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: vantSw
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
