//show_up.js
$(function(){

//메인페이지
var mainBox = $('#mainBox').fadeIn(1500);
var bg_box_00 =  $('.bg_box').delay(200).fadeIn(1500);
var bg_box_01 =  $('.bg_box').find('.front').fadeIn(1500);
var bg_box_02 =  $('.bg_box').find('.back').fadeIn(1500);

var menu = $('#menu').delay(1000).fadeIn(1000);
var logo = $('#topBtn').delay(1000).fadeIn(1000);

// + $('#topBtn').delay(100).fadeIn(500);

var main_01 = $('#mainTitleBox').fadeIn(1500);
var red = $('.red').delay(1000).fadeIn(1500);
var blue = $('.blue').delay(1100).fadeIn(1500);
var black = $('.black').delay(1200).fadeIn(1500);
var brown =	$('.green').delay(1300).fadeIn(1500);
var snb_01 = $('#snb').find('li').eq(0).delay(1000).fadeIn(1000);
var snb_02 = $('#snb').find('li').eq(1).delay(1000).fadeIn(1000);
var snb_03 = $('#snb').find('li').eq(2).delay(1000).fadeIn(1000);
var snb_04 = $('#snb').find('li').eq(3).delay(1000).fadeIn(1000);
var snb_05 = $('#snb').find('li').eq(4).delay(1000).fadeIn(1000);
var scroll = $('#scrollDown').delay(3200).fadeIn(1000);
	



// about
var aboutBox = $('#aboutBox').fadeIn(1000);
var about_tit = $('#aboutBox').find('#aboutTitleBox').delay(1500).fadeIn(500);
var about_txt = $('#aboutBox').find('#aboutTextBox').delay(2000).fadeIn(1500);
var about_btn = $('#aboutBox').find('button').delay(2500).fadeIn(1500);

//video

//링크연결 mainpage 

	$('.mnbTextBox').find('li').on('click',function(){
		var index = $(this).index();
		if(index == 1){
			$('#mnb').fadeOut(500);
		}

		else{$('#mnb').fadeOut(1000,function(){
			$('.content').fadeOut(1000);
			$('.bg_box').find('img').fadeOut(1000,function(){

				switch(index){
					case 0:
						location.href = 'index.html';
					break;
					case 1:
						location.href = 'mainpage.html';
					break;
					case 2:
						location.href = 'video.html';
					break;
					case 3:
						location.href = 'aboutus.html';
					break;
					case 4:
						location.href = 'contact.html';
					break;
				}

			});
		});
	}//else
});
// 링크연결 aboutus

	$('.mnbTextBox').find('li').on('click',function(e){
		var index = $(this).index();
		if(index == 3){
			$('#mnb').fadeOut(500);
		}
		else{$('#aboutBox').find('button').fadeOut(500,function(){
			$('#aboutTextBox').fadeOut(700,function(){
				$('#aboutTitleBox').fadeOut(900,function(){
					$('#aboutBox').fadeOut(500,function(){

				switch(index){
					case 0:
						location.href = 'index.html';
					break;
					case 1:
						location.href = 'mainpage.html';
					break;
					case 2:
						location.href = 'video.html';
					break;
					case 4:
						location.href = 'contact.html';
					break;
						}//switch
						});
					});
				});
			});
		}//else
	});//function aboutus

}); //jQuery function

