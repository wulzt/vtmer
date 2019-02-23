<template>
  <div id="works">
    <div class="mainForm">
      <el-steps
        :active="active" finish-status="success" class="mainForm-steps">
        <el-step title="选择组别"></el-step>
        <el-step title="基本信息"></el-step>
        <el-step title="详细信息"></el-step>
      </el-steps>

      <div class="mainForm-contains">
        <div class="groupChoice mainForm-page" v-if="active === 1">
          <p>请选择你想加入的组别</p>

          <el-tabs v-model="activeName.toString()" @tab-click="handleClick" class="grouphead">

            <el-tab-pane label="前端组" name="1" class="groupInfo">
              通过html，css，javascript以及衍生出来的各种库（
              jQuery/bootstrap/animate）、框架（AngularJS/
              vue.js/React.js）、解决方案来实现互联网产品的用
              户界面交互。<br>
              致力于为用户呈现更优美的页面，更流畅的交互。<br>
              ......还有，在前台给UI和后台端茶递水。
            </el-tab-pane>
            <el-tab-pane label="后台组" name="2" class="groupInfo">
              PHP是世界上最好的语言，我们使用Linux系统做开发，
              自主搭建开发环境，致力于构建Web后台API，git，Laravel,
              Composer组合使用，SQL，NoSQL灵活应用，时刻掌握第一手数据。<br>
              (ps:给前端做苦力)
            </el-tab-pane>
            <el-tab-pane label="设计组" name="3" class="groupInfo">
              我们以Ps、Ai等设计软件为画笔，画出内心构想的设计蓝图，属于夜晚较为活泼的物种。<br>
              我们爱设计，爱生活，爱天马行空的想象。
              熬了无数的夜晚就是希望自己的作品能打动观看者的心。<br>
              爱，便义无反顾。
            </el-tab-pane>
            <el-tab-pane label="运营组" name="4" class="groupInfo">
              我们的身影出现于产品策划，产品研发和产品维护等每一个流程，伴随产品一起发展。<br>
              运营组要做的事可能但不止于产品的策划、测试、
              优化方案、推广方案的策划、用户的沟通等等。<br>
              总结的来说就是：运营的执行者，产品的设计者、体验师和维护者。
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="basicInfo mainForm-page" v-if="active === 2">基本信息</div>
        <div class="detailInfo mainForm-page" v-if="active === 3">详细信息</div>
      </div>


      <div class="mainForm-buttons">
        <el-button style="" @click="prev" v-if="active === 2||active === 3">上一步</el-button>
        <el-button v-if="active === 1" style="opacity: 0;" disabled></el-button>
        <el-button style="" @click="next" v-if="active === 1||active === 2">下一步</el-button>
        <el-button style="" @click="finish" v-if="active === 3">完成</el-button>
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
        active: 1,
        activeName: 1,
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
      handleClick(tab, event) {
        console.log(tab, event);
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
<style lang="less">
@import "../assets/css/work";
</style>
