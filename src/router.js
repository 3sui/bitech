import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import Product from './views/product/Product.vue'
import Case from './views/case/Case.vue'
import About from './views/about/About.vue'
import CoopPartner from './views/cooppartner/CoopPartner.vue'



Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [{
      path: '/',
      component: Home,
      meta: {
        title: '瑞谷拜特-智慧园区服务运营平台_招商管理_资产经营_决策支撑'
      }
    },
    {
      path: '/product',
      component: Product,
      meta: {
        title: '产品与解决方案'
      }
    }, {
      path: '/case',
      component: Case,
      meta: {
        title: '典型案例'
      }
    }, {
      path: '/about',
      component: About,
      meta: {
        title: '关于我们'
      }
    }, {
      path: '/cooppartner',
      component: CoopPartner,
      meta: {
        title: '合作伙伴'
      }
    },
  ]
})