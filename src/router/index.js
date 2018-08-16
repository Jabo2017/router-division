import Vue from 'vue'
import Router from 'vue-router'

import Home from './home'
import News from './news'
import Servers from './servers'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    ...Home,
    ...News,
    ...Servers
  ]
})
