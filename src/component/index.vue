<template>
	<div>
		<div id="box">
			<div class="box-a">
				<img src="../assets/index-kv2.jpg" height="504" width="1300" alt="">
				<img src="../assets/index-kv3.jpg" height="504" width="1300" alt="" class="img-t">
			</div>
			<div class="box-b">
				<img src="../assets/left-arrow.png" height="40" width="40" alt="">
				<img src="../assets/right-arrow.png" height="40" width="40" alt="">
			</div>
		</div>
<!-- 		<div class="blood">
		<p class="p1">纯正新西兰血统</p>
		<p class="p2">系出名门恒天然</p>
		<div><img src="../assets/productionLogo (1).png" height="71" width="79" alt=""></div>
	</div> -->
		<div id="img1">
			<img src="../assets/ab-am-bg.png" height="142" width="1300" alt="">
		</div>
		<div id="img2">
			<img src="../assets/float-three.png" height="335" width="478" alt="">
		</div>
		<div id="woman">
			<div class="woamn-o">
				<div class="div1">
					<a href="javascript:;"><img src="../assets/can1.png" alt=""></a>
				</div>
				<div class="div2">
					<router-link to=""><h2>智孕宝孕产妇系列</h2></router-link>
				</div>		
				<p>专为备孕、怀孕</p>
				<p>和哺乳期女性研制的</p>
				<p>专业营养配方乳品</p>
			</div>
			<div class="woamn-o">
				<div class="div1">
					<img src="../assets/can2.png" alt="">						
				</div>	
				<div class="div2">
					<router-link to=""><h2>安满婴幼儿系列</h2></router-link>
				</div>			
				<p>适用于36个月年龄以内婴幼儿</p>
				<p>基于婴幼儿不同阶段的营养需求研制</p>
			</div>
		</div>
		<div id="chouse">
			<p class="p1">选择安满的四大理由</p>
			<ul>
				<li>
					<div>
						<img src="../assets/reason1.png" height="181" width="185" alt="">
					</div>
					<p class="pl1">信赖之源</p>
					<p class="pl2">新西兰原产原装进口</p>
				</li>
				<li>
					<div>
						<img src="../assets/reason2.png" height="181" width="185" alt="">
					</div>
					<p class="pl1">纯乳糖配方设计</p>
					<p class="pl2">拒绝添加蔗糖</p>
					<p class="pl2">口味清淡</p>
				</li>
				<li>
					<div>
						<img src="../assets/reason3.png" height="181" width="185" alt="">
					</div>
					<p class="pl1">专利乳双歧杆菌</p>
					<p class="pl2">益生菌及益生元组合</p>
				</li>
				<li>
					<div id="las-div">
						<img src="../assets/reason4.png" height="181" width="185" alt="">
					</div>
					<p class="pl1">连动配方™</p>
					<p class="pl2">研发连动因子营养组合</p>
				</li>
			</ul>
		</div>
		<div id="sixyear">
			<div class="div1">
				<p>万千妈妈的信赖之选</p>
				<p>连续六年香港和中国内地线上销量领先*</p>
			</div>
			<div><img src="../assets/cup.jpg" height="249" width="1279" alt=""></div>
			<div class="c">
				<div class="l">
					<p>凭借良好的品牌和用户人气，安满智孕宝获得2016年辣妈帮年度盛典“千万辣妈推荐的孕期营养品”殊荣，以及2015-2016连续两年获得父母网品牌之星的荣誉。</p>
				</div>
				<div class="r">
					<p>2016年，由中国公共关系网17PR发起并主办的“金旗奖”的评选中经过大众网络投票与多轮评审，安满最终从约600个候选案例中脱颖而出，荣获最具公众影响力【企业社会责任】金奖！</p>
				</div>
			</div>
			<div id="sixyear-img">
				<img src="../assets/mid-circle.png" height="314" width="314" alt="">
			</div>
			<div class="b">
				<p>*数据来源：香港尼尔森零售数据及Smartpath2011-2016全网线上数据。</p>
			</div>
		</div>
		<div id="hot-p">
			<div class="hot-p-o">
				安妈热评
			</div>
			<div class="hot-p-t">
				<div><img src="../assets/person1.png" height="212" width="1280" alt=""></div>
				<div><img src="../assets/person2.png" height="168" width="1280" alt=""></div>
				<div><img src="../assets/person3.png" height="176" width="1280" alt=""></div>
			</div>
		</div>
		<div id="center-img">	
			<router-link to="/extend"><img src="../assets/overlay.png" height="573" width="794" alt=""></router-link>
		</div>
	</div>
