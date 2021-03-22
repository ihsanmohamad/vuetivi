import Pages from './views/Pages.vue'
import Home from './views/Home.vue'
import Shows from './views/Shows.vue'
import ShowDetail from './views/ShowDetail.vue'
import Favorites from './views/Favorites.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { 
    path: '/', 
    component: Pages,
    redirect:'/home',
    children: [
      {
      path: '/home', 
      component: Home,
      },
      {
        path: '/shows',
        component: Shows,
        // example of route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import('./views/About.vue')
      },  
      {
        path: '/shows/:slug',
        component: ShowDetail
      }
    ]
  },
  { path: '/login' , component: Login },
  { path: '/register' , component: Register },
  { path: '/:path(.*)', component: NotFound },
]
