<template>
  <div id="join">
    <Head></Head>
    <div class="mask"></div>
    <div class="mainbody">
      <div class="upimg">

        <el-upload form="FupForm" id='upImg' name="avatar"
                   class="avatar-uploader"
                   action="https://vtmer.erienniu.xyz/api/sign"
                   :show-file-list="false"
                   :on-change="imgPreview"
                   :auto-upload="false">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <div v-else class="imgDefault">
            <img src="../assets/img/apply/headqinyuan.png" alt="">
            <img src="../assets/img/apply/camera.png" alt="">
          </div>
          <img src="../assets/img/apply/headbg.png" alt="headbg" class="headbg"/>
        </el-upload>
      </div>
      <div class="mainForm">
        <el-steps
          :active="active" finish-status="success" class="mainForm-steps">
          <el-step title="①组别">①组别</el-step>
          <el-step title="②基本信息">②基本信息</el-step>
          <el-step title="③详细信息">③详细信息</el-step>
        </el-steps>

        <div class="groupChoice" v-if="active === 0">组别</div>
        <div class="basicInfo" v-if="active === 1">基本信息</div>
        <div class="detailInfo" v-if="active === 2">详细信息</div>


        <div class="mainForm-contains"></div>
        <div class="mainForm-buttons">
          <el-button style="margin-top: 12px;" @click="prev" v-if="active === 1||active === 2">上一步</el-button>
          <el-button style="margin-top: 12px;" @click="next" v-if="active === 0||active === 1">下一步</el-button>
          <el-button style="margin-top: 12px;" @click="finish" v-if="active === 2">完成</el-button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Head from './Head'
  import store from '../store/store'
  export default {
    name: 'join',
    created(){
      store.state.whatBg=false;
    },
    data() {
      return {
        imageUrl:'',
        active: 0,
      }
    },
    methods: {
      /*图片上传*/
      imgPreview(file){
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        this.file = file.raw;
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      prev(){
        --this.active;
        if(this.active < 0) this.active = 0;
      },
      /*下一步*/
      next() {
        //++this.active;
        if (this.active++ > 2) this.active = 0;
      },
      /*完成*/
      finish(){

      },
    },

    components:{
      Head,
    },
  }
</script>

<style lang="less" src="../assets/css/joinpage.less">

</style>
