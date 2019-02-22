<template>
  <div id="works">
	<Head></Head>
	<div id="content">
		<ul class="center">
			<li v-for="(item,index) in workslist" @click="goWorks(item.description)">
        <a :href="item.description" target="_blank">
  				<img :src="item.image"/>
  				<div class="center-intro">
  					<p style="color:#378cff;font-size:0.24rem;">项目名称</p>
  					<p style="font-size: 0.17rem;">{{item.name}}</p>
  				</div>
        </a>
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
				workslist:[],
			}
		},
		mounted(){
      store.state.whatBg = false
			axios.get('https://vtmer.erienniu.xyz/api/list')
			.then(res=>{
        console.log(res);
				this.workslist = res.data.data
			})
			.catch(error=>{
				console.log(error);
			})
		},
    methods:{
      goWorks(url){
        console.log(url);
      }
    }
	}
</script>
<style>
	.center{
		width: 5.49rem;
	    height: 5.9rem;
	    overflow: hidden;
	    top: 14.74%;
	    left: 13.2%;
	    position: absolute;
	    /* border: 1px solid red; */
	    overflow: auto;
	}
	.center-intro hr{
		width:40%;
		margin-top: 0.05rem;
		margin-bottom: 0.05rem;
	}
	.center img{
		width: 1.80rem;
		height: 1.3rem;
		box-shadow: 1px 1px 1px #dadada;
	}
	.center li{
		width: 5.49rem;
		height: 1.3rem;
		margin: 0 auto;
		margin-bottom: 0.22rem;
		display: flex;
	}
	.center-intro{
		margin-left: 0.5rem;
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
