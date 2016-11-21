// scroll_page_01.js

$(function() {
	
	// 네비게이션 부드럽게 처리효과
	var nav_link = $('#snb a');
	nav_link.on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:$(this.hash).offset().top});
	});
//    메인 기타 컬러 변경
//	var win = $(window).height();
//	var test = $('#abc');
//
//		test.height(win);

//  기타 이미지 컬러 변경
	var Color_div = $('#mainColorBox>div')
	var g_red = $('.red');
	var g_blue = $('.blue');
	var g_black = $('.black');
	var g_green = $('.green');
	var baseUrl ="./img/"

	
	// for(var i = 0; i< front_list.length; i++){
	//     var fr_img = $('bg_box').find('img');
	//     fr_img.eq(i).attr({src:baseUrl+front_list[i].img});
	// }

	// 빨간 컬러

	//g_red.on('mouseenter',function(){
	//
	//
	//var fr_img = $('.front');
	//   
	// fr_img.attr({src:baseUrl+front_list[i].img});
//
	//});
	
	$('#mainColorBox>div').on('mouseenter',function(){

	var front_list = [
	
	{"name":"red_front","img":"red_front.png","alt":"red_front"},
	{"name":"blue_front","img":"blue_front.png","alt":"blue_front"},
	{"name":"black_front","img":"black_front.png","alt":"black_front"},
	{"name":"brown_front","img":"brown_front.png","alt":"brown_front"},
	
	];
	
	var back_list = [
	
	{"name":"red_back","img":"red_back.png","alt":"red_back"},
	{"name":"blue_back","img":"blue_back.png","alt":"blue_back"},
	{"name":"black_back","img":"black_back.png","alt":"black_back"},
	{"name":"brown_back","img":"brown_back.png","alt":"brown_back"},
	
	];
	var div_num = $('#mainColorBox>div').index(this);

	console.log(div_num);

	console.log(front_list[div_num].img);
	var fr_img = $('.bg_box').find('img');

	console.log(fr_img);
	fr_img.eq(0).attr({src:baseUrl+front_list[div_num].img});
	fr_img.eq(1).attr({src:baseUrl+back_list[div_num].img});
	

	});








	// top버튼 좌표 찾기 -> 일단 보류
	
	var btn_top = $('#topBtn');
	btn_top.on('click',function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:0});
	});

	var headbox = $('#headBox'),
	    head_offset = headbox.offset().top,
	    mainBox_offset = $('#mainBox').offset().top,
	    bodyBox_offset = $('#bodyBox').offset().top,
	    neckBox_offset = $('#neckBox').offset().top,
	    elecBox_offset = $('#elecBox').offset().top,
	    hardBox_offset = $('#hardBox').offset().top,
	    ul_offset = $('#snb>ul').offset().top;


	    // scroll 위치에 따른 배경색상 변경
	$('#snb li').eq(0).css({'backgroundColor':'#ff0000'}) // 최초페이지 서브네비 색 표시
	$(window).on('scroll', function() {
		var scroll_top = $(window).scrollTop();
		// headbox.addClass('fix');
		// console.log(head_offset);
		// console.log(scroll_top);
		if(scroll_top == mainBox_offset){
			$('#mainBox').stop().animate({'backgroundColor':'#1C1F22'},1000);
			$('#snb li').eq(0).css({'backgroundColor':'#ff0000'});
		}else{
			$('#snb li').eq(0).css({'backgroundColor':'#fff'});
		}

		if(scroll_top == bodyBox_offset){
			$('#bodyBox').find('p').fadeIn(1000);
			$('#bodyBox').stop().animate({'backgroundColor':'#360E1A'},1000);
			$('#snb li').eq(1).css({'backgroundColor':'#ff0000'});
		}else{
			$('#snb li').eq(1).css({'backgroundColor':'#fff'});
		}
		
		if(scroll_top == neckBox_offset){
			$('#neckBox').stop().animate({'backgroundColor':'#09152B'},1000);
			$('#snb li').eq(2).css({'backgroundColor':'#ff0000'});
		}else{
			$('#snb li').eq(2).css({'backgroundColor':'#fff'});
		}
		if(scroll_top == elecBox_offset){
			$('#elecBox').stop().animate({'backgroundColor':'#1C1F22'},1000);
			$('#snb li').eq(3).css({'backgroundColor':'#ff0000'});
		}else{
			$('#snb li').eq(3).css({'backgroundColor':'#fff'});
		}
		if(scroll_top == hardBox_offset){
			$('#hardBox').stop().animate({'backgroundColor':'#46262E'},1000);
			$('#snb li').eq(4).css({'backgroundColor':'#ff0000'});
		}else{
			$('#snb li').eq(4).css({'backgroundColor':'#fff'});
		}

	});
