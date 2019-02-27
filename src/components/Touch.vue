<template>
	<div id="touch">
		<Head></Head>
		<ul>
			<li v-for="(item,index) in list" :key='index'>
				<div class="linkmans">
					<div class="linkmanItr">
								<div class="avatarBox">
									<img :src="item.avatar" />
								</div>
	             	<div class="name">
	                 	<span class='chinesename'>{{item.Chinese_name}}</span>
	                 	<span class='englishname'>{{item.english_name}}</span>
	             	</div>
		        </div>
			     	<div class="bigBox">
			     		<div class="touchwayBox">
			     			<div class="touchPhone">
			                    <img src="../assets/img/touch/phoneIcon.png">
			                    <div class="number">{{item.contact}}</div>
			                    <div class="call">拨号</div>
			                </div>
			     		</div>
			     		<div class="touchwayBox">
			     			<div class="touchWechat">
			                    <img src="../assets/img/touch/wechatIcon.png">
			                    <div class="number">{{item.wechat}}</div>
													<button type="button" @click='copy(item.wechat)' class="copy"
											     v-clipboard:copy="message"
											     v-clipboard:success="onCopy"
											     v-clipboard:error="onError">复制</button>
								</div>
			     		</div>
			     		<div class="touchwayBox">
			     			<div class="touchEmail">
			                    <img src="../assets/img/touch/emailIcon.png">
			                    <div class="number">{{item.email}}</div>
													<button type="button" @click='copy(item.email)' class="copy"
											     v-clipboard:copy="message"
											     v-clipboard:success="onCopy"
											     v-clipboard:error="onError">复制</button>
								</div>
			     		</div>
			     	</div>
				</div>
			</li>
		</ul>
		<div class="BTNhome" @click='goHome()'>
        回到首页
    </div>
    </div>
</template>
<script>
	import Head from './Head'
	import store from '../store/store'

	export default{
		name:'touch',
		components:{
			Head
		},
		data(){
			return{
				list:[],
				message:'',
			}
		},
		mounted(){
			store.state.whatBg = false
			this.axios.get('https://vtmer.erienniu.xyz/api/leader')
			.then(res=>{
				this.list=res.data.data
			})
			.catch(error=>{
				console.log(error);
			})
		},
		methods:{
			copy(content){
				this.message = content
			},
			onCopy: function (e) {
				console.log('你刚刚复制: ' + e.text)
			},
			onError: function (e) {
				console.log('无法复制文本！')
			},
			goHome(){
				store.state.whatBg=true
				this.$router.push({
					path: '/',
				})
			}
		}
	}
</script>
<style scoped>
	#touch{
		overflow: hidden;
	}
	.BTNhome{
		width: 2.16rem;
		height: 0.46rem;
		line-height: 0.5rem;
		text-align: center;
		border: solid 0.02rem #378cff;
		border-radius: 1.0667rem;
		font-size: 0.24rem;
		position: absolute;
		/* top: 80.6%; */
		left: 36%;
		color:#378cff;
	}
	.linkmans{
		width: 7.4rem;
		margin-top: 0.8rem;
		margin-left: -15px;
	}
	.linkmanItr {
	  width: 6rem;
	  display: flex;
	  margin-left:0.57rem;
	}
	.linkmanItr img {
	  width: 1.60rem;
	  height: 1.8rem;
	}
	.name {
	  display: flex;
	  flex-direction: column;
	  margin-left: 0.1rem;
	  margin-top: 0.18rem;
	}
	.name span {
	  display: block;
	}
	.chinesename {
	  font-size: 0.48rem;
	  color: #378cff;
	}
	.englishname {
	  font-size: 0.24rem;
	  color: #378cff;
	}
	.bigBox{
	  width:7.6rem;
	  display: flex;
	  display: -webkit-flex; /* Safari */
	  flex-direction: column;
	  margin-left:0.67rem;
	}
	.touchwayBox {
	  width: 8rem;
	  height: 1.5rem;
	  flex: unset;
	  margin-top: -0.85rem;
	  display: flex;
	}
	.touchwayBox img {
	  margin-left: 0.85rem;
	}
	.touchPhone img{
		width: 0.42rem;
		height: 0.42rem;
	}
	.touchWechat img{
		width: 0.48rem;
		height: 0.42rem;
	}
	.touchEmail img{
		width: 0.5rem;
		height: 0.35rem;
	}
	.number {
	  width: 2rem;
	  margin-left: 0.45rem;
	  font-size: 0.24rem;
	  color: #378cff;
	  font-weight:300;
	  width: 4.7333rem;
	  margin-left: 1.6rem;
	  margin-top: -0.65rem;
	  display: block;
	}
	.call,
	.copy {
	  width: 1.12rem;
	  border: 0.018rem solid #33d066;
	  border-radius: 0.6rem;
	  line-height: 0.3rem;
	  text-align: center;
	  font-size: 0.16rem;
	  color: #33d066;
	  position: absolute;
	  margin-top: -0.35rem;
	  left: 78%;
		background-color: transparent;
	}
	.copy {
	  color: #378cff;
	  border: 0.018rem solid #378cff;
	}
</style>
