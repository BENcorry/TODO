import Vue from 'vue'
import Router from 'vue-router'
import Add from '@/components/Add'
import Index from '@/components/Index'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/list/:id',
      name: 'list',
      component: List
    }
  ]
})
