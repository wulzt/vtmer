<template>
  <div class="homeContent">
      <div id="header">
          <img alt="LOGO" class="LOGO" src="../assets/img/LOGO.png"/>
          <div class="content-login" @click="admin()">
              <img alt="login" id="loginBtn" :src="loginBtn"/>
          </div>
      </div>
      <div class="content-center">
          <img alt="bigVtmLogo" src="../assets/img/home/SLOGAN.png"/>
          <div class="content-BTNlogin"  @click="goRouter('works')">
              打开作品
          </div>
          <div class="content-BTNsignup" @click="goRouter('join')">
              加入我们
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
              <input id="useremail" name="yourname" placeholder="账号" type="text" v-model="username">
              <input id="psw" name="yourpassword" placeholder="密码" type="password" v-model="password">
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
import {setCookie,getCookie,delCookie} from '../assets/js/cookie.js'
  export default{
    data(){
      return{
        loginBtn:require('../assets/img/home/BTN-LOG1.png'),
        isLogin: false,
        loginFalse: false,
        username:'',
        password:'',
      }
    },
    mounted(){
      store.state.whatbg = true;
      if(getCookie('username')){
        this.loginBtn = require('../assets/img/home/BTN-LOG2.png')
      }else{
        this.loginBtn = require('../assets/img/home/BTN-LOG1.png')
      }
    },
    methods:{
      goRouter(path){
        this.$router.push({
          path:'/'+path
        })
      },
      admin(){
        if(getCookie('username')){
          this.$router.push({
            path:'/admin',
          })
        }else{
          this.isLogin=true
        }
      },
      login(){
        this.axios({
          method: 'post',
          url: this.$store.state.backendUrl+'/api/login/',
          headers: {
            'Content-type': 'application/x-www-form-urlencoded'
          },
          params: {
            'username': this.username,
            'password': this.password
          }
        })
          .then((res) => {
            // session.setAttribute("user", obj);
            if(res.data.status==200){
              setCookie('username',this.username,1000*60)
              this.$router.push({
                path:'/admin',
              })
            }else{
              this.loginFalse = true
            }
          })
          .catch((error) => {
            this.loginFalse = true
          });
      },
    }
  }
</script>
<style src="../assets/css/homepage.css" scoped>
</style>
