<template>
  <div class="homeContent">
      <div id="header">
          <img alt="LOGO" class="LOGO" src="../assets/img/LOGO.png"/>
          <a class="content-login" href="#">
              <img alt="login" id="loginBtn" src="../assets/img/home/BTN-LOG1.png"/>
          </a>
      </div>
      <div class="content-center">
          <img alt="bigVtmLogo" src="../assets/img/home/SLOGAN.png"/>
          <div class="content-BTNlogin">
              <router-link :to="{ name: 'works' }" id="openBtn">打开作品</router-link>
          </div>
          <div class="content-BTNsignup">
              <router-link :to="{ name: 'join' }" id="signupBtn">加入我们</router-link>
          </div>
      </div>
  </div>

</template>
<style >
@import "../assets/css/homepage.css";

</style>
