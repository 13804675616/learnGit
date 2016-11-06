<?php
require_once("jssdk.php");
$jssdk = new jssdk("wxa4a655d860e3ccf0", "02860149398583c8baaaddc4688ba850");
$signPackage = $jssdk->GetSignPackage();
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	
	<title>爱鲜蜂</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	
	<link rel="stylesheet" type="text/css" href="css/reset.css" />
	<link rel="stylesheet" type="text/css" href="css/tabBar.css" />
	<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
	<script>
			wx.config({
	    appId: '<?php echo $signPackage["appId"];?>',
	    timestamp: <?php echo $signPackage["timestamp"];?>,
	    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
	    signature: '<?php echo $signPackage["signature"];?>',
	    jsApiList: [
	      'getLocation','scanQRCode'
	    ]
	});
//	wx.ready(function(){
//		wx.getLocation({
//			    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
//			    success: function (res) {
//			        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
//			        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
//			        var speed = res.speed; // 速度，以米/每秒计
//			        var accuracy = res.accuracy; // 位置精度
//			        alert(latitude);
////			        callback && callback(res)
//			    },
//			    fail:function(){
//			    	//alert('fail');
//			    }
//			});
//	})
	</script>
	<script>
			(function(window){
				var winW = document.documentElement.clientWidth||document.body.clientWidth;
				document.documentElement.style.fontSize = winW / 10 + "px";
				window.onresize = function(){
					var winW = document.documentElement.clientWidth ||document.body.clientWidth;
					document.documentElement.style.fontSize=winW / 10 + "px";
				}
				
			}(window));
		</script>
</head>
<body>
	<div class='container'></div>
	<!--底部按钮部分-->
		<nav class="tabBar">
			
			<ul>
				<li class="barItem1">
					<a href="#home"><div class="itemIcon1"></div>
					首页</a>
				</li>
				<li class="barItem2">
					<a href="#market"><div class="itemIcon2"></div>
					闪送超市</a>
				</li>
				<li class="barItem3">
					<a href="#freshOrder"><div class="itemIcon3"></div>
					新鲜预订</a>
				</li>
				<li class="barItem4">
					<a href="#shoppingCart"><div class="itemIcon4">
					<!--	<div class="redPoint">5</div>-->
					</div>
					购物车</a>
				</li>
				<li class="barItem5">
					<a href="#my"><div class="itemIcon5"></div>
					我的</a>
				</li>
			</ul>
	</nav>
	
	<script src="lib/require.js" data-main="app.js"></script>
	
</body>
</html>
<script>
	wx.error(function(res){
			alert(JSON.stringify(res));
	});
</script>







