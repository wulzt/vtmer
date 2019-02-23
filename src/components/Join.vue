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
          <el-step title="选择组别"></el-step>
          <el-step title="基本信息"></el-step>
          <el-step title="详细信息"></el-step>
        </el-steps>

        <div class="mainForm-contains">
          <div class="groupChoice mainForm-page" v-if="active === 1" :class="pageAppear.groupChoice">
            <p>请选择你想加入的组别</p>

            <el-tabs v-model="formLabelAlign.group" @tab-click="groupChange" class="grouphead">

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
          <div class="basicInfo mainForm-page" v-if="active === 2" :class="pageAppear.basicInfo">

            <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign"
                     ref="formLabelAlign" :rules="rules" class="FupForm">

              <el-row  style="margin-bottom: 10px">
                <el-col :span="10"><!--9.775-->
                  <el-form-item label="姓名"
                                prop="name" :rules="[{ required: true, message: '姓名不能为空'}]">
                    <el-input v-model="formLabelAlign.name" id="Username"  form='FupForm' name="name" @change="judgeStatus"></el-input>
                  </el-form-item>
                </el-col>

                <el-col class="line" :span="4" style="opacity: 0">---</el-col><!--4.480-->

                <el-col :span="10">
                  <el-form-item label="性别" class="nopadding" :rules="[{required: true}]">
                    <el-radio-group v-model="formLabelAlign.gender" @change="judgeStatus" form="FupForm" name="gender">
                      <el-radio label="1">
                        <i class="iconfont icon-girl"></i>
                      </el-radio>
                      <el-radio label="2">
                        <i class="iconfont icon-boy"></i>
                      </el-radio>
                    </el-radio-group>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-form-item label="学院专业" class="el-form-item23"
                            prop="major" :rules="[{required: true,message: '学院专业不能为空'}]">
                <el-input v-model="formLabelAlign.major" form="FupForm" name="major" @change="judgeStatus"></el-input>
              </el-form-item>
              <el-form-item label="联系方式" class="el-form-item23"
                            prop="contact" >
                <el-input v-model.number="formLabelAlign.contact" form="FupForm" name="contact" @change="judgeStatus"></el-input>
              </el-form-item>
              <p class="item-form-end">记得上传你的专属头像</p>

            </el-form>
          </div>
          <div class="detailInfo mainForm-page showFromLeft" v-if="active === 3">
            <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">

              <el-form-item label="个人简介" class="el-form-item45">
                <el-input type="textarea" v-model="formLabelAlign.description" @change="judgeDetails" class="FupForm" form="FupForm" name="description"></el-input>
              </el-form-item>

              <el-form-item label="个人经历" class="el-form-item45">
                <el-input type="textarea" v-model="formLabelAlign.experience" @change="judgeDetails" form="FupForm" name="experience"></el-input>
              </el-form-item>

              <p class="item-form-end">记得上传你的专属头像</p>
            </el-form>
          </div>
        </div>


        <div class="mainForm-buttons">
          <el-button style="" @click="prev" v-if="active === 2||active === 3" class="prev-btn">上一步</el-button>
          <el-button v-if="active === 1" style="opacity: 0;" disabled></el-button>
          <el-button style="" @click="next" v-if="active === 1||active === 2" class="next-btn" :disabled="btnStatus.btndisable" :class="btnStatus.btnClass">下一步</el-button>
          <el-button style="" @click="finish" v-if="active === 3" class="finish-btn" :disabled="btn2Status.btndisable" :class="btn2Status.btnClass">完成</el-button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Head from './Head'
  import store from '../store/store'
  import '../assets/css/icon/iconfont.css'
  import axios from 'axios';
  export default {
    name: 'join',
    created(){
      store.state.whatBg=false;
    },
    data() {
      var checkContact = (rule,value,callbacks) => {
        if(!value){
          return callbacks(new Error('号码不能为空'));
        }else{
          const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
          if(reg.test(value)){
            callbacks();
          }else{
            return callbacks(new Error('请输入正确的手机号'));
          }
        }
      };
      return {
        imageUrl:'',
        active: 1,
        labelPosition:'top',
        pageAppear:{
          groupChoice:"",
          basicInfo:"showFromLeft"
        },
        btnStatus:{
          btndisable:true,
          btnClass:'',
        },
        btn2Status:{
          btndisable:true,
          btnClass:'',
        },
        formLabelAlign:{
          group: '1',
          name:'',
          gender:'',
          major:'',
          contact:'',
          description:'',
          experience:'',
        },
        rules: {
          contact:[
            {validator: checkContact,trigger: 'blur'},
            {required: true}
          ]
        }
      };

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
      /*组别改变*/
      groupChange(){
        this.btnStatus.btndisable = false;
        this.btnStatus.btnClass = "btn-useable";
      },
      /*上一步*/
      prev(){
        --this.active;
        if(this.active < 0) this.active = 0;
        this.btnStatus.btndisable = false;
        this.btnStatus.btnClass = "btn-useable";
      },
      /*下一步*/
      next() {
        //++this.active;
        if (this.active++ > 2) this.active = 0;
        this.judgeStatus();
        this.judgeDetails();
      },
      /*完成*/
      finish(){
        let User = this.formLabelAlign;
        let upData = new FormData();
        for(let i in User){
          if(i=='gender'||i=='group'){
            upData.append(i,parseInt(User[i]));
          }else{
            upData.append(i,User[i]);
          }
        }
        upData.append("avatar",this.file);

        let self = this
        axios.post('https://vtmer.erienniu.xyz/api/sign', upData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
          .then(function (response) {
            self.$router.push({
              path:'/'
            })
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      judgeStatus(){
        let User = this.formLabelAlign;
        if(User.name == ""||User.gender == ""||User.major == ""||User.contact == ""){
          this.btnStatus.btndisable = true;
          this.btnStatus.btnClass = "";
        }else{
          this.btnStatus.btndisable = false;
          this.btnStatus.btnClass = "btn-useable";
        }
      },
      judgeDetails(){
        let User = this.formLabelAlign;
        if(User.description == ""||User.experience == ""){
          this.btn2Status.btndisable = true;
          this.btn2Status.btnClass = "";
        }else{
          this.btn2Status.btndisable = false;
          this.btn2Status.btnClass = "btn-useable";
        }
      }
    },

    components:{
      Head,
    },
  }
</script>

<style lang="less">
  @import "../assets/css/join";
</style>
