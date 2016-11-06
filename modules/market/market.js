define([
		'text!../../views/market.html',
		'$css!../../css/market.css',

	],
	function(html) {

		function render() {

			$('.container').html(html);
//			$('.tabBar').css("visibility","visible");
			getMarketData();
		}
		
		//获取数据
		function getMarketData() {
			var kind = "http://www.vrserver.applinzi.com/aixianfeng/apicategory.php?category=热销榜";
			//每个菜单选项获取来源不同，通过kind为地址传递一个参数  获取相应的数据
			$(".market_leftMenu").find("li").each(function(index){
				//为每次点击li菜单选项添加方法
				$(this).on("click",function(){
					kind = "http://www.vrserver.applinzi.com/aixianfeng/apicategory.php?category=" + $(this).text();
					//调用显示数据方法
					get(kind);
					//将左侧代表当前选中的小黄条放在选中项上
					$(this).prepend("<span></span>").siblings("li").children("span").remove();
				});
				//加载出来首先显示第一个li的数据
				$(".market_leftMenu").find("li:first-of-type").trigger("click");
			});
			//显示数据到页面的方法   当前只有前四项有数据
			function get(kind){
				$.get(kind,function(res) {
				var getMarketData = res.split("<scri")[0],
					//获取数据
					marketData = JSON.parse(getMarketData);
				var str = "";
				try{
								for(var i = 0; i < marketData.data.length; i++) {
					//拼接字符串一次加到页面上
					str += "<dl class='market_goods'>"+
								"<dt><img src='"+marketData.data[i].img+"'/></dt>"+
								"<dd>"+
									"<div class='market_title'>"+marketData.data[i].name+"</div>"+
										"<div class='market_tag'>"+
											"<span>精选</span>"+
											"<span>"+marketData.data[i].pm_desc+"</span>"+
										"</div>"+
									"<div class='market_weight'>"+marketData.data[i].specifics+"</div>"+
										"<div class='market_price'>"+
											"<span>￥"+marketData.data[i].price+"</span>"+
											"<span>￥"+marketData.data[i].market_price+"</span>"+
										"</div>"+
									"<p class='market_ori'>"+
									"<span>-</span>"+
									"<input type='button' value='1'>"+
									"<span>+</span>"+
									"</p>"+
								"</dd>"+
							"</dl>";
				}
				}catch(e){
					console.log("没有这么多数据了");
					get("http://www.vrserver.applinzi.com/aixianfeng/apicategory.php?category=热销榜")
				}
	
				$(".market_rightGoods").html(str);


			});
			}
		}

		return {
			render: render

		}

	}
)