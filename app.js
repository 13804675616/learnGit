require.config({

	paths:{
		'jquery':'./lib/jquery',
		'backbone':'./lib/backbone',
		'underscore':'./lib/underscore',
		'text':'./lib/text',
		'$css':'./lib/css',
		'$less':'./lib/less'
	}
});


require(['jquery','backbone','./router.js'],function($,Backbone){


	Backbone.history.start();
})