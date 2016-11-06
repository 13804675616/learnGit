define([
		'text!../../views/searchInput.html',
		'$css!../../css/searchInput.css'

	],
	function(html) {
		function render() {

			$('.container').html(html);
//			$('.tabBar').css("visibility","hidden");
		
			
		}

		return {
			render: render
		
		}
	}
)