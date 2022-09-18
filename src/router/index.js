import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[
      {
        path: "/list",
        name: "list",
        component: () => import('../views/list.vue'),
      },
      {
        path: "/category",
        name:"category",
        component: () => import('../views/category.vue')
      },
      {
        path: "/index",
        name:"index",
        component: () => import('../views/index.vue')
      },

    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next)=>{
  if(!localStorage.getItem('token')){
     if(to.path=='/login'){
        next()
     }else{
      next('/login')
     }
  }else{
    next()
  }
})

export default router
