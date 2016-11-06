define([
		'text!../../views/addPosition.html',
		'$css!../../css/addPosition.css'

	],
	function(html) {
		function render() {

			$('.container').html(html);
		
			
		}

		return {
			render: render
		
		}
	}
);