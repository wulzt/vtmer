<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
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
  provide (){
    return {
     reload:this.reload
    }
  },
  methods:{
    reload (){
       this.isRouterAlive = false
       this.$nextTick(function(){
         this.isRouterAlive = true
       })
    }
  },
  data(){
    return {
       isRouterAlive:true
    }
  },
}
</script>

<style>
.el-loading-mask{
  background-color: rgba(255,255,255,.3)!important;
}
@font-face {
  font-family: "FZZHJW";
  src: url('./assets/fonts/FZZHJW.ttf');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "MSYHL";
  src: url('./assets/fonts/MicrosoftYaHeiLight.ttf');
  font-weight: normal;
  font-style: normal;
}
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
input{
  outline:0px; -webkit-appearance:none;
}
#app {
  font-family: Microsoft YaHei,'Avenir', Helvetica, Arial, sans-serif;
  font-weight: 300;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
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
