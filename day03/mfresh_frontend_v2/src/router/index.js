import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import About from '@/components/About'
import Contact from '@/components/Contact'
import News from '@/components/News'
import Product from '@/components/Product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/about',
      component: About
    }, {
      path: '/contact',
      component:Contact
    },
    {
      path: '/news',
      component: News
    }, {
      path: '/product',
      component:Product
    }
  ]
})
