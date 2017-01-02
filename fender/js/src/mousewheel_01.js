//  mousewheel_01.js
$(function() {
		var mT_css = $('#mainTitleBox').css('display');		
		var mT = $('#mainTitleBox');		
		var mC = $('#mainColorBox');
		var bN = $('.bodyName');
		var bT = $('.bodyText').find('ul');
		var nT = $('#neckTitleBox');
		var nTx = $('#neckTextBox');
		var eN =$('.elecName');
		var eT =$('.elecText').find('ul');
		var win = $(window).height();
		var arti = $('#articleBox');
		var article = $('#articleBox').find('article');

	console.log("최초 마진값:"+$('#articleBox').css('marginTop'));
  $('#articleBox').on('mousewheel DOMMouseScroll', function(e) {
		e.preventDefault();
		var evt = e.originalEvent;
		var delta = 0;
		    arti_index = $(this).index(),
		    arti = $('#articleBox');
		    arti_height  = $('article').height(),
			win = parseInt($(window).height());

		var margin = arti.css('marginTop');
		console.log("현재 index값:"+arti_index);
			//firefox 에서는 originalEvent내에 detail이 존재
			if(!!evt.detail){
				var wheel_delta = evt.wheelDetail;
				if( wheel_delta <0){
				}else{
					$(this).animate({marginTop:'+=' + arti_height},500);			
				}
			}
			//그외 기능에서는 wheelDelta값이 존재
			else{
				var wheel_delta = evt.wheelDelta;
				if( wheel_delta <0){
					var test = parseInt($(this).css('marginTop'));
					console.log("내릴때 현재 마진값:"+test);
					console.log(-win*4);

					if(test <= -win*4){							
							arti.css({marginTop:-win*4});						
						}else{//공통사항
							$('.hide').fadeOut(500);
							$('.li').animate({marginLeft:-50+'%'},1500);
							$(this).stop().animate({marginTop:'-=' + arti_height},1500);
						//article 각 index별 효과	
							switch(test){
								case 0:
								bN.fadeIn(1500);
								bT.css({display:'block'});
								bT.find('li').eq(0).animate({marginLeft:0+'%'},1000);
								bT.find('li').eq(1).delay(100).animate({marginLeft:0+'%'},1000);
								bT.find('li').eq(2).delay(300).animate({marginLeft:0+'%'},1000);
							break;
								case -win:
									nT.delay(200).fadeIn(1500);
									nTx.delay(200).fadeIn(1500);								
								break;

								case -win*2:
								eN.fadeIn(1500);
								eT.css({display:'block'});
								eT.find('li').eq(0).animate({marginLeft:0+'%'},1500);
								eT.find('li').eq(1).animate({marginLeft:0+'%'},1000);
								eT.find('li').eq(2).animate({marginLeft:0+'%'},1000);
								eT.find('li').eq(3).animate({marginLeft:0+'%'},1000);
								break;
								
								case -win*3:

						if(article.eq(4).css({display:'block'})){
						article.eq(4).stop().animate({marginTop:100+'vh'},500)
						}
						$('.bg_box').fadeOut(300);
						article.stop().animate({'display':'none'},200);
						article.eq(4).css({'display':'block','marginTop:':100+'vh'});
						article.eq(4).animate({marginTop:0},500);						

							}//switch



						}//else 공통사항
				}else{			var test = parseInt($(this).css('marginTop'));
							if(test == 0){
								arti.css({marginTop:0});

							}else{


									$(this).stop().animate({marginTop:'+=' + arti_height},1500);
									console.log("올릴때 현재 마진값 :"+test);
						}
					}//else
			}//else
	});//mouse event

});
