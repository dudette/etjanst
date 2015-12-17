$(document).ready(function() { 
	$('.expand').on('click', function(){
		//$(this).addClass('hej');
		$(this).closest('li').find('.thirdmenu').toggle();
		$('.expand').toggleClass('open');
	});
});

$(".toggle-menu").click(function () {	
	$(".menu").slideToggle(200);
});