// menu.js

$(function(){
	//menu버튼 on / off

	$('#menu').on('click',function(){
		$('#mnb').fadeIn(500);
		(function() {
		var mnb = $('#mnb').css('display');
		if(mnb == 'block'){
			var logo = $('.mnbLogo');
			var red = $('.mnbLogo').offset().top;
			var home = $('.mnbTextUl>li:nth-of-type(1)').offset().top;
			var product = $('.mnbTextUl>li:nth-of-type(2)').offset().top;

			var video = $('.mnbTextUl>li:nth-of-type(3)').offset().top;
			var about = $('.mnbTextUl>li:nth-of-type(4)').offset().top;
			var contact = $('.mnbTextUl>li:nth-of-type(5)').offset().top;
			
			var minus_00 = 0;
			var minus_01 = product - home;
			var minus_02 = video - home;
			var minus_03 = about - home;
			var minus_04 = contact - home;
			// console.log(video);
			// console.log(home);


			$('.mnbHome').on('mouseenter',function(){
			logo.stop().animate({marginTop:minus_00},500);


			});
			$('.mnbProduct').on('mouseenter',function(){
			logo.stop().animate({marginTop:minus_01 +'px'},500);


			});
			$('.mnbVideo').on('mouseenter',function(){
			logo.stop().animate({marginTop:minus_02 +'px'},500);
			});
			$('.mnbAbout').on('mouseenter',function(){
			logo.stop().animate({marginTop:minus_03 +'px'},500);
			});
			$('.mnbContact').on('mouseenter',function(){
			logo.stop().animate({marginTop:minus_04 +'px'},500);
			});
		}
	}());

	});
	

	$(".close").on('click',function(){
		var zero = 0;
		$('#mnb').fadeOut(500,function(){
		$('.mnbLogo').css({marginTop:zero});
			
		});
	});
	
	//F-logo 위치 찾아가기
	//var li_num = $('.mnbTextUl>li').index(this);
	
});

