<template>
  <div id="join">
    <div id="wrap" class="mmm">
      <div id="header">
        <img class="LOGO" src="../assets/img/LOGO.png" alt="vtmer">
        <router-link :to="{ name: 'home' }" class="BTN-HOME"><img src="../assets/img/BTN-HOME.png" alt="hmoe"/></router-link>
      </div>
      <div class="mainbody">
        <div class="upimg">
          <img src="../assets/img/apply/headbg.png" alt="headbg" />
          <img src="../assets/img/apply/headqinyuan.png" height="640" width="640" alt="userimg" id="userimg" />
          <img src="../assets/img/apply/camera.png" height="62" width="62" alt="camera" id="camera"/>
          <!--<input type="file" name="avatar" id='upImg' accept="image/*" form="FupForm">-->
          <el-upload form="FupForm" id='upImg' name="avatar"
          class="avatar-uploader"
          action="https://vtmer.erienniu.xyz/api/sign"
          :show-file-list="false"
          :on-change="imgPreview"
          :auto-upload="false">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
          </el-upload>
        </div>

        <div class="mainForm">
          <div class="mainForm-content">
            <div class="mainForm-content-menu">
              <div>
                <span class="menu-number menu-number-active">①</span>
                <span class="menu-text menu-active">选择组别</span>
                <span class="menu-symbol">&gt;&gt;</span>

                <span class="menu-number">②</span>
                <span class="menu-text" >基本信息</span>
                <span class="menu-symbol">&gt;&gt;</span>

                <span class="menu-number">③</span>
                <span class="menu-text">详细信息</span>
              </div>
            </div>
            <div class="mainForm-content-banner">
              <div class="banner-list" >
                <div class="mainForm-content-groupChoice" >
                  <div>
                    <p>请选择你想加入的组别</p><!--<span class="groupChoiceMsg"> (现不招运营组)</span>-->
                    <div class="choice-buttons" v-model="formLabelAlign.group">
                      <input type="button" value="前端组" class=" choice-button" group="1"/>
                      <input type="button" value="后台组" class=" choice-button" group="2"/>
                      <input type="button" value="设计组" class=" choice-button" group="3"/>
                      <input type="button" value="运营组" class=" choice-button" group="4"/>
                    </div>
                    <!--<el-radio-group v-model="formLabelAlign.group" class="choice-buttons">
                      &lt;!&ndash;<el-radio-button label="1" class="choice-button" @click.native="chooseGroup($event)">前端组</el-radio-button>
                      <el-radio-button label="2" class="choice-button" @click.native="chooseGroup($event)">后台组</el-radio-button>
                      <el-radio-button label="3" class="choice-button" @click.native="chooseGroup($event)">设计组</el-radio-button>
                      <el-radio-button label="4" class="choice-button" @click.native="chooseGroup($event)">运营组</el-radio-button>&ndash;&gt;
                      &lt;!&ndash;<el-radio-button v-for="(index,item)in groupList" :label="index" class="choice-button" @click.native="chooseGroup($event)">{{item.message}}</el-radio-button>&ndash;&gt;
                      &lt;!&ndash;<el-radio-button v-for="(item,index) in groupList"  :label="index" :id="index" class="choice-button" @click.native.prevent="chooseGroup($event)">{{item}}</el-radio-button>&ndash;&gt;
                    </el-radio-group>-->
                    <div class="choice-introduce">
                      <div class="choice-introduce-active"><p> 通过html，css，javascript以及衍生出来的各种库（jQuery/bootstrap/animate）、框架（AngularJS/vue.js/React.js）、解决方案来实现互联网产品的用户界面交互。<br>致力于为用户呈现更优美的页面，更流畅的交互。
                        <br>......还有，在前台给UI和后台端茶递水。 
                      </p></div>
                      <div><p> PHP是世界上最好的语言，我们使用Linux系统做开发，自主搭建开发环境，致力于构建Web后台API，git，Laravel,Composer组合使用，SQL，NoSQL灵活应用，时刻掌握第一手数据。<br>(ps:给前端做苦力)
                      </p></div>
                      <div><p>   我们以Ps、Ai等设计软件为画笔，画出内心构想的设计蓝图，属于夜晚较为活泼的物种。<br>
                        我们爱设计，爱生活，爱天马行空的想象。熬了无数的夜晚就是希望自己的作品能打动观看者的心。<br>
                        爱，便义无反顾。
                      </p></div>
                      <div><p>
                        我们的身影出现于产品策划，产品研发和产品维护等每一个流程，伴随产品一起发展。<br>
                        运营组要做的事可能但不止于产品的策划、测试、优化方案、推广方案的策划、用户的沟通等等。<br>
                        总结的来说就是：运营的执行者，产品的设计者、体验师和维护者。
                      </p></div>
                    </div>
                  </div>
                </div>
                <div class="mainForm-content-baseMsg">

                  <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" id="FupForm">

                    <el-row :gutter="20" style="margin-bottom: 10px">
                      <el-col :span="10">
                        <el-form-item label="*姓名">
                          <el-input v-model="formLabelAlign.name" id="Username"  form='FupForm' name="name"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col class="line" :span="2"></el-col>
                      <el-col :span="10">
                        <el-form-item label="*性别">
                          <el-radio-group v-model="formLabelAlign.gender" id="UserSex">
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

                    <el-form-item label="*学院专业">
                      <el-input v-model="formLabelAlign.major" id="Usercollege" form='FupForm' name="major"></el-input>
                    </el-form-item>
                    <el-form-item label="*联系方式">
                      <el-input v-model="formLabelAlign.contact" id="Usernumber" form='FupForm' name="contact"></el-input>
                    </el-form-item>
                    <el-form-item label="记得上传你的专属头像"></el-form-item>

                  </el-form>


                </div>
                <div class="mainForm-content-detailMsg">
                  <div>
                    <p>个人简介</p>
                    <textarea id="signupBrief" placeholder="请在此输入简介" form='FupForm' name="description"></textarea>
                    <p>个人经历</p>
                    <textarea id="signupBrief" placeholder="请在此输入经历" form="FupForm" name="experience"></textarea>
                  </div>
                </div>
              </div>
            </div>
            <input type="button" value="上一步"  class="previous" @click="previousStep"/>
            <input type="button" value="下一步" class="next" @click="nextStep" disabled/>
          </div>
        </div>
      </div>
    </div>
    <!-- 背景 -->
    <div class="BgContain">
      <ul class="scene" id="S1" data-scalar-x="38" data-scalar-y="38">
        <li class="layer" data-depth="0.60" id='bg1'><img src="../assets/img/bg1.png"></li>
      </ul>
      <ul class="scene" id="S2" data-scalar-x="38" data-scalar-y="38">
        <li class="layer" data-depth="0.60" id='bg2'><img src="../assets/img/bg7.png"></li>
      </ul>
      <ul class="scene" id="S3" data-scalar-x="38" data-scalar-y="38">
        <li class="layer" data-depth="0.40" id='bg3'><img src="../assets/img/bg3.png"></li>
      </ul>
      <ul class="scene" id="S4" data-scalar-x="38" data-scalar-y="38">
        <li class="layer" data-depth="0.60" id='bg4'><img src="../assets/img/bg6.png"></li>
      </ul>
      <ul class="scene" id="S5" data-scalar-x="38" data-scalar-y="38">
        <li class="layer" data-depth="0.80" id='bg5'><img src="../assets/img/bg4.png"></li>
      </ul>
      <ul class="scene" id="S6" data-scalar-x="38" data-scalar-y="38">
        <li class="layer" data-depth="1.00" id='bg6'><img src="../assets/img/bg9.png"></li>
      </ul>
      <ul class="scene" id="S7" data-scalar-x="28" data-scalar-y="28">
        <li class="layer" data-depth="1.00" id='bg7'><img src="../assets/img/bg11.png"></li>
      </ul>
      <ul class="scene" id="S8" data-scalar-x="28" data-scalar-y="28">
        <li class="layer" data-depth="0.60" id='bg4'><img src="../assets/img/bg10.png"></li>
      </ul>
      <ul class="scene" id="S9" data-scalar-x="28" data-scalar-y="28">
        <li class="layer" data-depth="0.80" id='bg5'><img src="../assets/img/bg8.png"></li>
      </ul>
      <ul class="scene" id="S10" data-scalar-x="28" data-scalar-y="28">
        <li class="layer" data-depth="1.00" id='bg6'><img src="../assets/img/bg2.png"></li>
      </ul>
      <ul class="scene" id="S11" data-scalar-x="28" data-scalar-y="28">
        <li class="layer" data-depth="1.00" id='bg6'><img src="../assets/img/bg12.png"></li>
      </ul>
      <ul class="scene" id="S12" data-scalar-x="28" data-scalar-y="28">
        <li class="layer" data-depth="1.00" id='bg6'><img src="../assets/img/bg5.png"></li>
      </ul>
    </div>
    <!-- Loading提交 -->
    <div class="LoadingWrap">
      <div class="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>


