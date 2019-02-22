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
  .mainForm{
    position: absolute;
    width: 5.85rem;
    height: 8.53rem;
    background-color: #c0c0c0;
    z-index: 11;
    margin-top: 0.815rem;
    /**/
    margin-left: 50%;
    transform: translate(-50%,0);
    /**/
    .mainForm-steps{
      font-size: 0.257rem;
      width: 5.14rem;
      height: 0.34rem;
      line-height: 0.34rem;
      margin: 0.42rem auto 0;

      .el-step__line{
        display: none;
      }
      .el-step__icon{
        display: none;
      }
      .el-step__title{
        font-size: 0.257rem;
        line-height: 0.34rem;
      }
      .el-step__title.is-wait{
        color: rgb(236,236,236);
      }
      .el-step__title.is-process{
        color: rgb(236,236,236);
      }
      .el-step__title.is-success{
        color: rgb(56,51,51);
      }
      .el-step:first-child .el-step__title:before{
        content: '①';
        color: rgb(236,236,236);
      }
      .el-step:nth-child(2) .el-step__title:before{
        content: '②';
        color: rgb(236,236,236);
      }
      .el-step:last-child .el-step__title:before{
        content: '③';
        color: rgb(236,236,236);
      }

      .el-step:nth-child(2) .el-step__title::after{
        content: '>>';
        position: absolute;
        color: rgb(236,236,236);
        left: -0.423rem;
        line-height: 0.34rem;
      }
      .el-step:last-child .el-step__title::after{
        content: '>>';
        position: absolute;
        color: rgb(236,236,236);
        left: -0.423rem;
        line-height: 0.34rem;
      }
      .el-step:nth-child(2) .el-step__title.is-success:after{
        content: '>>';
        position: absolute;
        color: rgb(56,51,51);
        left: -0.423rem;
        line-height: 0.34rem;
      }
      .el-step:last-child .el-step__title.is-success::after{
        content: '>>';
        position: absolute;
        color: rgb(56,51,51);
        left: -0.423rem;
        line-height: 0.34rem;
      }
      .el-step:first-child .el-step__title.is-success:before{
        content: '①';
        color: rgb(36,171,80);
      }
      .el-step:nth-child(2) .el-step__title.is-success:before{
        content: '②';
        color: rgb(36,171,80);
      }
      .el-step:last-child .el-step__title.is-success:before{
        content: '③';
        color: rgb(36,171,80);
      }
    }
    .mainForm-contains{
      font-size: 0.24rem;
      width: 4.91rem;
      height: 4.73rem;
      margin: 0.55rem auto 0;
      .mainForm-page{

      }
      .groupChoice{
        p{
          margin: 0.11rem auto 0;
          color: rgb(56,51,51);
          font-size: 0.24rem;
        }
        .grouphead{
          margin: 0.45rem auto 0;
          width: 4.86rem;
          height: 0.42rem;
          .el-tabs__header{
            .el-tabs__nav-wrap{
              padding: 0;
              .el-tabs__nav-prev{/*display: none*/}
              .el-tabs__nav-next{/*display: none*/}
              .el-tabs__nav-scroll{
                .el-tabs__nav{
                  .el-tabs__active-bar{
                    display: none;
                  }
                  .el-tabs__item{
                    width: 1.04rem;
                    height: 0.43rem;
                    font-size: 0.237rem;
                    line-height: 0.43rem;
                    padding: 0;
                    text-align: center;
                    color: rgb(118,178,253);
                    border: 0.01rem solid rgb(118,178,253);
                    background-color: #fff;
                    border-radius: 1rem;
                    margin-left: 0.233333rem;
                  }
                  .el-tabs__item:nth-child(2){
                    margin-left: 0;
                  }
                  .el-tabs__item.is-active{
                    color: #fff;
                    background-color: rgb(118,178,253);
                  }
                }
              }
              &::after{
                display: none;
              }
            }
          }
        }
        .groupInfo{
          /*margin: 0.51rem auto 0;*/
          width: 4.86rem;
          height: 4.73rem;
          font-size: 0.21rem;
          color: rgb(98,101,105);
          line-height: 0.49rem;
        }
      }
    }
    .mainForm-buttons{
      position: relative;
      font-size: 0.25rem;
      width: 4.62rem;
      height: 0.5rem;
      margin: 0.39rem auto 0;
      .el-button{
        width: 1.5rem;
        height: 0.49rem;
        color: rgb(51,208,102);
        border: 0.01rem solid rgb(51,208,102);
        border-radius: 0.17rem;
        line-height: 0.49rem;
        padding: 0;
      }
      .el-button:last-child{
        position: absolute;
        right: 0;
      }
      .el-button:first-child{
        position: absolute;
        left: 0;
      }
    }
  }
</style>
