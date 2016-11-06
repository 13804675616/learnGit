define([
		'text!../../views/shoppingCart.html',
		'$css!../../css/shoppingCart.css',

	],
	function(html) {

		function render() {
			$('.container').html(html);
			cart();
		}

		function cart() {
			var length = window.localStorage.length;
//			console.log(window.localStorage);
			var totalCost=0;
			var count = 0;
			
			for (var i in window.localStorage){
				red(i);
			}
			function red(i){
				if(window.localStorage.getItem(i).count!=0){
					var item = read(i);
					count +=parseInt(item.count);
					//总价格 += 每个的数量乘以每个的价格
					totalCost += Math.ceil(parseFloat(item.count) * parseFloat(item.price));
					$(".ct_priceAll").html(totalCost);
					$(".redPoint").html(count);
				}
			}
			
		}
		//读取
		function read(key) {
			var data = window.localStorage.getItem(key);

			if(data) {
				
				data = JSON.parse(data);
//				console.log(data);
				var li = document.createElement("li");
				li.className = "ct_li";
				//第一个放复选框
				var select = document.createElement("div");
				select.className = "ct_select";
				var multiDiv = document.createElement("div");
				multiDiv.className = "ct_picture";
				//第二个放图片
				var multiImg = document.createElement("img");			
				multiImg.src = data.img;
				multiDiv.appendChild(multiImg);

				//放信息
				var info = document.createElement("div"),
					title = document.createElement("p"),
					price = document.createElement("p");
				title.className = "ct_tit";
				title.innerHTML = data.name;
				price.className = "ct_priceP";
				price.innerHTML = "￥"+data.price;
				info.appendChild(title);
				info.appendChild(price);

				var number = document.createElement("div");
				//第四个放数量
				var minus = document.createElement("span");
				var inp = document.createElement("span");
				var add = document.createElement("span");
				number.appendChild(minus);
				number.appendChild(inp);
				number.appendChild(add);
				add.className = "ct_add";
				minus.className = "ct_minus";
				number.className = "ct_number";
				inp.className = "ct_num";
				minus.innerHTML = "-";
				inp.innerHTML = +data.count;
				add.innerHTML = "+"
				

				li.appendChild(select);
				li.appendChild(multiDiv);
				li.appendChild(info);
				li.appendChild(number);
				document.querySelector("ul").appendChild(li);
			}
			return data;
		}
		return {
			render: render

		}

	}
)