<template>
  <div id="interview">
    <img alt="LOGO" class="LOGO" src="../assets/img/LOGO.png"/>
    <div class="content-center">
        <img alt="bigVtmLogo" src="../assets/img/home/SLOGAN.png"/>
        <div class="content-BTNcheck">
            <div id="checkIn" @click="isCheck()">面试签到</div>
        </div>
    </div>

  </div>
</template>
<script>
import store from '../store/store'
  export default{
    name:'interview',
    created(){
      store.state.whatBg=true
    },
    methods:{
      isCheck(){
        let self = this
        this.axios.get(this.$store.state.backendUrl+'/api/check-queue')
          .then(function (res) {
            // handle success
            if(res.data.status==200){
              self.$router.push({
                path:'/waitNumber',
              })
            }else{
              self.$router.push({
                path:'/checkIn',
              })
            }
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
      }
    }
  }
</script>
<style scoped>
.LOGO {
    margin-left: 0.44rem;
    margin-top: 0.36rem;
    width: 1.86rem;
    height: 0.45rem;
}
.content-center {
    display: flex;
    justify-content: center;
    font-size: 0;
}

.content-center img {
    width: 1.66rem;
    height: 5.42rem;
    position: absolute;
    left: 43.3%;
    top: 25.38%;
}

.content-BTNcheck {
    width: 2.16rem;
    height: 0.46rem;
    line-height: 0.5rem;
    text-align: center;
    background-color: #378cff;
    border: solid 0.02rem #378cff;
    border-radius: 1.0667rem;
    font-size: 0.24rem;
    position: absolute;
    top: 80.86%;
}
.content-BTNcheck{
  color: #fff;
  font-family: MSYHL;
}
</style>
