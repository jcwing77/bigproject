import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import Login from '../components/Login'
import About from '../components/About'
import Contact from '../components/Contact'
import News from '../components/News'
import NewsDetail from '../components/NewsDetail'
import Product from '../components/Product'
import ProductDetail from '../components/ProductDetail'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/login',
      component:Login
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
      component: News,
    },
    {
      path: '/newsdetail/:num',
      component: NewsDetail,
    },
    {
      path: '/product',
      component:Product,
    },
    {
      path: '/productdetail/:num',
      component: ProductDetail,
    }
  ]
})
