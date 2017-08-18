<template>
<div>
	<div id="wisdom-header">
		<img src="../assets/wisdom-kv.jpg" height="512" width="1300" alt="">
	</div>
	<div class="blood">
		<p class="p1">纯正新西兰血统</p>
		<p class="p2">系出名门恒天然</p>
		<div><img src="../assets/productionLogo (1).png" height="71" width="79" alt=""></div>
	</div>
	<div id="wisdom-xiong">
		<div class="content">
			<p>让宝宝在自然的环境中自由成长</p>
			<p>在玩耍中培养创造力和启发想像力</p>
			<p class="content-o">是新生代父母不断追求的育儿方式</p>

			<p class="content-t">这与安满的育儿理念相契合</p>
			<p class="content-t">安满一直倡导：快乐、天赋、自由、具有创造力</p>
			<p class="content-t">强调通过给宝宝一个自由的环境</p>
			<p class="content-t">助力宝宝发展与创造力属性相关的认知和社会情感技能</p>
			<p class="content-t">开启充满未知可能的未来</p>
		</div>
		<div class="Img" id="show-o">
			<img src="../assets/wisdom1_1.png" height="386" width="442" alt="">
		</div>
	</div>
	<div class="children">
			<h1>关于孩子大脑发育，你可能不知道的大事！</h1>
			<p>你知道吗，每个宝宝出生的时候都同样有大约1000亿个脑细胞，而在宝宝出生的前三年，正是这些脑细胞建立连结潜能的最高峰</p>
			<p>因为大脑神经元在这个时期产生分叉，并发生连结形成网状结构，脑细胞可以有高达10万亿次的连结!在这段关键时期宝宝的</p>
			<p>脑细胞连结程度与宝宝日后的学习能力息息相关。可以说，脑细胞的充分连结就是给宝宝的学习力和记忆力打基础， 妈妈们千万不可小看哦</p>
	</div>
	<div class="grow-up">
		<p class="p1">成长陪伴</p>
		<p class="p2">0-3岁是宝宝未来发育的关键期</p>
		<div class="grow-child">
			<div class="div1" id="show-t">
				<img src="../assets/wis1.png" height="671" width="1026" alt="">
			</div>
			<div class="div2">
				<p>孕期</p>
				<div class="div3"><a href="javascript:;"><img src="../assets/wis_enter.png" height="40" width="117" alt=""></a></div>
			</div>
		</div>
		<div class="grow-childs">
		<div class="div2">
				<p>0-6个月</p>
				<div class="div3"><a href="javascript:;"><img src="../assets/wis_enter.png" height="40" width="117" alt=""></a></div>
			</div>
			<div class="div1" id="show-h">
				<img src="../assets/wis2.png" height="671" width="1026" alt="">
			</div>
			
		</div>
		<div class="grow-child">
			<div class="div1" id="show-t">
				<img src="../assets/wis3.png" height="671" width="1026" alt="">
			</div>
			<div class="div2">
				<p>6个月-1岁</p>
				<div class="div3"><a href="javascript:;"><img src="../assets/wis_enter.png" height="40" width="117" alt=""></a></div>
			</div>
		</div>
		<div class="grow-childs">
		<div class="div2">
				<p>1岁-3岁</p>
				<div class="div3"><a href="javascript:;"><img src="../assets/wis_enter.png" height="40" width="117" alt=""></a></div>
			</div>
			<div class="div1" id="bot">
				<img src="../assets/wis4.png" height="671" width="1026" alt="">
			</div>
			
		</div>
	</div>
</div>
</template>
<script>
	
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
	#show-o img:hover{
		animation: 1s up ease;
	}

	#show-t img:hover{
		animation: 1s left ease;
	}
	#show-h img:hover{
		animation: 1s right ease;
	}
	#bot img:hover{
		animation: 1s right ease;
	}
	.blood div{
		margin-top: 30px;
	}
	#wisdom-header img{
		vertical-align: top;
	}
	#wisdom-xiong{
		width: 1300px;
		margin: 0 auto;
		background: #D5CBE3;
		overflow: hidden;
	}
	.content{
		width: 576px;
		height: 350px;
		margin-left: 50px;
		padding-top: 73px;
		float: left;
		}
	.content p{
		font-size: 26px;
		color: #603D7C;
	}
	.content .content-o{
		margin-bottom: 37px;
	}
	.content .content-t{
		font-size: 22px;
		color: black;
	}
	.Img img{
		width: 388px;
		height: 339px;
		margin-left: 150px;
		padding-top: 40px;
	}
	.children{
		width: 1300px;
		margin: 0 auto;
		text-align: center;
		background: #F2F9FC;
		font-size: 13px;
		color: #333333;
	}
	.children p{
		line-height: 23px;
	}
	.children p:last-child{
		padding-bottom: 70px;
	}
	.children h1{
		font-size: 27px;
		color: #232E64;
		padding: 46px 0;
	}
	.grow-up{
		width: 1300px;
		margin: 0 auto;
		background: #E2DBEB;
	}
	.grow-up .p1{
		text-align: center;
		font-size: 34px;
		color: #232E64;
		padding: 114px 0 0 21px;
	}
	.grow-up .p2{
		text-align: center;
		font-size: 18px;
		color: #232E64;
		padding-bottom: 47px;
	}
	.grow-child{
		width: 1300px;
		margin: 0 auto;
		overflow: hidden;
		padding: 20px 0;

	}
	.grow-child .div1{
		margin-left: 185px;
		float: left;
	}
	.grow-child .div1 img{
		width: 560px;
		height: 358px;
	}
	.grow-child .div2{
		width: 176px;
		height: 172px;
		float: left;
		text-align: center;
		color: blue;
		font-size: 31px;
		padding-top: 80px;
		margin-left: 20px;
	}
	.grow-child .div2 p{
		margin-bottom: 20px;
	}
	.grow-childs{
		width: 1300px;
		margin: 0 auto;
		overflow: hidden;
		padding: 20px 0;

	}
	.grow-childs .div1{
		margin-left: 20px;
		float: left;
	}
	.grow-childs .div1 img{
		width: 560px;
		height: 358px;
	}
	.grow-childs .div2{
		width: 176px;
		height: 172px;
		float: left;
		text-align: center;
		color: blue;
		font-size: 31px;
		padding-top: 80px;
		margin-left: 300px;
	}
	.grow-childs .div2 p{
		margin-bottom: 20px;
	}
	#bot{
		margin-bottom: 70px;
	}
</style>