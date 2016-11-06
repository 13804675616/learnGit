define([
		'text!../../views/myPointCity.html',
		'$css!../../css/myPointCity.css'

	],
	function(html) {
		function render() {

			$('.container').html(html);
		
			
		}

		return {
			render: render
		
		}
	}
)