// snb 클릭시 해당 페이지 색 변경 
	
	// $('#snb li').eq(0).css({'backgroundColor':'#ff0000'});
	$('#snb').find('li').on('click', function() {
		var scroll_top = $(window).scrollTop();
		// headbox.addClass('fix');
		// console.log(head_offset);
		// console.log(scroll_top);
		if(scroll_top == mainBox_offset){
			$('#mainBox').stop().animate({'backgroundColor':'#1C1F22'},1000);
			$('#snb li').eq(0).css({'backgroundColor':'#ff0000'});
		}else{
			$('#snb li').eq(0).css({'backgroundColor':'#fff'});
		}

		if(scroll_top == bodyBox_offset){
			$('#bodyBox').find('p').fadeIn(1000);
			$('#bodyBox').stop().animate({'backgroundColor':'#360E1A'},1000);
			$('#snb li').eq(1).css({'backgroundColor':'#ff0000'});
		}else{
			$('#snb li').eq(1).css({'backgroundColor':'#fff'});
		}
		
		if(scroll_top == neckBox_offset){
			$('#neckBox').stop().animate({'backgroundColor':'#09152B'},1000);
			$('#snb li').eq(2).css({'backgroundColor':'#ff0000'});
		}else{
			$('#snb li').eq(2).css({'backgroundColor':'#fff'});
		}
		if(scroll_top == elecBox_offset){
			$('#elecBox').stop().animate({'backgroundColor':'#1C1F22'},1000);
			$('#snb li').eq(3).css({'backgroundColor':'#ff0000'});
		}else{
			$('#snb li').eq(3).css({'backgroundColor':'#fff'});
		}
		if(scroll_top == hardBox_offset){
			$('#hardBox').stop().animate({'backgroundColor':'#46262E'},1000);
			$('#snb li').eq(4).css({'backgroundColor':'#ff0000'});
		}else{
			$('#snb li').eq(4).css({'backgroundColor':'#fff'});
		}		

		if(scroll_top >= neckBox_offset){
			// 첫번째 방법(delay기능을 이용하여 시간순으로 나타나기)
			// step_01
			/*
			$('#subBox').find('img:nth-of-type(1)').delay(0).fadeIn(500);
			$('#subBox').find('img:nth-of-type(2)').delay(500).fadeIn(500);
			$('#subBox').find('img:nth-of-type(3)').delay(1000).fadeIn(500);
			$('#subBox').find('img:nth-of-type(4)').delay(1500).fadeIn(500);
			$('#subBox').find('img:nth-of-type(5)').delay(2000).fadeIn(500);
			*/
			//step_02
			var neckBox = $('#neckBox'),
					neckBox_img = $('#neckBox').find('img'),
					timed = 500;
			// subBox_img.eq(?).delay(?).fadeIn(timed);
			// console.log(subBox_img.length); // html내에서 존재하는 subBox내의 이미지수량 확인
			for (var i = 0; i < neckBox_img.length; i++) {
				neckBox_img.eq(i).delay(timed*i).fadeIn(timed);
			}

			// 두번째 방법(함수 기능을 이용하여 시간순으로 나타나기)
			/*
			$('#subBox').find('img').eq(0).fadeIn(500, function() {
				$('#subBox').find('img').eq(1).fadeIn(500, function(){
					$('#subBox').find('img').eq(2).fadeIn(500, function() {						
						$('#subBox').find('img').eq(3).fadeIn(500, function() {
							$('#subBox').find('img').eq(4).fadeIn(500);
						});
					});
				});
			});
			*/
		}


	});

});