<template>
<div>
	<div id="wisdom-header">
		<img src="../assets/query.jpg" height="487" width="1300" alt="">
	</div>
	<div class="blood">
		<p class="p1">纯正新西兰血统</p>
		<p class="p2">系出名门恒天然</p>
		<div><img src="../assets/productionLogo (1).png" height="71" width="79" alt=""></div>
	</div>
	<div id="kids">
		<div class="kids-h">
			<span>营养</span><img src="../assets/in-what.png" height="41" width="41" alt="">
		</div>
		<ul>
			<li>
				<div class="img1"><img src="../assets/i1.jpg" height="450" width="464" alt=""></div>
				<div id="desp">
					<h1>二十二碳六烯酸(DHA)及<br>神经节苷脂(GA)营养组合[1]
					</h1>
					<p>DHA和GA在突触的形成</p>
					<p>和作用中扮演关键角色：DHA在</p>
					<p>神经形成、突触形成和神经传递中发挥作用</p>
					<p>神经节甘脂在神经元生长 迁移和成熟</p>
					<p>突触生成 发生和髓鞘形成中发挥作用 </p>
				</div>
			</li>
			<li>
				<div class="img1"><img src="../assets/i2.jpg" height="450" width="464" alt=""></div>
				<div id="desp2">
					<h1>乳糖[2]</h1>
					<p>能促进宝宝对生长发育所需 </p>
					<p>钙的吸收和有效利用</p>
					<p>乳糖相较于其他糖 甜度更低</p>
					<p>口味更清淡 减少宝宝对甜味的偏好</p>
				</div>
			</li>
			<li>
				<div class="img1"><img src="../assets/i3.jpg" height="450" width="464" alt=""></div>
				<div id="desp3">
					<h1>益生菌及益生元组合[3]</h1>
					<p>帮助维持肠道微生态平衡</p>
					<p>提高胃肠道的免疫力</p>
				</div>
			</li>
		</ul>
		<div id="img3"><img src="../assets/infants-beizhu.jpg" height="136" width="1093" alt=""></div>
	</div>
	<div id="gift">
		<div class="gift-o">
			<div class="gift-t" id="gift-o-r"><img src="../assets/infant1.png" height="399" width="557" alt=""></div>
			<div class="gift-h">
				<h1>母乳是妈妈给宝宝<br>最好的礼物</h1>
				<p>世界卫生组织和安满全力推荐母乳喂养至少6个月</p>
			</div>
		</div>
		<div class="gift-o">
			<div class="gift-h">
				<h1>安满™满智™<br>较大婴儿配方奶粉</h1>
				<p>适用于6-12个月较大婴儿</p>
				<div id="getbul"><a href="javascript:;"><img src="../assets/getButton.png" height="37" width="139" alt=""></a></div>
			</div>
			<div id="weibo-ma-o">
				<img src="../assets/weiboerweima.png" height="113" width="113" alt="">
			</div>
			<div class="gift-t" id="gift-o-l">
					<img src="../assets/infant2.png" height="399" width="557" alt="">
			</div>
		</div>
		<div class="gift-o">
			<div class="gift-t" id="gift-o-r"><img src="../assets/infant3.png" height="399" width="557" alt=""></div>
			<div class="gift-h">
				<h1>母乳是妈妈给宝宝<br>最好的礼物</h1>
				<p>世界卫生组织和安满全力推荐母乳喂养至少6个月</p>
				<div id="getbut"><a href="javascript:;"><img src="../assets/getButton.png" height="37" width="139" alt=""></a></div>
			</div>
			<div id="weibo-ma">
				<img src="../assets/weiboerweima.png" height="113" width="113" alt="">
			</div>
		</div>
		<div id="logo-b">
			<img src="../assets/ab-htr-bg.png" height="142" width="1300" alt="">
		</div>
	</div>
</div>
</template>
<script>
	export default {
		created () {
			$(function (){
				$('#getbut').hover(function (){
					$('#weibo-ma').show();
				},function (){
					$('#weibo-ma').hide();
				});
				$('#getbul').hover(function (){
					$('#weibo-ma-o').show();
				},function (){
					$('#weibo-ma-o').hide();
				})
			})
		}
	}
