define(['backbone'],function(){

	var Router = Backbone.Router.extend({

		routes: {
		"home":  "home",
		"welcome":"welcome",
		"market": "market",
		"freshOrder":"freshOrder",
		"shoppingCart":"shoppingCart",
		"my":"my",
		"addPosition":"addPosition",
		"myOrder":"myOrder",
		"myPointCity":"myPointCity",
		"searchInput":"searchInput",
		"searchResult":"searchResult",
		"secondKill":"secondKill",
		"shoppingCart":"shoppingCart",
		"addPosition":"addPosition",
		"*actions":"defaultAction"
		},

		home: function() {
			require(['./modules/home/home.js','./lib/swiper-3.3.1.jquery.min.js'],
			function(home){
				home.render();
			})
		},
		market: function() {
			require(['./modules/market/market.js'],
			function(market){
				market.render();
			})
		},
		freshOrder: function() {
			require(['./modules/freshOrder/freshOrder.js'],
			function(freshOrder){
				freshOrder.render();
			})
		},
		shoppingCart: function() {
			require(['./modules/shoppingCart/shoppingCart.js'],
			
			function(shoppingCart){
				shoppingCart.render();
			})
		},
		addPosition: function() {
			require(['./modules/my/addPosition.js'],
			function(addPosition){
				addPosition.render();
			})
		},
		my: function() {
			require(['./modules/my/my.js'],
			function(my){
				my.render();
			})
		},
		myOrder: function() {
			require(['./modules/my/myOrder.js'],
			function(myOrder){
				myOrder.render();
			})
		},
		myPointCity: function() {
			require(['./modules/my/myPointCity.js'],
			function(myPointCity){
				myPointCity.render();
			})
		},
		searchInput: function() {
			require(['./modules/home/searchInput.js'],
			function(searchInput){
				searchInput.render();
			})
		},
		searchResult: function() {
			require(['./modules/home/searchResult.js'],
			function(searchResult){
				searchResult.render();
			})
		},
		secondKill: function() {
			require(['./modules/home/secondKill.js'],
			function(secondKill){
				secondKill.render();
			})
		},
		welcome: function() {
			require(['./modules/home/welcome.js'],
			function(welcome){
				welcome.render();
			})
		},
		
        defaultAction:function(){
            location.hash = "welcome";
        }

	});

	var router = new Router();

	return router;

})

