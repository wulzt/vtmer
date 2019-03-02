<template>
  <div id="works">
    <Head></Head>
    <div id="content">
      <ul class="center">
        <li v-for="(item,index) in workslist">
          <div class="imgcontainer">
            <img v-image-preview :src="item.image" class="centerimg"/>
          </div>
          <div class="center-intro">
            <p style="color:#378cff;font-size:0.24rem;">{{item.name}}</p>
            <div class="line"></div>
            <p style="font-size: 0.17rem;" class="worksDescription">{{item.description}}</p>
          </div>
        </li>
      </ul>
      <p class="content-hint">上下可滑动可查看</p>
      <div class="content-BTNtouch">
        <router-link :to="{ name: 'touch' }" id="touchBtn">联系我们</router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import Head from './Head'
  import axios from 'axios'
  import store from '../store/store'

  import Vue from 'vue'
  import VueDirectiveImagePreviewer from 'vue-directive-image-previewer'
  import 'vue-directive-image-previewer/dist/assets/style.css'
  Vue.use(VueDirectiveImagePreviewer);


  export default{
    name:'works',
    components:{
      Head
    },
    data(){
      return{
        workslist:[],
      }
    },
    mounted(){
      store.state.whatBg = false
      axios.get('https://vtmer.erienniu.xyz/api/list')
        .then(res=>{
          this.workslist = res.data.data
        })
        .catch(error=>{
          console.log(error);
        })
    },
  }
</script>
<style lang="less">
  @import "../assets/css/works";
</style>
