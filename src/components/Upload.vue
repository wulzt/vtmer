<template>
  <div id="upload">
    <Head></Head>
    <div class="editImg">
        <el-upload
          class="avatar-uploader"
          action="https://vtmer.erienniu.xyz/api/upload"
          name="work"
          :show-file-list="false"
          :on-change="imgPreview"
          :auto-upload="false">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
        </el-upload>
      <div class="ImgText">
        <p>点击左侧<br/>上传/替换图片</p>
        <p>注：图片大小为240*180</p>
      </div>
    </div>
    <div class="editForm">
      <form>
        <div class="editText">
          <input type="text" name="title" placeholder="请在此输入标题" v-model="workname"/>
          <p>注：标题为6-12字符为宜</p>
        </div>
        <div class="editUrl">
          <textarea cols="" rows="" name="url" placeholder="在此输入URL" maxlength="100"  v-model="workurl"></textarea>
          <p>注：URL为32~48字符为宜。</p>
        </div>
      </form>
      <footer class="editBtn">
        <div class="editUpload" @click="upload()">
          完成
        </div>
        <div class="editCancel" @click="isCancel=true">
          取消
        </div>
      </footer>
  </div>
  <div class="cancelBox" v-if="isCancel">
    <div class="mask"></div>
    <div class="cancelAlert">
      <div class="close" @click="isCancel=false">
        <img src="../assets/img/home/close.png" />
      </div>
      <div class="cancelContent">
        <p>
          是否放弃<br />修改/上传内容
        </p>
        <div class="cancelBTN">
          <div class="cancelYes" @click="cancelSummit()">
            放弃
          </div>
          <div class="cancelNo" @click="isCancel=false">
            取消
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
  name: 'admin',
  components:{
    Head,
  },
  data(){
    return{
      isCancel: false,
      workname:'',
      workurl:'',
      imageUrl: '',
      file:'',
      name:'',
      isUpdate: false,
    }
  },
  created(){
    store.state.whatBg=false;
    if(store.state.editItem){
      this.isUpdate = true
      this.workname = store.state.editItem.name
      this.imageUrl = store.state.editItem.image
      this.workurl = store.state.editItem.description
    }
  },
  methods:{
    imgPreview(file, fileList) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }

      this.file = file.raw
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    upload(){
      let data = new FormData();
      data.append('name', this.workname);
      data.append('description', this.workurl);
      data.append('image', this.file);

      if(this.isUpdate){
        this.axios({
          method: 'post',
          url: 'https://vtmer.erienniu.xyz/api/update/'+store.state.editItem.id,
          headers: {
            'Content-type': 'multipart/form-data'
          },
          data: data
        })
          .then((res) => {
            store.state.editItem=''
            this.$router.push({
              path:'/admin'
            })

          })
          .catch((error) => {
            store.state.editItem=''
            console.log(error);

          });
      }else{
        this.axios({
          method: 'post',
          url: 'https://vtmer.erienniu.xyz/api/new',
          headers: {
            'Content-type': 'multipart/form-data'
          },
          data: data
        })
          .then((res) => {
            this.$router.push({
              path:'/admin'
            })

          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    cancelSummit(){
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.editImg  img{
  width: 2.9rem;
  height: 2.17rem;
}
.editImg{
  width: 5.63rem;
  position: relative;
  display: flex;
  margin: 0 auto;
  margin-top: 1.06rem;
  font-family: MSYHL;
}
.editForm{
  font-family: MSYHL;
}
.ImgText{
  font-size: .3rem;
  padding-left: .21rem;
  color: #999;
}
.ImgText p:last-child{
  font-size: .18rem;
  transform: scale(0.8);
  white-space: nowrap;
  margin-left: -.2rem;
  margin-top: 1.1rem;
}
.editText{
  width: 5.63rem;
  margin: 0 auto;
}
.editText input{
  width: 100%;
  font-size: .36rem;
  font-family: MSYHL;
  border: 0;
  border-bottom: solid .01rem #999;
  outline: none;
  color: #333;
  padding-bottom: .16rem;
  background: transparent;
}
.editText p{
  font-size: .18rem;
  transform: scale(0.8);
  color: #999;
  margin-left: -.6rem;
}
input:focus,textarea:focus{
  outline: none;
}
.editText input::-webkit-input-placeholder { /* WebKit browsers */
  color: #ccc;
  font-family: MSYHL;
}
.editUrl{
  width: 5.63rem;
  margin: 0 auto;
  font-size: 0;
}
.editUrl textarea{
  font-family: MSYHL;
  width: 5.49rem;
  height:1.14rem !important;
  margin-top: 0.56rem;
  border: solid .01rem #999;
  padding: .07rem;
  resize : none;
}
.editUrl textarea::-webkit-input-placeholder { /* WebKit browsers */
  color: #cbcbcb;
}
.editUrl p{
  font-size: .18rem;
  transform: scale(0.8);
  color: #999;
  margin-left: -.6rem;

}
.editUpload,.editCancel{
  font-size: .24rem;
}
.editUpload{
  width: 1.29rem;
  line-height: .41rem;
  background-color: #33d066;
  text-align: center;
  border-radius: .17rem;
  color: #fff;

}
.editCancel{
  width: 1.25rem;
  height: .37rem;
  line-height: .41rem;
  background-color: transparent;
  text-align: center;
  border-radius: .17rem;
  border: solid .02rem #808080;
  color: #808080;
}
.editBtn{
  display: flex;
  width: 2.72rem;
  justify-content: space-between;
  position: absolute;
  top: 86%;
  right: 12.8%;
}
.mask{
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.4;
}
.cancelAlert{
  width: 6.05rem;
  height: 4.92rem;
  border-radius: 0.24rem;
  background-color: rgb(255, 255, 255);
  position: absolute;
  top: 22.76%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 11;
}
.cancelContent p{
  font-size: 0.48rem;
  color:#f36a6a;
  margin-top: 1.25rem;
  margin-left: .78rem;
}
.cancelYes,.cancelNo{
  font-size: .3rem;
  width: 1.55rem;
  line-height: .46rem;
  text-align: center;
  border-radius: .22rem;
}
.cancelYes{
  background-color: #ff5c64;
  border: solid .03rem #ff5c64;
  color: #fff;
}
.cancelNo{
  border: solid .03rem #808080;
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
.cancelBTN{
  width: 3.84rem;
  margin: 0 auto;
  margin-top: 1.27rem;
  display: flex;
  justify-content: space-between;
}
</style>
