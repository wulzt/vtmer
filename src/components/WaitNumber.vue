<template>
  <div id="waitNumber">
    <div class="mask"></div>
    <Head></Head>
    <div class="waitBox">
      <div class="QYBox">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
      </div>
      <div class="waitContent">
        <p>
          {{name}}同学<br />现排队人数为：{{all}}
        </p>
        <p>
          你前面还有<br />
          <span>{{rank}}</span>&nbsp;位
        </p>
        <div class="waitBTN">
          <div class="waitRefresh" @click="waitRefresh()">
            刷新
          </div>
          <div class="waitQuit" @click="isCheckCancel=true">
            放弃
          </div>
        </div>
      </div>
    </div>
    <div class="checkCancelBox" v-if="isCheckCancel">
      <div class="mask"></div>
      <div class="checkCancelAlert">
        <div class="close" @click="isCheckCancel=false">
          <img src="../assets/img/home/close.png" />
        </div>
        <div class="checkCancelContent">
          <p>
            是否放弃签到<br />需要重新获取编号
          </p>
          <div class="checkCancelBTN">
            <div class="checkCancelYes" @click="waitQuit()">
              放弃
            </div>
            <div class="checkCancelNo" @click="isCheckCancel=false">
              返回
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>
<script>
import Head from './Head'
import store from '../store/store'

export default{
  name:'waitNumber',
  components:{
    Head,
  },
  data(){
    return{
      name:'',
      all:-1,
      rank:-1,
      isCheckCancel:false,
      imageUrl: '',
    }
  },
  mounted(){
    store.state.whatBg=false

    var storage=window.localStorage;
    this.name = JSON.parse(storage.getItem('name'))
    this.imageUrl = JSON.parse(storage.getItem('avatar'))

    let self = this
    this.axios.get('https://vtmer.erienniu.xyz/api/check-queue')
      .then(function (res) {
        // handle success
        self.all = res.data.data.all
        self.rank = res.data.data.rank
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  },
  methods:{
    waitRefresh(){
      let self = this
      this.axios.get('https://vtmer.erienniu.xyz/api/check-queue')
        .then(function (res) {
          // handle success
          self.all = res.data.data.all
          self.rank = res.data.data.rank
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    },
    waitQuit(){
      let self = this
      this.axios.get('https://vtmer.erienniu.xyz/api/queue-out')
        .then(function (res) {
          // handle success
          var storage=window.localStorage;
          storage.removeItem("name");
          storage.removeItem("avatar");
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
      this.isCheckCancel=false
      this.$router.push({
        path:'/interview',
      })
    }
  }
}
</script>
<style scoped>
#waitNumber .head{
  position: absolute;
  z-index: 11;
}
#waitNumber .mask{
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  background: #bfbfbf;
  opacity: 0.3;
}
.waitBox{
  width: 5.86rem;
  height: 8.04rem;
  border-radius: .1rem;
  background-color: #fff;
  position: absolute;
  top: 20.83%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 11;
  box-sizing: border-box;
}
.QYBox{
  width: 1.42rem;
  height: 1.42rem;
  border:solid 0.1rem #fff;
  border-radius: 50%;
  position: absolute;
  top: -.805rem;
  left: 50%;
  overflow: hidden;
  border-left-color: #ececec;
  border-bottom-color: #ececec;
  transform: translateX(-50%) rotateZ(-45deg);
}
.waitContent{
  text-align: center;
}
.waitContent p{
  font-size: .4166rem;
  color: #90989b;
  /* font-family: FZZHJW; */
  text-align: center;
}
.waitContent p:first-child{
  margin-top: 1.73rem;
}
.waitContent p:last-of-type{
  margin-top: .82rem;
}
.waitContent p span{
  font-size: .82rem;
  color: #76b2fd;
}
.waitBTN{
  font-size: .25rem;
  font-family: Microsoft YaHei;
  margin-top: .74rem;
  display: inline-block;
}
.waitRefresh,.waitQuit{
  width: 1.46rem;
  line-height: .46rem;
  text-align: center;
  border-radius: .2rem;

}
.waitRefresh{
  background-color: rgb(118, 178, 253);
  border: solid .02rem rgb(118, 178, 253);
  color: #fff;
}
.waitQuit{
  border: solid .02rem #808080;
  color: #808080;
  margin-top: .28rem;
}

.checkCancelBox .mask{
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 14;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.4;
}
.checkCancelAlert{
  width: 6.05rem;
  height: 4.92rem;
  border-radius: 0.24rem;
  background-color: rgb(255, 255, 255);
  position: absolute;
  top: 25.5%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 15;
}
.checkCancelContent p{
  color: #f36a6a;
  font-size: .42rem;
  font-family: FZZHJW;
  margin-top: 1.09rem;
  margin-left: .7rem;
}
.checkCancelYes,.checkCancelNo{
  font-size: .26rem;
  width: 1.39rem;
  line-height: .46rem;
  text-align: center;
  border-radius: .22rem;
}
.checkCancelYes{
  background-color: #f36a6a;
  border: solid .01rem #f36a6a;
  color: #fff;
}
.checkCancelNo{
  border: solid .01rem #808080;
  color: #808080;
}
.close{
  position: absolute;
  top: 0.28rem;
  right: 0.28rem;
  font-size: 0;
}
.close img{
  width: 0.35rem;
  height: 0.35rem;
}
.checkCancelBTN{
  width: 3.84rem;
  margin: 0 auto;
  margin-top: 1.13rem;
  display: flex;
  justify-content: space-between;
}
</style>
