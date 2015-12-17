$(document).ready(function() { 
	$('.submenu-icon').on('click', function(){
		//$(this).addClass('hej');
		$(this).closest('li').find('.thirdmenu').toggle();
	});
});

$(".toggle-menu").click(function () {	
	$(".menu").slideToggle(200);
});