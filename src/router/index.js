import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Index from '../components/Index.vue'
import Japan from '../components/japan/JapanWordsManager.vue'
import English from '../components/english/EnglishWordsManager.vue'
import User from '../components/user/UserManager.vue'
import BackHome from '../components/index/BackHome.vue'


Vue.use(VueRouter)

const routes = [
  // login page 
  {             
    path: '/',
    name: 'Login',
    component: Login
  },
  // index page
  {             
    path: '/index',
    name: 'Index',
    component: Index,
    children : [              //  属于一级菜单下的二级菜单
      {             
        path: '/home',
        name: 'BackHome',
        meta : {
            title : '后台管理首页'
        },
        component: BackHome,
      },
        {             
          path: '/japan',
          name: 'Japan',
          meta : {
              title : '日语单词管理'
          },
          component: Japan,
        },
        {             
          path: '/english',
          name: 'English',
          meta : {
              title : '英语单词管理'
          },
          component: English,
        },
        {             
          path: '/user',
          name: 'User',
          meta : {
              title : '用户管理'
          },
          component: User,
        }
  ]},
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
