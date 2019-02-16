<template>
  <div class="head">
    <img alt="LOGO" class="LOGO" src="../assets/img/LOGO.png"/>
    <img alt="Home" class="HOME" src="../assets/img/BTN-HOME.png"
      @click="goHome"/>
  </div>
</template>
<script>
import store from '../store/store'
  export default{
    name:'head',
    methods:{
      goHome(){
        store.state.whatBg=true
        this.$router.push({
          path:'/',
        })
      }
    }
  }
</script>
<style scoped>
.head{
  font-size: 0;
}
.LOGO{
  margin-left: 0.44rem;
  margin-top: 0.36rem;
  width: 1.86rem;
  height: 0.45rem;
}
.HOME{
  width: 0.38rem;
  height: 0.38rem;
  margin-left: 4.46rem;
  display: inline-block;
  margin-bottom: 0.06rem;
}
</style>
