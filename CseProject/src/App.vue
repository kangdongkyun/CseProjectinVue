<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <main-header></main-header>
    <board></board>
    <articles></articles>
    <main-footer></main-footer>
    
  </div>
</template>

<script>
import mainHeader from '@/components/shared/mainHeader'
import mainFooter from '@/components/shared/mainFooter'
import Board from '@/components/server/Board'
import Articles from '@/components/server/Articles'

export default {
  name: 'App',
  components:{
    'main-header' : mainHeader,
    'main-footer' : mainFooter,
    'board' : Board,
    'articles':Articles
  }
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
