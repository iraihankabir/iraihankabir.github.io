import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/contact',
    name: 'contact',
    component: () =>
        import('./views/Contact.vue')
  },
  {
    path: '/resume',
    name: 'resume',
    component: () =>
        import('./views/Resume.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () =>
        import('./views/Services.vue')
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () =>
        import('./views/Portfolio.vue')
  },
  {
    path: '*',
    name: 'Error',
    component: () =>
        import('./views/Error.vue')
  }]
})
