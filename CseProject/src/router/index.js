import Vue from 'vue'
import Router from 'vue-router'
import mainHeader from '@/components/shared/mainHeader'
import mainFooter from '@/components/shared/mainFooter'
import Board from '@/components/server/Board'
import Articles from '@/components/server/Articles'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainHeader',
      component: mainHeader
    },
    {
      path: '/',
      name: 'mainFooter',
      component: mainFooter
    },
    {
      path: '/',
      name: 'Board',
      component: Board
    },
    
    {
      path: '/',
      name: 'Articles',
      component: Articles
    },
  ]
})
