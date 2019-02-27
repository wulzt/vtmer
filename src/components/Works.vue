<template>
  <div id="works">
	<Head></Head>
	<div id="content">
    <ul class="worksList">
      <li class="workItem" v-for="(item,index) in worksList" :key='index'>
        <img :src="item.image"/>
        <div class="workCon">
          <p style="color:#378cff;font-size:0.24rem;">{{item.name}}</p>
          <div class="line"></div>
          <p style="font-size: 0.17rem;">{{item.description}}</p>
        </div>
      </li>
    </ul>
		<p class="content-hint">上下可滑动可查看</p>
		<div class="content-BTNtouch">
              <router-link :to="{ name: 'touch' }" id="touchBtn">联系我们</router-link>
        </div>
	</div>
  </div>
</template>
<script>
	import Head from './Head'
	import axios from 'axios'
  import store from '../store/store'
	export default{
		name:'works',
		components:{
			Head
		},
		data(){
			return{
				worksList:[],
			}
		},
		created(){
      store.state.whatBg = false
			axios.get('https://vtmer.erienniu.xyz/api/list')
			.then(res=>{
        console.log(res);
				this.worksList = res.data.data
			})
			.catch(error=>{
				console.log(error);
			})
		},
	}
</script>
<style scoped>
ul{
  width: 5.49rem;
    height: 5.9rem;
    overflow-x: hidden;
    top: 14.74%;
    left: 13.2%;
    position: absolute;
    /* border: 1px solid red; */
    overflow-y: scroll;
}
.workCon{
  width: 3.54rem;
  font-size: 0;
  position: relative;
  padding-left: .31rem;
}
.workItem{
  width: 5.49rem;
  height: 1.45rem;
  margin: 0 auto;
  margin-bottom: 0.37rem;
  display: flex;
}
.workItem img{
  width: 1.95rem!important;
  height: 1.45rem;
  box-shadow: 1px 1px 1px #dadada;
}
.line{
  width: 1.79rem;
  height: .02rem;
  background: #378cff;
  margin-bottom: .16rem;
  margin-top: .11rem;
}
.content-BTNtouch{
  width: 2.16rem;
  height: 0.46rem;
  line-height: 0.5rem;
  text-align: center;
  border: solid 0.02rem #33d066;
  border-radius: 1.0667rem;
  font-size: 0.24rem;
  position: absolute;
  top: 80.6%;
  left: 36%;
}
.content-BTNtouch a{
  color:#33d066
}
.content-hint{
  font-size: 0.2rem;
  position: relative;
  top: 72%;
  left: 67%;
  color: #9c9c9c;
  position: absolute;
}
</style>
