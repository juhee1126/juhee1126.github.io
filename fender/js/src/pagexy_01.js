// pagexy_01.js

(function($){
	var winWidth = $(window).width();
	$('#wrap').on('mousemove', function(e){
		var poX = e.pageX;
		var poY = e.pageY;
 console.log(poX);
		$('.front').css({transform:'translate('+poX/50+'%)'});
		$('.back').css({transform:'translate('+-poX/50+'%)'});
	});
})(this.jQuery);