$(document).ready(function() { 

	//Toggle leftnavigation and icon
	$('.expand').on('click', function(){
		$(this).closest('li').find('.js-toggle:first').toggle();
		$(this).toggleClass('open');
	});

	// Toggle mobilemenu
	$(".toggle-menu").click(function () {	
		$(".menu").slideToggle(200);
	});

	// Show all button
	$(".show-all").keyup(function(event){
	    if(event.keyCode === 13){
	        $(".show-all").click();
	    }
	});

	$(".show-all").click(function () {	
		$(".all").slideToggle(200);
		$(".arrow").toggleClass('collapse');
		var el = $('.text-div');
		if (el.text() === el.data("text")) {
		  el.text(el.data("text-original"));
		} else {
		  el.data("text-original", el.text());
		  el.text(el.data("text"));
		}
	});

});


