import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import Product from './views/product/Product.vue'
import Case from './views/case/Case.vue'
import About from './views/about/About.vue'
import CoopPartner from './views/cooppartner/CoopPartner.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      component: Home
    },
    {
      path: '/product',
      component: Product
    }, {
      path: '/case',
      component: Case
    }, {
      path: '/about',
      component: About
    }, {
      path: '/cooppartner',
      component: CoopPartner
    },
  ]
})