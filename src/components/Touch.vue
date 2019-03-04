<template>
	<div id="touch">
		<Head></Head>
		<ul>
			<li v-for="(item,index) in list" :key='index'>
				<div class="linkmans">
					<div class="linkmanItr">
            <div class="avatarBox">
              <div class="boxF">
                <div class="boxS">
                  <div class="boxT" :style="{backgroundImage: 'url('+item.avatar+')'}">
                    <div class="overlay">
                      <a href="#">+</a>
                    </div>
                  </div>
                </div>
              </div>
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
			                    <!-- <div class="call">拨号</div> -->

													<button type="button" @click='call(item.contact)' class="call copy"
													 v-clipboard:copy="message"
													 v-clipboard:success="onCopy"
													 v-clipboard:error="onError">拨号</button>
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
			this.axios.get(this.$store.state.backendUrl+'/api/leader')
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
      call(content){
        window.location.href = 'tel://'+content
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
<style scoped lang="less">
	#touch{
		overflow: hidden;
	}

  .boxF, .boxS, .boxT, .overlay
  {
    width: 1.6rem;
    height: 1.8rem;
    overflow: hidden;
  }
  .boxF, .boxS
  {
    visibility: hidden;
  }
  .boxF
  {
    transform: rotate(120deg);
    float: left;
    margin-left: 10px;
    -ms-transform: rotate(120deg);
    -moz-transform: rotate(120deg);
    -webkit-transform: rotate(120deg);
  }
  .boxS
  {
    transform: rotate(-60deg);
    -ms-transform: rotate(-60deg);
    -moz-transform: rotate(-60deg);
    -webkit-transform: rotate(-60deg);
  }
  .boxT
  {
    transform: rotate(-60deg);
    background: no-repeat 50% center;
    background-size: 125% auto;
    -ms-transform: rotate(-60deg);
    -moz-transform: rotate(-60deg);
    -webkit-transform: rotate(-60deg);
    visibility: visible;
  }
  .overlay
  {
    transition: all 250ms ease-in-out 0s;
    display: none;
    position: relative;
  }
  .overlay:hover
  {
    background-color: rgba(0,0,0,0.6);
  }
  .boxT:hover .overlay
  {
    display: block;
  }
  .overlay a
  {
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -16px 0 0 -16px;
    border-radius: 3px;
    background-color: #d3b850;
    text-align: center;
    line-height: 32px;
    width: 32px;
    height: 32px;
    text-decoration: none;
    color: White;
    font-size: 18px;
    font-weight: bolder;
  }


  .avatarBox{
    position: relative;
    width: 1.95rem;
    height: 2.2rem;
    margin: 0 20px 10px 0.5rem;
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
	  margin-left:0.5rem;
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
		color: #378cff;
	  border: 0.018rem solid #378cff;
	  border-radius: 0.6rem;
	  line-height: 0.3rem;
	  text-align: center;
	  font-size: 0.16rem;
	  position: absolute;
	  margin-top: -0.35rem;
	  left: 78%;
		background-color: transparent;
	}
	.call {
		color: #33d066;
		border: 0.018rem solid #33d066;
	}
</style>
