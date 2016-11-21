//show_up.js
$(function(){

//메인페이지

var bg_box_01 =  $('.bg_box').fadeIn(3000);
var menu = $('#menu').delay(1000).fadeIn(500);
var logo = $('#topBtn').delay(1000).fadeIn(500);
// + $('#topBtn').delay(100).fadeIn(500);
var main_01 = $('#mainBox').find('.mainTitle_01').delay(1500).fadeIn(500);
var main_02 = $('#mainBox').find('.mainTitle_02').delay(1700).fadeIn(500);
var main_03 = $('#mainBox').find('.mainTitle_03').delay(1900).fadeIn(500);
var red = $('.red').delay(2400).fadeIn(1500);
var blue = $('.blue').delay(2500).fadeIn(1500);
var black = $('.black').delay(2600).fadeIn(1500);
var brown =	$('.green').delay(2700).fadeIn(1500);
var snb_01 = $('#snb').find('li').eq(0).delay(3000).fadeIn(1000);
var snb_02 = $('#snb').find('li').eq(1).delay(3000).fadeIn(1000);
var snb_03 = $('#snb').find('li').eq(2).delay(3000).fadeIn(1000);
var snb_04 = $('#snb').find('li').eq(3).delay(3000).fadeIn(1000);
var snb_05 = $('#snb').find('li').eq(4).delay(3000).fadeIn(1000);
var scroll = $('#scrollDown').delay(3200).fadeIn(1000);
	
// neck
var neck_tit = $('#neckBox').find('#neckTitleBox').delay(1500).fadeIn(500);
// about
var about_tit = $('#aboutBox').find('#aboutTitleBox').delay(1500).fadeIn(500);
var about_txt = $('#aboutBox').find('#aboutTextBox').delay(2000).fadeIn(1500);
var about_btn = $('#aboutBox').find('button').delay(2500).fadeIn(1500);




 // 링크연결 
 $('.mnbTextUl>li').on('click',function(e){
 	$('#mnb').fadeOut(1000,function(){
 		$('content').fadeOut(1000);
 		});
 	});

});

