define([
		'text!../../views/secondKill.html',
		'$css!../../css/secondKill.css'

	],
	function(html) {
		function render() {

			$('.container').html(html);
			//			$('.tabBar').css("visibility","hidden");
			//alert("jump");
			getGoodsData();

		}

		function getGoodsData() {
			$.get('http://www.vrserver.applinzi.com/aixianfeng/apimiaosha.php', function(res) {
				//截取script前面的字符串  -- 数据
				var getGoodsData = res.split("<scri")[0],

					//获取数据
					killGoods = JSON.parse(getGoodsData);
				//排除false的商品   只显示enable = true的商品
				console.log(killGoods);


				var str = "";
				var newKillGoods = new Array();
				for (var i = 0; i < killGoods.product.length; i++) {
					if (killGoods.product[i].enable == true) {
						console.log(11);
						newKillGoods.push(killGoods.product[i]);
						console.log(newKillGoods);
					}


				}
				for (var j = 0; j < newKillGoods.length; j++) {
					str += "<dl class='sk_dis" + parseInt(j) + 1 + "'>" +
						"<dt><img src = '" + newKillGoods[j].img + "'>" +
						"<dd>" +
						"<div class='sk_title'>" + newKillGoods[j].name + "</div>" +
						"<div class='sk_price'>" +
						"<span><span>￥</span>" + newKillGoods[j].price + "</span>" +
						"<span>/原价：" + newKillGoods[j].market_price + "</span></div>" +
						"<button>" + newKillGoods[j].btnText + "</button>" +
						"</dd>" +
						"</dl>" +
						"<p class='sk_clearfix'></p>";
				}

				console.log(str);
				$(".sk_goods").html(str);
			})
		}
		return {
			render: render

		}
	}
)