</script>
<style>
	@keyframes up {
		50%{
			transform: translateY(-5px);
		}
		100%{
			transform: translateY(0);
		}
	}
	@keyframes left {
		50%{
			transform: translateX(5px);
		}
		100%{
			transform: translateX(0);
		}
	}
	@keyframes right {
		50%{
			transform: translateX(-5px);
		}
		100%{
			transform: translateX(0);
		}
	}
	#gift-o-r img:hover{
		animation: 1s right ease;
	}
	#gift-o-l img:hover{
		animation: 1s left ease;
	}
	#wisdom-header{
		width: 1300px;
		margin: 0 auto;
		position: relative;
		padding-top: 145px;

	}
	.blood{
		width: 817px;
		height: 218px;
		position: absolute;
		left: 80px;
		top: 200px;
	}
	.blood .p1{
		font-size: 45px;
		color: #E1B51B;
		font-weight: bold;
	}
	.blood .p2{
		font-size: 45px;
		color: #2366B4;
		font-weight: bold;
		margin-top: 10px;
	}
	.blood div{
		margin-top: 30px;
	}
	#wisdom-header img{
		vertical-align: top;
	}
	#kids{
		width: 1300px;
		margin: 0 auto;
	}
	#kids .kids-h{
		padding: 64px 0 74px 0;
		width: 100%;
		text-align: center;
		font-size: 42px;
		color: #232E64;
	}
	#kids .kids-h img{
		vertical-align: middle;
		margin-left: 5px;
	}
	#kids ul li:first-child{
		margin-left: 60px;
	}
	#kids ul li{
		width: 383px;
		height: 630px;
		float: left;
		margin-left: 27px;
	}
	#kids ul li .img1{
		width: 383px;
		height: 372px;
		overflow: hidden;
	}
	#kids ul li img{
		transition: 1s all ease;
	}
	#kids ul li:hover img{
		transform: scale(1.1);
	}
	#kids ul li img{
		width: 383px;
		height: 372px;
	}
	#desp{
		width: 383px;
		height: 225px;
		background: #262F4F;
	}
	#desp2{
		width: 383px;
		height: 225px;
		background: #644570;
	}
	#desp3{
		width: 383px;
		height: 225px;
		background: #C8A151;
		
	}
	#desp h1,#desp2 h1,#desp3 h1{
		margin-bottom: 20px;
		padding-top: 32px;
		text-align: center;
		font-size: 20px;
		color: white;
	}
	#desp p,#desp2 p,#desp3 p{
		line-height: 20px;
		text-align: center;
		font-size: 10px;
		color: white;
	}
	#img3{
		width: 1300px;
		margin: 0 auto;
		margin-left: 82px;
		padding: 42px 0 65px 0;
	}
	#gift{
		width: 1300px;
		margin: 0 auto;
		background: #D7CDE2;
		position: relative;
	}
	#gift .gift-o{
		overflow: hidden;
		padding: 70px 0;
		margin-left: 70px;
	}
	#gift .gift-o div{
		float: left;
	}
	#gift .gift-o .gift-t{
		margin-left: 79px;
		padding-right: 20px;
	}
	#gift .gift-h{
		margin-left: 90px;
	}
	#gift .gift-h h1{
		padding-top: 118px;
		font-size: 30px;
		color: #603D7C;
		margin-bottom: 27px;
	}
	#gift .gift-h p{
		font-size: 16px;
		color: black;
	}
	#getbut{
		position: relative;
	}
	#weibo-ma-o{
		display: none;
		position: absolute;
		right: 360px;
		bottom: 50px;
	}
	#weibo-ma{
		display: none;
		position: absolute;
		left: 172px;
		top: 919px;
	}
	#getbul{
		position: relative;
	}
	#getbut,#getbul{
		margin-top: 20px;
	}
	#logo-b{
		width: 1300px;
		margin: 0 auto;
		position: absolute;
		left: 0;
		bottom: -17px;
	}
	#logo-b img{
		vertical-align: top;
	}
	#anma{
		width: 1300px;
		margin: 0 auto;
		background: #FFFFFF;
		padding-top: 100px;
		padding-bottom: 20px;
	}
	#anma .anma-o h1{
		text-align: center;
		font-size: 44px;
		color: black;
		margin-bottom: 30px;
	}
	#anma .anma-o span{
		font-size: 44px;
		color: #E1B51B;
	}
	#anma .anma-t{
		text-align: center;
	}
</style>