// menu_sliding.js
$(function() {
	var menu = $('.menu');
	var menu_view = $('.menu_slide');
	
	menu.on('mouseenter', function() {
		menu_view.stop().show();
	});
	menu_view.on('mouseleave', function() {
		menu_view.stop().hide();
	});
});