import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'

import 'normalize.css'
import './assets/css/base.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to,from,next) => {
  /* 路由发生变化修改页面title */
  if(to.meta.title){
    document.title = to.meta.title;
  }
  next();
})
