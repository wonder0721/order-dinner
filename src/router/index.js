import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Order from '../views/order.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/order',
    name: 'order',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Order,
    meta: {
      auth: true
    }
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

// 全局路由守卫
router.beforeEach((to,from,next) => {
  if (to.meta.auth) { // 判断是否需要路由权限
    if (sessionStorage.getItem("user")!== null) { // 判断是否已登录
      next()
    }
    else{
      next({
        path: '/login',
        // query: {redirect: to.fullPath}
      })
    }
  }
  else{
    next()
  }
})

export default router
