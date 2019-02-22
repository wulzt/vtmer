<template>
  <div class="homeContent">
      <div id="header">
          <img alt="LOGO" class="LOGO" src="../assets/img/LOGO.png"/>
          <a class="content-login" href="#" @click="isLogin=true">
              <img alt="login" id="loginBtn" src="../assets/img/home/BTN-LOG1.png"/>
          </a>
      </div>
      <div class="content-center">
          <img alt="bigVtmLogo" src="../assets/img/home/SLOGAN.png"/>
          <div class="content-BTNlogin" @click="changeBg">
              <router-link :to="{ name: 'works' }" id="openBtn">打开作品</router-link>
          </div>
          <div class="content-BTNsignup">
              <router-link :to="{ name: 'join' }" id="signupBtn">加入我们</router-link>
          </div>
      </div>
      <div class="loginBox" v-if="isLogin">
        <div class="mask"></div>
        <div class="alertBox" v-bind:class="{moveIn:this.isLogin}">
          <div class="close" @click="isLogin=flase">
            <img src="../assets/img/home/close.png" />
          </div>
          <div class="alertBoxContent">
            <img src="../assets/img/home/logo.png" />
            <p>
              管理员登录
            </p>
            <div class="loginForm">
              <input id="useremail" name="yourname" placeholder="账号" type="text">
              <input id="psw" name="yourpassword" placeholder="密码" type="password">
              <div class="errorMsg" v-if="loginFalse">
                <p>
                  登录失败！请检查帐号密码。
                </p>
              </div>
              <input id="submitBTN" name="submitBTN" type="button" value="登录" @click="login">
            </div>
          </div>
        </div>
      </div>
  </div>

</template>
<script>
import store from '../store/store'
  export default{
    data(){
      return{
        isLogin: false,
        loginFalse: false,
      }
    },
    methods:{
      login(){
        store.state.whatBg=false
        this.$router.push({
          path:'/admin',
        })
      },
      changeBg(){
        store.state.whatBg=false
      }
    }
  }
</script>
<style src="../assets/css/homepage.css" scoped>
</style>
