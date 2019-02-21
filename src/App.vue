<template>
  <div id="app">
    <router-view></router-view>
    <!--<BG></BG>-->
  </div>
</template>

<script>
import BG from './components/BG'
export default {
  name: 'app',
  components:{
    BG,
  }
}
</script>

<style>
html{
  font-size: 13.33333333333vw;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

a{
  text-decoration: none;
}
ul,li,p{
  padding:0;
  margin:0;
}
li{
  list-style-type: none;
}
</style>
