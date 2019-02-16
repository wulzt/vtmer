<template>
  <div id="admin">
    <Head></Head>
    <div class="welcome">
      <span>欢迎回家，VTMER!</span>
      <input class="uploadWorks" name="uploadWorks" type="button" value="上传作品" @click="upload">
    </div>
    <ul class="worksList">
      <li class="workItem" v-for="(item,index) in worksList">
        <img :src="item.img"/>
        <div class="workCon">
          <p>
            作品的标题长长的标题可以长到这里的标题
          </p>
          <input id="editWo" name="editWo" type="button" value="编辑" @click="editWo">
          <input id="deleteWo" name="deleteWo" type="button" value="删除" @click="deleteWo">
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Head from './Head'
  export default{
    name: 'admin',
    components:{
      Head,
    },
    data(){
      return{
        worksList:[
          {img:require('../assets/img/worker/banner1.jpg')},
          {img:require('../assets/img/worker/banner2.jpg')},
          {img:require('../assets/img/worker/banner3.jpg')},
          {img:require('../assets/img/worker/banner4.jpg')},
        ],
      }
    },
    methods:{
      upload(){
        this.$router.push({
          path:'/upload',
        })
      },
      editWo(){
        this.$router.push({
          path:'/upload',
        })
      },
      deleteWo(){
        alert('delete');
      }
    }
  }
</script>
<style>
.welcome{
  display: flex;
  justify-content: space-between;
  width: 5.74rem;
  margin: 0 auto;
  margin-top: 1.06rem;
  margin-bottom: 0.64rem;
}
.welcome span{
  font-size: 0.36rem;
  font-family: "MicrosoftYaHeiLight";
  color: rgb(153, 153, 153);
}
.uploadWorks{
  width: 2.16rem;
  line-height: .46rem;
  border: solid 0.02rem rgb(55, 140, 255);
  border-radius: 0.21rem;
  font-size: 0.24rem;
  text-align: center;
  color: #378cff;
  background-color: transparent;
}
.workCon{
  font-size: 0;
  position: relative;
}
.workItem{
  width: 5.74rem;
  height: 1.35rem;
  margin: 0 auto;
  margin-bottom: 0.4rem;
  display: flex;
}
.workItem img{
  width: 1.8rem;
  height: 1.35rem;
}
.workItem p{
  font-size: 0.3rem;
  color: #999;
  padding-left: .31rem;
}

#editWo{
    font-size: 0.24rem;
    width: 1.29rem;
    line-height: .41rem;
    background-color: rgb(51, 208, 102);
    color: white;
    border-radius: 0.17rem;
    border:0;
    margin-left: .63rem;
    position: absolute;
    bottom: 0;
}
#deleteWo{
    font-size: 0.24rem;
    width: 1.25rem;
    line-height: 0.37rem;
    color: #ff5c64;
    background-color: transparent;
    border-radius: 0.17rem;
    border:solid 0.02rem #ff5c64;
    margin-left: 2.36rem;
    position: absolute;
    bottom:0;
}
</style>
