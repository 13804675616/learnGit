define([
		'text!../../views/my.html',
		'$css!../../css/my.css',
		
	],
	function(html) {

		function render() {
			$('.tabBar').css("visibility","visible");
			$('.container').html(html);
		}
		

		return {
			render: render

		}

	}
)