<template>
  <div id="app">
    <!--<Scroll></Scroll>-->
    <Tabbar></Tabbar>
    <router-view/>
  </div>
</template>

<script>
  import Tabbar from './components/tavbar'
  import Scroll from './components/scroll'
export default {
  name: 'app',
  components:{
    Tabbar,Scroll
  }
}
</script>

<style>
  *{ padding: 0; margin: 0;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
