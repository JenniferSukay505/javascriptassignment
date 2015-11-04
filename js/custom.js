$(document).ready(function(){
	/***********************
	 *changes color of text
	 *
	 * mouse over
	 *
	 * Author:jhung@cnm.edu
	 *
	 ************************/

		$(document).ready(function(){
			$("p").on({
				mouseenter: function(){
					$(this).css("color", "yellow");
				},
				mouseleave: function(){
					$(this).css("color", "orange");
				},
				click: function(){
					$(this).css("color", "blue");
				}
			});
		});

