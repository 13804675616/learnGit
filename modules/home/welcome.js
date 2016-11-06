define([
		'text!../../views/welcome.html',
		'$css!../../css/welcome.css'

	],
	function(html) {
		function render() {

			$(".container").html(html);
//			$(".tabBar").hide();
			intoHome();
//			loca();
			$(".tabBar").hide();

		}

		function intoHome() {
			$(".warnBig").show();
			$(".warnAlert .no").on("click", function() {
				alert("您已拒绝定位，定位失败！");
				location.hash = "home";

			})
			$(".yes").on("click", function() {

				try {
					wx.ready(function() {
						console.log(11);
						wx.getLocation({
							type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
							success: function(res) {
								var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
								var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
								var speed = res.speed; // 速度，以米/每秒计
								var accuracy = res.accuracy; // 位置精度
								alert(latitude);

								//			        callback && callback(res)
							},
							fail: function() {
								//alert('fail');
							}
						});
						location.hash = "home";
					})
				} catch(e) {
					console.log(e);
				}
location.hash = "home";
			})
		}

		return {
			render: render

		}
	}
)