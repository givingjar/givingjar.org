import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Hello
    }
  ]
})
