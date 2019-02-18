<template>
  <div id="checkIn">
    <Head></Head>
    <div class="mask"></div>
    <div class="checkInBox">
      <p class="welcomeCheck">
        欢迎来到<br />维生数第一轮面试现场
      </p>
      <el-form :model="checkInForm" :rules="rules" ref="checkInForm" label-width="100px" class="checkInForm">
        <el-form-item label="姓名" prop="name" class="checkName">
          <el-input v-model="checkInForm.name"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex" class="checkSex">
          <el-radio-group v-model="checkInForm.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="面试组别" prop="group" class="checkGroup">
          <el-radio-group v-model="checkInForm.group">
            <el-radio label="前端组"></el-radio>
            <el-radio label="后台组"></el-radio>
            <el-radio label="设计组"></el-radio>
            <el-radio label="运营组"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="手机号码" prop="phone" class="checkPhone">
          <el-input v-model="checkInForm.phone"></el-input>
        </el-form-item>
        <el-form-item class="checkBTN">
          <el-button type="primary" @click="submitForm('checkInForm')">签到</el-button>
          <el-button @click="resetForm('checkInForm')">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="checkSubmitBox" v-if="isCheckSubmit">
      <div class="mask"></div>
      <div class="checkSubmitAlert">
        <div class="close" @click="isCheckSubmit=false">
          <img src="../assets/img/home/close.png" />
        </div>
        <div class="checkSubmitContent">
          <p>
            签到成功<br />你的编号是：
          </p>
          <div class="checkSubmitBTN">
            <div class="checkSubmitYes" @click="isCheckSubmit=false">
              确认
            </div>
            <div class="checkSubmitNo" @click="isCheckSubmit=false">
              返回
            </div>
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
            是否放弃签到<br />将无法获取面试编号
          </p>
          <div class="checkCancelBTN">
            <div class="checkCancelYes" @click="checkCancel()">
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
    name:'checkIn',
    components:{
      Head,
    },
    created(){
      store.state.whatBg=false;
    },
    data() {
      return {
        isCheckSubmit:false,
        isCheckCancel:false,
        checkInForm: {
          name: '',
          sex: '',
          group:'',
          phone:'',
        },
        rules: {
          name: [
            { required: true, message: '请输入名字', trigger: 'blur' },
            { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请输入手机号码', trigger: 'blur' },
            { min: 11, max: 11, message: '长度为 11 个字符', trigger: 'blur' }
          ],
          sex: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          group: [
            { required: true, message: '请选择组别', trigger: 'change' }
          ],
        },
      };
    },
    methods: {
      checkCancel(){
        this.isCheckCancel=false
        this.$router.push({
          path:'/interview',
        })
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push({
              path:'/waitNumber',
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.isCheckSubmit=false
        this.isCheckCancel=true
        // this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style scoped>
#checkIn .head{
  position: absolute;
  z-index: 11;
}
#checkIn .mask{
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  background: #bfbfbf;
  opacity: 0.3;
}
.checkInBox{
  width: 5.86rem;
  height: 8.52rem;
  border-radius: .1rem;
  background-color: #fff;
  padding: 1.05rem .46rem 0 .58rem;
  position: absolute;
  top: 15.34%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 11;
  box-sizing: border-box;
}
.welcomeCheck{
  font-size: .4166rem;
  font-family: FZZHJW;
  color: #76b2fd;
  margin-bottom: .44rem;
}


#checkIn .checkSubmitBox .mask{
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 14;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.4;
}
.checkSubmitAlert{
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
.checkSubmitContent p{
  color: #76b2fd;
  font-size: .42rem;
  font-family: FZZHJW;
  margin-top: 1.09rem;
  margin-left: .7rem;
}
.checkSubmitYes,.checkSubmitNo{
  font-size: .26rem;
  width: 1.39rem;
  line-height: .46rem;
  text-align: center;
  border-radius: .22rem;
}
.checkSubmitYes{
  background-color: #76b2fd;
  border: solid .01rem #76b2fd;
  color: #fff;
}
.checkSubmitNo{
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
.checkSubmitBTN{
  width: 3.84rem;
  margin: 0 auto;
  margin-top: 1.13rem;
  display: flex;
  justify-content: space-between;
}


#checkIn .checkCancelBox .mask{
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
