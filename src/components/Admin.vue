<template>
  <div id="admin">
    <div>
      <Head></Head>
      <div class="welcome">
        <span>欢迎回家，VTMER!</span>
        <input class="uploadWorks" name="uploadWorks" type="button" value="上传作品" @click="upload">
      </div>
      <ul class="worksList">
        <li class="workItem" v-for="(item,index) in worksList">
          <img :src="item.image"/>
          <div class="workCon">
            <p>
              {{item.name}}
            </p>
            <input id="editWo" name="editWo" type="button" value="编辑" @click="editWo(index)">
            <input id="deleteWo" name="deleteWo" type="button" value="删除" @click="deleteWo(index)">
          </div>
        </li>
      </ul>

    </div>
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
            "{{worksList[currentIndex].name}}"
          </p>
          <div class="deleteBTN">
            <el-button class="deleteYes" @click="dddddelete()">
              删除
            </el-button>
            <el-button class="deleteNo" @click="isDelete=false">
              取消
            </el-button>
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
    inject:['reload'],
    components:{
      Head,
    },
    data(){
      return{
        isDelete:false,
        worksList:[],
        currentIndex:-1,
        deleteId:-1,
      }
    },
    mounted(){
      store.state.whatBg=false;
      store.state.editItem='';
      this.axios.get('https://vtmer.erienniu.xyz/api/list')
        .then(res => {
          // 成功回调
          this.worksList = res.data.data
        }, res => {
          // 错误回调
          console.log(res);
        })
    },
    methods:{
      upload(){
        this.$router.push({
          path:'/upload',
        })
      },
      editWo(index){
        store.state.editItem = this.worksList[index]
        this.$router.push({
          path:'/upload',
        })
      },
      deleteWo(index){
        this.isDelete = true
        this.currentIndex = index
        this.deleteId = this.worksList[index].id
      },
      dddddelete(){
        this.axios.get('https://vtmer.erienniu.xyz/api/delete/'+this.deleteId)
          .then(res => {
            // 成功回调
            this.isDelete=false
            this.reload()
          }, res => {
            // 错误回调
            console.log(res);
          })
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
  width: 3.94rem;
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
  position: fixed;
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
  position: fixed;
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
