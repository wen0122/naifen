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
	<div id="sub">
		<div class="sub-o">
			<p>新西兰原产原装进口  全程安心追溯</p>
		</div>
		<div class="sub-t">
			<div class="div1">安满全球追溯</div>
			<div class="div2">
				<input type="text" placeholder="请输入产品包装底部的追溯码">
				<a href="javascript:;"><img src="../assets/submit.png" height="40" width="149" alt=""></a>
			</div>
		</div>
	</div>
	<div id="search">
		<div class="search-div">
			<div class="div1"><img src="../assets/query1.jpg" height="357" width="675" alt=""></div>
			<div class="div2">
				<h1>如何找到产品追溯码?</h1>
				<p>您可以选择扫描产品包装底部二维码进行追溯</p>
				<p>或手动输入产品包装底部的追溯码</p>
			</div>
		</div>
		<div class="search-b">
			<p class="p-o">母乳是婴儿最好的食物</p>
			<p>母乳是婴儿最好的食物，对宝宝的健康尤为重要。母乳为宝宝提供免疫系统，大脑全面</p>
			<p>发育及健康成长所需的营养成分，为宝宝打造一个美好的生命起点。世界卫生组织建议</p>
			<p>纯母乳喂养至少6个月，安满全力支持母乳喂养。</p>
		</div>
	</div>
	<div id="father">
		<img src="../assets/man.png" height="606" width="1300" alt="">
		<div class="son">
			<div><img src="../assets/productionLogo (1).png" height="71" width="79" alt=""></div>
			<div><h1>安心供应链</h1></div>
			<p>保护宝宝的饮食安全是父母的首要责任。在产品生产与制作的过程中，安满坚持每</p>
			<p>一个生产环节都进行严格的管控，竭尽所能为妈妈和宝宝提供值得信任的产品， 让</p>
			<p>妈妈坚信所选。</p>
		</div>
	</div>
	<div id="phone">
		<div>
			<p>若有疑问或需要帮助</p>
			<p>敬请致电400-920-7666咨询</p>
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
	.blood div{
		margin-top: 30px;
	}
	#wisdom-header img{
		vertical-align: top;
	}
	#sub{
		width: 1300px;
		background: #E2DBEB;
		margin: 0 auto;
	}
	.sub-o{
		width: 1160px;
		margin: 0 auto;
		color: #232E64;
		font-size: 30px;
		text-align: left;
		padding-top: 46px;
	}
	.sub-t{
		width: 1160px;
		margin: 0 auto;
		overflow: hidden;
	}
	.sub-t div{
		float: left;
	}
	.sub-t .div1{
		margin-top: 20px;
		font-size: 18px;
		color: #232E64;
		float: left;
		font-weight: bold;
	}
	.sub-t .div2{

		float: right;
		padding: 20px 0 80px 0;
	}
	.sub-t .div2 input{
		width: 340px;
		height: 40px;
		padding-left: 10px;
		outline: none;
		border: 1px solid #ccc;
		background: #fff;
		margin-right: 71px;
	}
	.sub-t .div2 img{
		vertical-align: middle;
		margin-right: 94px;
	}
	#search{
		width: 1300px;
		margin: 0 auto;
		background: #FFFFFF;
	}
	#search .search-div{
		overflow: hidden;
	}
	#search .search-div div{
		float: left;

	}
	#search .search-div .div1{
		width: 708px;
		height: 357px;
		margin-left: 66px;
		margin-top: 121px;
	}
	#search .search-div .div1 img{
		width: 100%;
		height: 100%;
	}
	#search .search-div .div2{
		width: 338px;
		height: 153px;
		margin-left: 56px;
		line-height: 30px;
	}
	#search .search-div .div2 h1{
		margin-bottom: 40px;
		margin-top: 221px;
		font-size: 29px;
		color: #232E64;
	}
	#search .search-b{
		width: 1300px;
		margin: 0 auto;
		text-align: center;
		margin-top: 108px;
		padding-bottom: 55px;
	}
	#search .search-b p{
		font-size: 16px;
		color: #232E64;
	}
	#search .search-b .p-o{
		font-size: 31px;
		color: #232E64;
		margin-bottom: 29px;
	}
	#father{
		width: 1300px;
		margin: 0 auto;
		position: relative;
		background: white;
	}
	#father .son{
		width: 645px;
		height: 274px;
		position: absolute;
		left: 69px;
		top: 70px;
	}
	#father .son h1{
		font-size: 48px;
		color: #5FB8DA;
		margin-bottom: 22px;
	}
	#father .son p{
		font-size: 16px;
		color: #232E64;
	}
	#phone{
		width: 1300px;
		margin: 0 auto;
		text-align: center;
		color: #232E64;
		line-height: 30px;
		font-size: 23px;
		background: white;
		padding: 30px 0;
	}
</style>