<script>
  import '../assets/js/jq.min';
  import '../assets/js/jquery.parallax.min';
  import '../assets/js/Join/apply1';
  import '../assets/css/Join/icon/iconfont.css'
  import 'element-ui/lib/theme-chalk/index.css';
  import '../assets/css/Join/apply.css';
  import Axios from "axios"
  export default {

    data() {
      return {
        imageUrl:'',
        labelPosition: 'top',
        formLabelAlign: {
          name:'',
          gender:'',
          major: '',
          contact: '',
          group: '',
        },
        /*groupList:[
          "前端组",
          "后台组",
          "设计组",
          "运营组",
        ],*/
      };
    },
    methods:{
      imgPreview(file){
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        this.file = file.raw;
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      chooseGroup(myev) {
        //myev.preventDefault();
        var i = myev.currentTarget.id;
        //nav选中状态的切换
        $(this).addClass('active').siblings().removeClass('active');
        //已选中的div动态进入
        $(".choice-introduce>div").addClass('choice-introduce-active').eq(i).siblings().removeClass('choice-introduce-active');
        //if (i !== 0) {
        $('.next').css({
          'background': 'rgb(51, 208, 102)',
          'border': '1px solid rgb(51, 208, 102)'
        }).removeAttr('disabled', "false");
        $('.groupChoiceMsg').html('');
        //} else {
        /*$('.next').css({
        'background': 'rgba(153, 153, 153, 0.8)',
        'border': '1px solid rgba(153, 153, 153, 0.8)'
    }).attr('disabled', "true");*/
        //$('.groupChoiceMsg').html(' (现不招' + this.value + ')');
        //}
      },
      myAddSwitch(i) {
    $('.menu-symbol').eq(i).addClass('menu-active');
    $('.menu-text').eq(i + 1).addClass('menu-active');
    $('.menu-number').eq(i + 1).addClass('menu-number-active');
    $(".banner-list").animate({
      left: '-=6.56rem'
    }, "fast");
  },
      myRemoveSwitch(i) {
        $('.menu-symbol').eq(i).removeClass('menu-active');
        $('.menu-text').eq(i + 1).removeClass('menu-active');
        $('.menu-number').eq(i + 1).removeClass('menu-number-active');
        $(".banner-list").animate({
          left: '+=6.56rem'
        }, "fast");
      },
      conpeletedAlert() {
        $('body').append('<div id="mask"></div>').append(' <div id="completedAlert"class="moveIn "><img src="img/关闭.png" alt="关闭按钮" id="close1"/><div class="completedAlertContent"><p >提交成功<br />我们期待你的加入</p><div class="completedAlertBtns"><input type="button" class="zhuyeBtn" value="确定" /></div></div></div>');
        $('#close1').click(function(event) {
          $(this).parent().siblings('#mask').remove();
          $(this).parent().remove();
        });
        /* $('.cancleBtn').click(function(event) {
            $(this).parent().parent().parent().siblings('#mask').remove();
            $(this).parent().parent().parent().remove();
        });*/
        $('.zhuyeBtn').click(function(event) {
          window.open('index.html', '_self');
          $(this).parent().parent().parent().siblings('#mask').remove();
          $(this).parent().parent().parent().remove();
        });
      },
      repeatedAlert() {
        $('body').append('<div id="mask"></div>').append(' <div class="repeatedAlert moveIn"><img src="img/关闭.png" alt="关闭按钮" id="close2"/><div class="repeatedAlertContent"><p >重复提交<br />请耐心等待面试通知</p><div class="repeatedAlertBtns"><input type="button" class="zhuyeBtn2" value="主页" /></div></div></div>');
        $('#close2').click(function(event) {
          $(this).parent().siblings('#mask').remove();
          $(this).parent().remove();
        });
        $('.cancleBtn2').click(function(event) {
          $(this).parent().parent().parent().siblings('#mask').remove();
          $(this).parent().parent().parent().remove();
        });
        $('.zhuyeBtn2').click(function(event) {
          window.open('index.html', '_self');
          $(this).parent().parent().parent().siblings('#mask').remove();
          $(this).parent().parent().parent().remove();
        });
      },
      tryAlert() {
        $('body').append('<div id="mask"></div>').append(' <div class="repeatedAlert moveIn"><img src="img/关闭.png" alt="关闭按钮" id="close2"/><div class="repeatedAlertContent"><p >诶？有点小问题<br />请重新试试吧</p><div class="repeatedAlertBtns"><input type="button" class="repeatBtn" value="重试" /><input type="button" class="cancleBtn2" value="返回" /></div></div></div>');
        $('#close2').click(function(event) {
          $(this).parent().siblings('#mask').remove();
          $(this).parent().remove();
        });
        $('.cancleBtn2').click(function(event) {
          $(this).parent().parent().parent().siblings('#mask').remove();
          $(this).parent().parent().parent().remove();
        });
        $('.repeatBtn').click(function(event) {
          $(this).parent().parent().parent().siblings('#mask').remove();
          $(this).parent().parent().parent().remove();
          this.myAjax();
        });
      },
      phoneAlert() {
        $('body').append('<div id="mask"></div>').append(' <div class="repeatedAlert moveIn"><img src="img/关闭.png" alt="关闭按钮" id="close2"/><div class="repeatedAlertContent"><p >手机号码有误<br />请再仔细检查一下吧</p><div class="repeatedAlertBtns"><input type="button" class="repeatBtn" value="好的" /><input type="button" class="cancleBtn2" value="返回" /></div></div></div>');
        $('#close2').click(function(event) {
          $(this).parent().siblings('#mask').remove();
          $(this).parent().remove();
        });
        $('.cancleBtn2').click(function(event) {
          $(this).parent().parent().parent().siblings('#mask').remove();
          $(this).parent().parent().parent().remove();
        });

        $('.repeatBtn').click(function(event) {
          $(this).parent().parent().parent().siblings('#mask').remove();
          $(this).parent().parent().parent().remove();
          myRemoveSwitch(1);
          $('.next').attr({
            'value': '下一步',
          }).removeAttr("id");
        });
      },
      nextStep(){
          if ($('.menu-active').length == 1) {
            this.myAddSwitch(0);
            $('.previous').css({
              display: 'block'
            });
            $('.next').attr('disabled', "true");
            //判断当前为组别选择
          } else if ($('.menu-active').length == 3) {
            this.myAddSwitch(1);
            $(".next").attr({
              'value': '完成',
              'id': 'completed'
            });
            //判断当前为基本内容
          } else if ($('.menu-active').length == 5) {
            if (reg.test($.trim($('#Usernumber').val())) == false) {
              this.phoneAlert();

            } else {
              this.myAjax();
            }
          }
        },
      previousStep(){
      if ($('.menu-active').length == 5) {
        this.myRemoveSwitch(1);
        $('.next').attr({
          'value': '下一步',
        }).removeAttr("id"); //判断当前为详细信息
      } else if ($('.menu-active').length == 3) {
        this.myRemoveSwitch(0);
        $(".previous").css({
          display: 'none'
        }); //判断当前为基本内容
        $('.next').removeAttr('disabled', "true");
      }
    },
      myAjax() {
    $('.LoadingWrap').fadeIn();
    var UpData = new FormData(document.getElementById('FupForm')),
      oChoiceGroup = document.getElementsByClassName('active')[0].getAttribute("group");

    UpData.append("group", oChoiceGroup);
    UpData.append("gender", this.formLabelAlign.gender);
    UpData.append("avatar",this.file);
    //let updata2 = new FormData();

        /*Axios.post('https://vtmer.erienniu.xyz/api/sign',
          {
              UpData
          })
          .then(function(res){
            console.log(res);
          }).catch(function(err){
          console.log(err);
        });*/
        Axios.post('https://vtmer.erienniu.xyz/api/sign', UpData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
          .then(function (res) {
            console.log(res.data + ':' + res.code);
            if(res.code == 5001){
              this.repeatedAlert();
              document.getElementById('FupForm').reset();
            }else {
              document.getElementById('FupForm').reset();
            }
            $('.LoadingWrap').fadeOut();
          })
          .catch(function (error) {
            console.log(error.data + ":" + error.code);
            this.tryAlert();
            console.log(err);
            $('.LoadingWrap').fadeOut();
          });
    //Ajax
    /*$.ajax({
      url: 'https://vtmer.erienniu.xyz/api/sign',
      type: 'POST',
      data: UpData,
      contentType: false,
      processData: false,
      success: function(data, status) {
        console.log(data + ':' + data.code);
        if (data.code == 5001) {
          this.repeatedAlert();
          document.getElementById('FupForm').reset();
          /!*$('#userimg').attr('src', 'img/apply/camera.png');
          this.myRemoveSwitch(1);
          this.myRemoveSwitch(0);*!/
        } else {
          //this.conpeletedAlert();
          document.getElementById('FupForm').reset();
          /!*$('#userimg').attr('src', 'img/apply/camera.png');*!/
          /!*this.myRemoveSwitch(1);
          this.myRemoveSwitch(0);
*!/
        }
        $('.LoadingWrap').fadeOut();
      },
      fail: function(err, status) {
        this.tryAlert();
        console.log(err);
        $('.LoadingWrap').fadeOut();
      }
    });*/
  }
    }
  }
  var reg = /^1[3|4|5|7|8][0-9]{9}$/;

</script>

<style lang="less">

  @import '../assets/css/Join/bg.css';
  @import '../assets/css/Join/swiper-3.4.2.min.css';

  /*@import '../assets/img/vtmerLogin.ico';*/
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  /*照片选择*/
  .avatar-uploader .el-upload {
   cursor: pointer;
   overflow: hidden;

   width: 2.16rem;
   height: 2.16rem;
   border-radius: 50%;
   position: absolute;
   z-index: 4;
 }
 .avatar {
   width: 1.88rem;
   height: 1.88rem;
   position: absolute;
   border-radius: 50%;
   z-index: 2;
   left: 50%;
   top: 50%;
   margin: -0.94rem 0 0 -0.94rem;
 }
/*组别选择*/
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
    .el-radio-button__orig-radio{
      box-shadow: none;
    }
    .el-radio-button__inner{
      border: 0.013333rem solid rgb(118, 178, 253);
      border-left: 0.013333rem solid rgb(118, 178, 253);
      border-radius: 0.333333rem;
      width: 1.333333rem;
      height: 0.533333rem;
      text-align: center;
      line-height: 0.533333rem;
      padding: 0;
      color: rgb(118,178,253);
      box-shadow: none;
    }

  }
  .el-radio-button:first-child .el-radio-button__inner{
    border-radius: 0.333333rem;
  }
  .el-radio-button:last-child .el-radio-button__inner{
    border-radius: 0.333333rem;
  }

/*表单*/
  .el-form{
    width: 6.186667rem;
    margin: 0 auto;
    height: 5.706667rem;
  }
  .el-form-item{
    margin-top: -0.4rem;
    margin-bottom: -0.15rem;
  }
  .el-form-item:first-child{
    margin-top: -0.3rem;
  }
  .el-form-item__label{
    color: #898989 !important;
    font-size: 0.28rem;
    margin-bottom:-0.5rem;
  }
  .el-radio__inner{
    border: 2px solid rgb(197,197,197) !important;
  }
  .el-radio__input.is-checked .el-radio__inner{
    background-color: white !important;
    border-color: rgb(197,197,197) !important;
  }
  .el-radio__inner:after{
    background-color: #000 !important;
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
