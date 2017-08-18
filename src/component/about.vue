<template>
<div>
	<div id="wisdom-header">
		<img src="../assets/new-htr.jpg" height="512" width="1300" alt="">
	</div>
	<div id="img1" class="img1">
			<img src="../assets/ab-htr-bg.png" height="140" width="1300" alt="">
	</div>
	<div class="blood">
		<p class="p1">纯正新西兰血统</p>
		<p class="p2">系出名门恒天然</p>
		<div><img src="../assets/productionLogo (1).png" height="71" width="79" alt=""></div>
	</div>
	<div id="sky">
		<div>
			<p>恒天然简介</p>
		</div>
		<ul>
			<li><img src="../assets/intro1.jpg" height="368" width="368" alt=""></li>
			<li><img src="../assets/intro2.jpg" height="368" width="368" alt=""></li>
			<li><img src="../assets/intro3.jpg" height="368" width="368" alt=""></li>
			<li><img src="../assets/intro4.jpg" height="368" width="368" alt=""></li>
			<li><img src="../assets/intro5.jpg" height="368" width="368" alt=""></li>
			<li><img src="../assets/intro6.jpg" height="368" width="368" alt=""></li>
		</ul>
	</div>
	<div id="lunbo-last">
		<div class="lunbo-o">
			<div><img src="../assets/last-o.jpg" height="724" width="1300" alt=""></div>
			<div><img src="../assets/last-t.jpg" height="724" width="1300" alt=""></div>
			<div><img src="../assets/last-h.jpg" height="724" width="1300" alt=""></div>
		</div>
		<div class="lunbo-t">	
			<span class="active"></span>
			<span></span>
			<span></span>
		</div>
	</div>
</div>
</template>
<script>
	export default{
		created (){
			$(function (){
				$('#lunbo-last .lunbo-t span').click(function (){
					$('#lunbo-last .lunbo-t span').removeClass('active');
					$(this).addClass('active');
					$('#lunbo-last .lunbo-o div').hide().eq($(this).index()).fadeIn();
				});
			})
		}
	}
</script>
<style>
#lunbo-last{
	width: 1300px;
	margin: 0 auto;
	overflow: hidden;
	position: relative;
}
#lunbo-last .lunbo-o div:first-child{
	display: block;
}
#lunbo-last .lunbo-o div{
	display: none;
}
#lunbo-last .lunbo-t{
	width: 54px;
	height: 10px;
	position: absolute;
	left: 50%;
	bottom: 50px;
	margin-left: -20px;
}
#lunbo-last .lunbo-t span{
	display: inline-block;
	width: 10px;
	height: 10px;
	background: #ccc;
	border-radius: 50%;
}
#lunbo-last .lunbo-t span.active{
	background: #202A4B;
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
	#sky{
		width: 1300px;
		margin: 0 auto;
		background: #FFFFFF;
	}
	#sky div{
		width: 1300px;
		margin: 0 auto;
		text-align: center;
		padding: 80px 0;
		color: #232E64;
		font-size: 45px;
	}
	#sky ul{
		width: 1240px;
		margin: 0 auto;
		overflow: hidden;
	}
	#sky ul li{
		float: left;
		margin: 12px 20px;
	}

</style>