define([
		'text!../../views/freshOrder.html',
		'$css!../../css/freshOrder.css',
		
	],
	function(html) {

		function render() {

			$('.container').html(html);
			getFreshOrder();
		}
		
		function getFreshOrder(){
			$.get('http://www.vrserver.applinzi.com/aixianfeng/apiyuding.php', function(res) {
				var getOrderData = res.split("<scri")[0],
			
			//获取数据
				orderData = JSON.parse(getOrderData);
				var str = "";
				
				for(var i=0;i<orderData.product.length;i++){
					str+="<dl>"+
					"<dt><img src='"+orderData.product[i].img+"'></dt>"+
					"<dd>"+
						"<p class='order_title'>"+orderData.product[i].name+"</p>"+
						"<div class='order_fruitPrice'>"+
							"<span>￥</span>"+
							"<span>"+orderData.product[i].price+"</span>"+
							"<span>￥"+orderData.product[i].market_price+"</span>"+
						"</div>"+
						"<div class='order_cart'>"+
							"<img src='img/freshCart.png' >"+
						"</div>"+
					"</dd>"+
				"</dl>";
				}
			$(".order_fruits").html(str);
			});
		}
		
		

		return {
			render: render

		}

	}
)