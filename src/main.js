// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 路由导航守卫
router.beforeEach((to, from, next) => {
  // 更改页面 title
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = '路由分割'
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
