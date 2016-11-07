define([
	'../shoppingCart/shoppingCart.js',
		'text!../../views/home.html',
		'$css!../../css/home.css',
		'$css!../../css/swiper-3.3.1.min.css',
		'$css!../../css/animation.css'
		
		

	],
	function(shoppingCart,html) {
		function render() {
			$('.container').html(html);
			$(".tabBar").show();
			getAjax();
			getHotData();
			

		}
		//轮播方法
		function slider() {
			var mySwiper = new Swiper('.swiper-container', {
				autoplay: 1000, //可选选项，自动滑动
				loop: true,
				pagination: '.swiper-pagination',
				paginationClickable: true,
				onAutoplayStop: function(swiper) {
					swiper.startAutoplay();
				}
			});
		}

		//获取数据
		function getAjax() {
			
//			$(".redPoint").html();
			$.get('http://www.vrserver.applinzi.com/aixianfeng/apihome.php', function(res) {

				//获取轮播图数据
				var result = res;
				//				result = result.substr(0, result.indexOf("<scr"));
				var slides = JSON.parse(result).data.slide,
					menus = JSON.parse(result).data.menu;

				for(var i = 0; i < slides.length; i++) {
					$(".swiper-wrapper").append("<div><img/></div>").children("div").addClass("swiper-slide");
					$(".swiper-slide:nth-of-type(" + parseInt(i + 1) + ")").children("img").attr("src", slides[i].activity.img);
				}
				slider();

				//获取菜单数据
				var str = "";
				for(var i = 0; i < menus.length; i++) {

					str += "<div><a class = a" + i + ">" +
						"<img src = " + menus[i].activity.img + ">" +
						"<p>" + menus[i].activity.name + "</p></a></div>";
				}
				$(".home_menu").html(str);
				$(".a1").attr("href", "#secondKill");
			});
		}
		var objData = {};
		//获取热卖数据
		function getHotData() {
			$.get('http://www.vrserver.applinzi.com/aixianfeng/apihomehot.php', function(res) {
				//截取script前面的字符串  -- 数据
				var hotData = res.split("<scri")[0],
					hot = JSON.parse(hotData);
				objData = hot;
				var str = "";

				for(var i = 0; i < hot.data.length; i++) {

						str += "<li>\
		                <div class = 'home_dis'" + parseInt(i) + 1 + ">\
		                <img src = " + hot.data[i].img + ">\
		                <img src = " + hot.data[i].img + " class = 'img_hid' >\
		                <span class='tit' id='name" + i + "'>" + hot.data[i].name + "</span>\
		                <div class = 'home_title'>\
		                   <span>精选</span>\
							<span>" + hot.data[i].pm_desc + "</span>\
						</div>\
						<p class='home_clearfix'></p>\
						<p>" + hot.data[i].specifics + "</p>\
						<p class='home_clearfix'></p>\
						<div class='home_price'>\
							<span>￥" + hot.data[i].price + "</span>\
							<span>￥" + hot.data[i].market_price + "</span>\
						</div>\
						<p class='home_clearfix'></p>\
						<div class='home_add'>\
							<span class='sub'>-</span>\
							<input type='text' value='0' class='res'/>\
							<span class='add'>+</span>\
						</div>\
		               </div>\
		               </li>";

				}
				$(".home_hot").html(str);
				addToCart();

			});
		};
		var count = 0,
			goods = [];

		function save(i) {
			//	goods[i] = objData.data[i];
			//把点击过的商品存入goods
			if(window.localStorage) {
				//记录下点击过的商品的名称和价格

				//记录localStorage存储了多少条内容
				var id = i;
				var data = objData.data[i];
				

				//由于存储到localStorage 后 会自动toString()  所以 直接存入对象会导致无法获取数据
				//需要将对象进行序列化
				window.localStorage.setItem(id, JSON.stringify({
					name: data.name,
					img: data.img,
					price: data.price,
					count: data.count

				}));

			} else {
				alert("您的浏览器不支持本地存储！");
			}
			//					 read(length);
		}


		function addToCart() {
			$(".add").on("click", function(e) {

				clearTimeout(set);
				isVisible($(this));

				//					//为了避免重复 用id进行添加   
				console.log("文本框" + $(this).prev().val());
				//取得id  和 前面文本框的值  即数量
				console.log("jiequ"+$(this).parent().siblings("span.tit").attr("id").substr(4));
				save($(this).parent().siblings("span.tit").attr("id").substr(4));
				
				
//				var data = window.localStorage.getItem(key);
//
//			if(data) {
//				
//				data = JSON.parse(data);

				//左侧加入购物车动画
				//如果对2取余为0  证明是索引为0 2 4等元素  是第奇数个元素 动画向右
				if($(".add").index($(this)) % 2 != 0 && !$(this).parent().siblings("img").hasClass("img_hidSpe3")) {
					$(this).parent().siblings(".img_hid").removeClass("imgAniClick").addClass("imgAniClick");
					var set = setTimeout(function() {
						$(".img_hid").removeClass("imgAniClick");
					}, 800)
				} else {
					//动画向下
					$(this).parent().siblings(".img_hid").removeClass("imgAniClickEven").addClass("imgAniClickEven");
					var set = setTimeout(function() {
						$(".img_hid").removeClass("imgAniClickEven");
					}, 800)
				}
				//				save();
			});
			$(".sub").on("click", function() {
				isVisible($(this));

				save($(this).parent().siblings("span.tit").attr("id").substr(4));
			});

		}

		//如果文本的数值>=1  则显示前两个元素  否则隐藏
		function isVisible(param) {
			var p = param.siblings("input");
			//if(p.val()>=0){
			param.siblings().css("visibility", "visible");
			//如果当前点击的span存在前一个元素   那么点击的是 +，否则点击的是-
			if(param.hasClass("add")) {
				//当数值大于0  判断当前点击的是+还是- 如果是-  数字-1
				p.val(parseInt(p.val()) + 1);
				$(".redPoint").html(parseInt($(".redPoint").html())+1);
				console.log(param.prev().val());
				if(typeof(objData.data[$(".add").index(param) - 3]["count"]) != Number) {
					objData.data[$(".add").index(param) - 3]["count"] = param.prev().val();
				} else {
					objData.data[$(".add").index(param) - 3]["count"] = parseInt(param.prev().val()) + parseInt(objData.data[$(".add").index(param) - 3]["count"]);
					console.log(objData.data[$(".add").index(param) - 3]["count"]);
				}

				//如果是 - 
			} else {
				p.val(parseInt(p.val()) - 1);
				$(".redPoint").html(parseInt($(".redPoint").html())-1);
				if(typeof(objData.data[$(".sub").index(param)]["count"]) != Number) {
					objData.data[$(".sub").index(param)]["count"] = param.prev().val();
				} else {
					objData.data[$(".sub").index(param)]["count"] = parseInt(param.prev().val()) + parseInt(objData.data[$(".sub").index(param)]["count"]);
					console.log(objData.data[$(".sub").index(param)]["count"]);
				}
				objData.data[$(".sub").index(param)]["count"] = param.next().val();
				if(parseInt(p.val()) <= 0) {
					param.css("visibility","hidden");
					p.css("visibility","hidden");
					p.val(0);
				}
			}
		}

		return {
			render: render

		}
	}
);