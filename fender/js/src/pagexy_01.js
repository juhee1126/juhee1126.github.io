//  pagexy_01.js

(function($) {
	var winWidth = $(window).width();
	$('.bg_box').on('mousemove',function(e) {
		var poX = e.pageX;
		var poY = e.pageY;
		// console.log(poX);
		// console.log(poY);

		$('.front').css({transform:'translate(' + poX/80 +'px'});
		$('.back').css({transform:'translate(' + -poX/80 +'px'});
	});

})(this.jQuery);