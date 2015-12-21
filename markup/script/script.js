$(document).ready(function() { 
	$('.expand').on('click', function(){
		$(this).closest('li').find('.thirdmenu').toggle();
		$(this).toggleClass('open');
	});
});

$(".toggle-menu").click(function () {	
	$(".menu").slideToggle(200);
});

$(".all-service").click(function () {	
	$(".all").slideToggle(200);
});