</template>
<script>
	export default {
		created () {
				$(function (){
				    $('#box .box-b img').click(function (){
					$('#box .box-b img').removeClass('active');
					$(this).addClass('active');
					$('#box .box-a img').hide().eq($(this).index()).stop().fadeIn();
						});
				    	var tid;
						tid = setTimeout(hide,5000);
						$('#center-img').mouseover(function (){
							clearTimeout(tid);
						});
						$('#center-img').mouseout(function (){
							tid=setTimeout(hide,3000);
						})
						function hide(){
							$('#center-img').hide();
						}
					});
		}
	}
</script>
<style>
#center-img{
	width: 794px;
	height: 573px;
	position: fixed;
	left: 50%;
	top: 50%;
	margin-top: -250px;
	margin-left: -350px;
}
#center-img:hover{
	cursor: pointer;
}
	body{
		position: relative;
	}
	#box{
		width: 1300px;
		margin: 0 auto;
		padding-top: 145px;
		position: relative;
	}
	#box img{
		vertical-align: top;
	}
	#box .img-t{
		display: none;
	}
	#box .box-a{
		width: 2600px;
	}
	#box .box-a img.active{
		background: #ccc;
	}
	#box .box-a img{
		float: left;
	}
	#box .box-b{
		width: 84px;
		height: 40px;
		position: absolute;
		right: 110px;
		top: 420px;
	}
	#box .box-b img{
		display: inline-block;
		float: left;
		margin-right: 2px;
	}
	#box .box-b img:hover{
		cursor: pointer;
	}
	#img1{
		width: 1300px;
		margin: 0 auto;
		position: absolute;
		left: 25px;
		top: 525px;
	}
	#img2{
		position: absolute;
		right: 250px;
		top: 480px;
	}
	#woman{
		width: 1300px;
		margin: 0 auto;
		overflow: hidden;
		padding-bottom: 62px;
	}	
	#woman .woamn-o{
		margin-top: 216px;
		width: 400px;
		text-align: center;
		float: left;
		margin-left: 150px;
	}
	#woman .woamn-o h2{
		margin: 30px 0;
		color: #603D7C;
	}
	#woman .woamn-o a{
		text-decoration: none;
	}
	#woman .woamn-o .div1:hover{
		animation: 1s up ease;
		cursor: pointer;
	}
	#woman .woamn-o p{
		font-size: 15px;
		color: #333333;
		line-height: 24px;
	}
	#chouse{
		width: 1300px;
		margin: 0 auto;
		background: #F1F9FC;
	}
	#chouse .p1{
		width: 1300px;
		text-align: center;
		font-size: 45px;
		color: #232E64;
		padding: 123px 0px 84px 0px;
	}
	#chouse ul{
		width: 1300px;
		margin: 0 auto;
		overflow: hidden;
		padding-top: 10px;
	}
	@keyframes up {
		50%{
			transform: translateY(-5px);
		}
		100%{
			transform: translateY(0);
		}
	}
	#chouse ul div:hover{
		animation: 1s up ease;
	}
	#chouse ul li div{
		width: 120px;
		height: 118px;
		text-align: center;
	}
	#chouse ul li div img{
		width: 100%;
		height: 100%;
		margin-left: 5px;
	}
	#chouse ul li{
		margin-left: 140px;
		text-align: center;
		float: left;
		color: #232E64;
		padding-bottom: 130px;
	}
	#chouse ul li p{
		line-height: 30px;
	}
	#chouse ul li .pl1{
		font-weight: bold;
		margin: 8px;
	}
	#chouse ul li .pl2{
		color: #333333;
	}
	#sixyear{
		width: 1300px;
		margin: 0 auto;
		background: #232E64;
		padding-bottom: 140px;
		position: relative;
	}
	#sixyear .div1{
		padding-top: 150px;
		text-align: center;
		color: #E2C31B;
		font-size: 37px;
	}
	#sixyear .c{
		overflow: hidden;
	}
	#sixyear .c div{
		width: 392px;
		height: 136px;
		text-align: left;
		font-size: 19px;
		color: white;
	}
	#sixyear .c .l{
		margin-left: 63px;
		float: left;
	}
	#sixyear .c .r{
		margin-right: 63px;
		float: right;
	}
	#sixyear .b{
		font-size: 12px;
		color: white;
		margin-left: 63px;
		margin-top: 140px;
	}
	#sixyear-img{
		position: absolute;
		left: 490px;
		top: 330px;
		transition: 2s all ease;
	}
	#sixyear-img:hover{
		transform: scale(1.1);
	}
	#hot-p{
		width: 1300px;
		margin: 0 auto;
	}
	#hot-p .hot-p-o{
		width: 1300px;
		margin: 0 auto;
		color: #603D7C;
		font-size: 43px;
		text-align: center;
		margin: 68px 0 55px 0;
	}
	#hot-p .hot-p-t{
		padding-bottom: 40px;
	}
	#hot-p .hot-p-t div{
		transition: 2.0s all ease;
	}
	#hot-p .hot-p-t div:hover{
		transform: scale(1.1);
	}
</style>
