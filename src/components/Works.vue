<template>
  <div id="works">
    <transition name="fade">
      <div v-if="showImg" class="layer" @click="closeImg()">
        <img v-if="showImg" class="zoomImg" :src="nowImg" @click="closeImg()"/>
      </div>
    </transition>
    <Head></Head>
    <div id="content">
      <ul class="center">
        <li v-for="(item,index) in workslist">
          <div class="imgcontainer">
            <img :src="item.image"  @click="openImg($event)" class="centerimg"/>
            <big-img v-if="showImg" @clickit="viewImg" :imgSrc="item.image"></big-img>
          </div>
          <div class="center-intro">
            <p style="color:#378cff;font-size:0.24rem;">{{item.name}}</p>
            <div class="line"></div>
            <p style="font-size: 0.17rem;" class="worksDescription">{{item.description}}</p>
          </div>
        </li>
      </ul>
      <p class="content-hint">上下可滑动可查看，点击放大</p>
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


  export default{
    name:'works',
    components:{
      Head
    },
    data(){
      return{
        showImg:false,
        nowImg:'',
        workslist:[],
      }
    },
    methods: {
      openImg(e) {
        this.showImg = true;
        this.nowImg = e.currentTarget.src;
        // 获取当前图片地址
      },
      closeImg(){
        this.showImg = false;
      },
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
