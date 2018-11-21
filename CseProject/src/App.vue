<template>
  <div id="app">
    <mobile-view></mobile-view>
    <main-header></main-header>
    <navbar></navbar>
    <image-slider></image-slider>
    <!-- <router-view/> -->
    <board-area></board-area>
    <article-area></article-area>
    <main-footer></main-footer>
  </div>
</template>

<script>
import mainHeader from '@/components/shared/mainHeader'
import mainFooter from '@/components/shared/mainFooter'
import BoardArea from '@/components/server/BoardArea'
import ArticleArea from '@/components/server/ArticleArea'
import Navbar from '@/components/shared/Navbar'
import mobileView from '@/components/shared/mobileView'
import imageSlider from '@/components/shared/imageSlider'
export default {
  name: 'App',
  components:{
    'main-header' : mainHeader,
    'main-footer' : mainFooter,
    'board-area' : BoardArea,
    'article-area':ArticleArea,
    'navbar':Navbar,
    'mobile-view':mobileView,
    'image-slider':imageSlider
  },

}
</script>

<style>
body,h1, h2, h3, h4, h5, h6, p, span {
    margin: 0;
    padding: 0;
    font-size: 12px;    
    font-family: 'Roboto', sans-serif;
}   
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
    color: #000000;
}   

</style>
