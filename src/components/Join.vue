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
          <input type="file" name="avatar" id='upImg' accept="image/*" form="FupForm">
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
                    <p>请选择组别<span class="groupChoiceMsg"> (现不招运营组)</span></p>
                    <div class="choice-buttons">
                      <input type="button" value="前端组" class="active choice-button" />
                      <input type="button" value="后台组" class=" choice-button" />
                      <input type="button" value="设计组" class=" choice-button" />
                      <input type="button" value="运营组" class=" choice-button"  />
                    </div>
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
                  <form name="FupForm" id='FupForm' class="baseMsgForm">
                    <div>
                      <p><span class="star">∗</span>姓名</p>
                      <input type="text" id="Username" name='name'/>
                    </div>
                    <div>
                      <p><span class="star">∗</span>学院专业</p>
                      <input type="text" id="Usercollege" name='academy' />
                    </div>
                    <div>
                      <p><span class="star">∗</span>联系方式</p>
                      <input type="text" id="Usernumber" name="phone" />
                    </div>
                  </form>

                </div>
                <div class="mainForm-content-detailMsg">
                  <div>
                    <p>个人简介</p>
                    <textarea id="signupBrief" placeholder="请在此输入简介" form='FupForm' name="intro"></textarea>
                    <p>个人经历</p>
                    <textarea id="signupBrief" placeholder="请在此输入经历" form="FupForm" name="exper"></textarea>
                  </div>
                </div>
              </div>
            </div>
            <input type="button" value="上一步"  class="previous"/>
            <input type="button" value="下一步" class="next" disabled />
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
<style scoped>
  @import '../assets/css/Join/apply.css';
  @import '../assets/css/Join/bg.css';
  @import '../assets/css/Join/swiper-3.4.2.min.css';
  /*@import '../assets/img/vtmerLogin.ico';*/

</style>
<script>
  import '../assets/js/jq.min';
  import '../assets/js/jquery.parallax.min';
  import '../assets/js/Join/apply1';

</script>
