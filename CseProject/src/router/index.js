import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import Vue from 'vue'
import Router from 'vue-router'
import mainHeader from '@/components/shared/mainHeader'
import mainFooter from '@/components/shared/mainFooter'
import BoardArea from '@/components/server/BoardArea'
import ArticleArea from '@/components/server/ArticleArea'
import Navbar from '@/components/shared/Navbar'
import imageSlider from '@/components/shared/imageSlider'
import VueMaterial from 'vue-material'
import Login from '@/components/shared/Login'

Vue.use(VueMaterial)
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
      name: 'BoardArea',
      component: BoardArea
    },
    
    {
      path: '/',
      name: 'ArticleArea',
      component: ArticleArea
    },
    {
      path: '/',
      name: 'Navbar',
      component: Navbar
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ]
})
