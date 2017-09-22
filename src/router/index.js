import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/containers/Pos/index.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pos',
      component: Pos
    }
  ]
})
