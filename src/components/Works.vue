<template>
  <div id="works">
    <!--<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" style="display: none">

      <el-row :gutter="20" style="margin-bottom: 10px">
        <el-col :span="10">
          <el-form-item label="*姓名">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2"></el-col>
        <el-col :span="10">
          <el-form-item label="*性别">
            <el-radio-group v-model="formLabelAlign.sex">
              <el-radio label="男">
                <i class="iconfont icon-girl"></i>
              </el-radio>
              <el-radio label="女">
                <i class="iconfont icon-boy"></i>
              </el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item label="*学院专业">
        <el-input v-model="formLabelAlign.major"></el-input>
      </el-form-item>
      <el-form-item label="*联系方式">
        <el-input v-model="formLabelAlign.phone"></el-input>
      </el-form-item>
      <el-form-item label="记得上传你的专属头像"></el-form-item>

    </el-form>

    <div class="mainForm-content">
      <div class="groupChoice">
        <p class="groupChoiceHead">请选择你想加入的组别</p>

        <el-tabs v-model="activeGroup" @tab-click="handleClick" class="choice-buttons">
          <el-tab-pane label="前端组" name="1" class="">
            <p> 通过html，css，javascript以及衍生出来的各种库（jQuery/bootstrap/animate）、框架（AngularJS/vue.js/React.js）、解决方案来实现互联网产品的用户界面交互。<br>致力于为用户呈现更优美的页面，更流畅的交互。
              <br>......还有，在前台给UI和后台端茶递水。 
            </p>
          </el-tab-pane>
          <el-tab-pane label="后台组" name="2">
            <p> PHP是世界上最好的语言，我们使用Linux系统做开发，自主搭建开发环境，致力于构建Web后台API，git，Laravel,Composer组合使用，SQL，NoSQL灵活应用，时刻掌握第一手数据。<br>(ps:给前端做苦力)
            </p>
          </el-tab-pane>
          <el-tab-pane label="设计组" name="3">
            <p>   我们以Ps、Ai等设计软件为画笔，画出内心构想的设计蓝图，属于夜晚较为活泼的物种。<br>
              我们爱设计，爱生活，爱天马行空的想象。熬了无数的夜晚就是希望自己的作品能打动观看者的心。<br>
              爱，便义无反顾。
            </p>
          </el-tab-pane>
          <el-tab-pane label="运营组" name="4">
            <p>
              我们的身影出现于产品策划，产品研发和产品维护等每一个流程，伴随产品一起发展。<br>
              运营组要做的事可能但不止于产品的策划、测试、优化方案、推广方案的策划、用户的沟通等等。<br>
              总结的来说就是：运营的执行者，产品的设计者、体验师和维护者。
            </p>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>-->
      <el-radio-group v-model="radio3" class="choice-buttons">
        <el-radio-button label="1">前端组</el-radio-button>
        <el-radio-button label="2">后台组</el-radio-button>
        <el-radio-button label="3">设计组</el-radio-button>
        <el-radio-button label="4">运营组</el-radio-button>
      </el-radio-group>
  </div>
</template>
<script>
  import '../assets/css/Join/icon/iconfont.css'
  import 'element-ui/lib/theme-chalk/index.css';
  export default {
    data () {
      return {
        radio3: '上海',
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
  };
</script>
<style lang="less">
  .mainForm-content {
    width: 6.826667rem;
    height: 8.333333rem;
    position: absolute;
    left: 50%;
    top: 58%;
    margin: -4.16rem 0 0 -3.413333rem;
    .groupChoice{
      width: 6.3rem;
      margin: 0 auto;
      height: 5.706667rem;
      .groupChoiceHead{
        font-size: 0.32rem;
        margin-bottom: 0.533333rem;
      }
      .choice-buttons {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.533333rem;
      }
    }
  }

  .choice-buttons {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.533333rem;
  }
  .el-radio-button{
    margin: 0;
    padding: 0;
    .el-radio-button__orig-radio:checked+.el-radio-button__inner{
      color:#fff;
      background-color: rgb(118,178,253);
      border: 0.013333rem solid rgb(118, 178, 253);
      box-shadow: none;
    }
    .el-radio-button__inner{
      /*position: absolute;
      width: 1.333333rem;
      height: 0.533333rem;
      font-size: 0.293333rem;
      line-height: 0.533333rem;
      text-align: center;
      border-radius: 0.333333rem !important;*/
      border: 0.013333rem solid rgb(118, 178, 253);
      border-left: 0.013333rem solid rgb(118, 178, 253);
      border-radius: 0.333333rem;
      width: 1.333333rem;
      height: 0.533333rem;
      text-align: center;
      line-height: 0.533333rem;
      padding: 0;
    }

  }
  .el-radio-button:first-child .el-radio-button__inner{
    border-radius: 0.333333rem;
  }
  .el-radio-button:last-child .el-radio-button__inner{
    border-radius: 0.333333rem;
  }




  .el-row {
  margin-bottom: 20px;
&:last-child {
   margin-bottom: 0;
 }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.el-form{
  width: 6.186667rem;
  margin: 0 auto;
  height: 5.706667rem;
}
  .el-form-item{
    margin-bottom: 0;
  }
  .el-form-item__label{
    color: #898989;
  }
  .el-radio__inner{
    border: 2px solid rgb(197,197,197);
  }
  .el-radio__input.is-checked .el-radio__inner{
    background-color: white;
    border-color: rgb(197,197,197);
  }
  .el-radio__inner:after{
    background-color: #000;
  }
  .el-radio:first-child i{
    color: rgb(255,122,185);
  }
  .el-radio:last-child i{
    color: rgb(118,178,253);
  }
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-i-girl:before {
    content: "\e936";
  }

  .icon-boy:before {
    content: "\e7bb";
  }
</style>
