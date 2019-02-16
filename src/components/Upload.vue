<template>
  <div id="upload">
    <Head></Head>
    <div class="editImg">
      <img src="../assets/img/edit/editImg.png" alt="editImg"/>
          <input type="file" name="pic" id='upImg' form="edit" >
      <div class="ImgText">
        <p>点击左侧<br/>上传/替换图片</p>
        <p>注：图片大小为240*180</p>
      </div>
    </div>
    <div class="editForm">
      <form>
        <div class="editText">
          <input type="text" name="title" placeholder="这是输入完成的标题" />
          <p>注：标题为6-12字符为宜</p>
        </div>
        <div class="editUrl">
          <input type="text" name="url" placeholder="在此输入URL" />
        </div>
        <div class="editSummary">
          <textarea cols="" rows="" name="intro" placeholder="请在此输入简介" maxlength="100"></textarea>
          <p>注：简介为60-100字符为宜</p>
        </div>
      </form>
      <footer class="editBtn">
        <a href="#" class="editCancel">取消</a>
              <a href="#" class="editUpload">完成</a>
      </footer>
  </div>
</div>
</template>
<script>
import Head from './Head'
export default{
  name: 'admin',
  components:{
    Head,
  },
}
</script>
<style >
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
}
#upImg{               /* 上传图片的input */
  position: absolute;
  width: 2.9rem;
  height: 2.17rem;
  top: 0;
  left: 0;
  opacity:0;
}
.ImgText{
  font-size: .3rem;
  padding-left: .21rem;
  color: #999;
}
.ImgText p:last-child{
  font-size: .1rem;
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
  font-size: .36rem;
  border: 0;
  border-bottom: solid .01rem #999;
  outline: none;
  color: #333;
  padding-bottom: .16rem;
  background: transparent;
}
.editText p{
  font-size: .1rem;
  transform: scale(0.8);
  color: #999;
  margin-left: -.6rem;
}
</style>
