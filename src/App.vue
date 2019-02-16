<template>
  <div id="app">
    <router-view></router-view>
    <BG v-if="$store.state.whatBg"></BG>
    <BGother v-if="!$store.state.whatBg"></BGother>
  </div>
</template>

<script>
import BG from './components/BG'
import BGother from './components/BG_other'
import store from './store/store'
export default {
  name: 'app',
  components:{
    BG,
    BGother,
  },
}
</script>

<style>
html{
  font-size: 13.33333333333vw;
}
* {
    margin: 0;
    padding: 0;
}

html, body {
    width: 100%;
    height: 100%;
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
