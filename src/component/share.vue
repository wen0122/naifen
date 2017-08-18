<template>
<div>
	<div id="wisdom-header">
		<img src="../assets/xionghenaifen.jpg" height="580" width="1300" alt="">
	</div>
	<div class="blood">
		<p class="p1">加入安妈俱乐部</p>
		<p class="p2">悦享满分好礼</p>
	</div>
	<div id="input1">
			<div class="one"><span>积分码</span><input type="text"></div>
			<div class="two"><span>产品追溯码</span><input type="text"></div>
	</div>
	<div id="input2">
		<div id="input-san">
			<span class="span-o span1 active">手机登录</span>
			<span class="span-t span1">用户名登录</span>
		</div>
		<div id="input-masage">
			<div id="masage-o" class="div-show">
				<form action="">
					<div><span>手机号</span><input type="text"></div>
					<div><span>验证码</span><input type="text" id="input-two"><span><a href="javascript:;">发送验证码</a></span></div>
					<div id="last-div"><a href="javascript:;"><img src="../assets/subBtn2.png" height="37" width="85" alt=""></a></div>
				</form>
			</div>
			<div id="masage-t" class="div-show">
				<form action="">
					<div><span>用户名</span><input type="text" placeholder="用户名为您的手机号"></div>
					<div><span>密码</span><input type="text" id="input-two"><span><a href="">忘记密码</a></span></div>
					<div id="last-div" class="last-div"><a href="javascript:;"><img src="../assets/submit.png" height="40" width="149" alt=""></a><a href="javascript:;"><img src="../assets/register.png" alt=""></a></div>
				</form>
			</div>
		</div>
	</div>
	<div id="cod">
		<p>积分兑换流程</p>
		<div><img src="../assets/progress.jpg" height="696" width="2321" alt=""></div>
	</div>
</div>
</template>
<script>
	export default {
		created () {
			$(function (){
			$('#input-san span').click(function (){
			$('#input-san span').removeClass('active');
			$(this).addClass('active');	
			$('#input-masage .div-show').hide().eq($(this).index()).show();
		});
	})
		}
	}

</script>
<style>
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
	#input1 .one,#input .two{
		padding: 25px 0;
	}
	#input1{
		width: 1300px;
		margin: 0 auto;
		text-align: center;
		background: #E2DBEB;
	}
	#input1 span{
		display: inline-block;
		width: 163px;
		height: 40px;
		font-size: 17px;
		color: #232E64;
		text-align: left;
	}
	#input1 input{
		width: 500px;
		height: 38px;
		outline: none;
		border: 1px solid #ccc;
	}
	#last-div{
		padding: 50px 0;
	}
	#masage-o #input-two{
		width: 288px;
		height: 38px;
		margin-right: 53px;
	}
	#masage-o{
		display: none;
	}
	#masage-t #input-two{
		width: 288px;
		height: 38px;
		margin-right: 53px;
	}
	#masage-t .last-div a{
		display: inline-block;
		margin: 0 20px;
	}
	#input2{
		width: 1300px;
		margin: 0 auto;
		text-align: center;
		background: #E2DBEB;
		font-size: 15px;
	}
	#input2 #input-san span{
		display: inline-block;
		width: 247px;
		height: 36px;
		background: #232E64;
		text-align: center;
		font-size: 13px;
		color: white;
		line-height: 36px;
		margin: 25px 0;
	}
	#input2 #input-san span:hover{
		cursor: pointer;
	}
	#input2 #input-san span:first-child{
		margin-left: 160px;
	}
	#input2 #input-san span.active{
	background: #E1B51B;
	}
	#masage-o span{
		display: inline-block;
		width: 159px;
		height: 38px;
		text-align: left;
	}
	#masage-o input{
		width: 500px;
		height: 38px;
		outline: none;
		border: 1px solid #ccc;
		margin: 25px 0;
	}
	#masage-t span{
		display: inline-block;
		width: 159px;
		height: 38px;
		text-align: left;
	}
	#masage-t input{
		width: 500px;
		height: 38px;
		outline: none;
		border: 1px solid #ccc;
		margin: 25px 0;
	}
	#cod{
		width: 1300px;
		margin: 0 auto;
		padding-top: 136px;
		font-size: 47px;
		color: black;
		text-align: center;
		background: #F1F9FC;
	}
	#cod P{
		padding-bottom: 77px;
	}
	#cod div{
		width: 1300px;
		margin: 0 auto;
	}
	#cod div img{
		vertical-align: top;
		width: 1210px;
		height: 362px;
		margin: 0 auto;
	}
</style>
