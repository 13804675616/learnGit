define([
		'text!../../views/myOrder.html',
		'$css!../../css/myOrder.css'

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