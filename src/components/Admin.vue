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
            {{item.name}}
          </p>
          <input id="editWo" name="editWo" type="button" value="编辑" @click="editWo">
          <input id="deleteWo" name="deleteWo" type="button" value="删除" @click="isDelete=true">
        </div>
      </li>
    </ul>
    <div class="deleteBox" v-if="isDelete">
      <div class="mask"></div>
      <div class="deleteAlert">
        <div class="close" @click="isDelete=false">
          <img src="../assets/img/home/close.png" />
        </div>
        <div class="deleteContent">
          <p>
            是否删除作品
          </p>
          <p>
            "{{worksList[0].name}}"
          </p>
          <div class="deleteBTN">
            <div class="deleteYes">
              删除
            </div>
            <div class="deleteNo" @click="isDelete=false">
              取消
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import Head from './Head'
import store from '../store/store'
  export default{
    name: 'admin',
    components:{
      Head,
    },
    data(){
      return{
        isDelete:false,
        worksList:[
          {name:'这是标题长长的标题大概这么长',img:require('../assets/img/administrate/show1.png')},
          {name:'这是标题长长的标题大概这么长',img:require('../assets/img/administrate/show2.png')},
          {name:'这是标题长长的标题大概这么长',img:require('../assets/img/administrate/show3.png')},
        ],
      }
    },
    created(){
      store.state.whatBg=false;
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
<style scoped>
.welcome{
  font-family: MSYHL;
  display: flex;
  justify-content: space-between;
  width: 5.74rem;
  margin: 0 auto;
  margin-top: 1.06rem;
  margin-bottom: 0.64rem;
}
.welcome span{
  font-size: 0.36rem;
  color: rgb(153, 153, 153);
}
.uploadWorks{
  width: 2.16rem;
  line-height: .46rem;
  border: solid 0.02rem rgb(55, 140, 255);
  border-radius: 0.21rem;
  font-size: 0.24rem;
  font-family: MSYHL;
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
    font-family: MSYHL;
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
    font-family: MSYHL;
}
.mask{
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.4;
}
.deleteAlert{
  width: 6.05rem;
  height: 4.92rem;
  border-radius: 0.24rem;
  background-color: rgb(255, 255, 255);
  position: absolute;
  top: 22.76%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 11;
}
.deleteContent p:first-child{
  font-size: 0.48rem;
  color:#f36a6a;
  margin-top: 1.25rem;
  margin-left: .78rem;
  margin-bottom: .45rem;
}
.deleteContent p:last-of-type{
  margin-left: .78rem;
  padding-right: .8rem;
  font-size: .36rem;
  color: #999;
}
.deleteYes,.deleteNo{
  font-size: .3rem;
  width: 1.55rem;
  line-height: .46rem;
  text-align: center;
  border-radius: .22rem;
}
.deleteYes{
  background-color: #ff5c64;
  border: solid .03rem #ff5c64;
  color: #fff;
}
.deleteNo{
  border: solid .03rem #808080;
  color: #808080;
}
.close{
  position: absolute;
  top: 0.28rem;
  right: 0.28rem;
  font-size: 0;
}
.close img{
  width: 0.35rem;
  height: 0.35rem;
}
.deleteBTN{
  width: 3.84rem;
  margin: 0 auto;
  margin-top: .5rem;
  display: flex;
  justify-content: space-between;
}
</style>
