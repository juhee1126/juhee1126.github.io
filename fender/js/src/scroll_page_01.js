// scroll_page_01.js

$(function() {
	
	// 네비게이션 부드럽게 처리효과
	var nav_link = $('#snb a');
	nav_link.on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:$(this.hash).offset().top});
	});

//  기타 이미지 컬러 변경
	var Color_div = $('#mainColorBox>div')
	var g_red = $('.red');
	var g_blue = $('.blue');
	var g_black = $('.black');
	var g_green = $('.green');
	var baseUrl ="./img/"

	
	
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

		var scroll_top = $(window).scrollTop();

	    // scroll 위치에 따른 배경색상 변경

// + snb 클릭시 해당 페이지 색 변경 및 article box open
	
	
	var snb_index = $('#snb').find('li').index();
	var snb = $('#snb').find('li');
	var article_index = $('#articleBox').find('article').index();
	var article = $('#articleBox').find('article');
	
		snb.find('li').eq(0).css({backgroundColor:'#c20c0c'});
	
	$('#snb').find('li').on('click', function() {
		
		snb.css({backgroundColor:'#fff'});
		$(this).css({backgroundColor:'#c20c0c'});
		$('.hide').fadeOut(500);
		$('.li').animate({marginLeft:-50+'%'},1500);
		$('.span').animate({color:'#fff'},100);
		$('.bg_box').fadeIn(300);
		// if($('.bg_box').css({display:'none'})){
		// 	$('.bg_box').fadeIn(1000);
		// } >> guiar 수정해야함 

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
		
		if($(this).index() == 0){
			if(article.eq(4).css({display:'block'})){
				article.eq(4).stop().animate({marginTop:100+'vh'},1000)
			}
				arti.animate({marginTop:0},1500,function(){
					mT.fadeIn(500);
					mC.delay(200).fadeIn(500);
				});		
			
		}else if($(this).index() == 1){
			if(article.eq(4).css({display:'block'})){
				article.eq(4).stop().animate({marginTop:100+'vh'},1000)
			}
				arti.animate({marginTop:-win},1500,function(){
					bN.fadeIn(500);
					bT.css({display:'block'});
					bT.find('li').eq(0).animate({marginLeft:0+'%'},1000);
					bT.find('li').eq(1).delay(100).animate({marginLeft:0+'%'},1000);
					bT.find('li').eq(2).delay(300).animate({marginLeft:0+'%'},1000);
					$('.span').delay(1000).animate({color:'#111'},1000);
				});
					
			
		}else if($(this).index() == 2){
			if(article.eq(4).css({display:'block'})){
				article.eq(4).stop().animate({marginTop:100+'vh'},1000)
			}
				arti.animate({marginTop:-win*2},1500,function(){
					nT.fadeIn(500);
					nTx.fadeIn(500);
				});

		}else if($(this).index() == 3){
			if(article.eq(4).css({display:'block'})){
				article.eq(4).stop().animate({marginTop:100+'vh'},1000)
			}				
				arti.animate({marginTop:-win*3},1500,function(){
				eN.fadeIn(500);
				eT.css({display:'block'});
				eT.find('li').eq(0).animate({marginLeft:0+'%'},1500);
				eT.find('li').eq(1).delay(100).animate({marginLeft:0+'%'},1000);
				eT.find('li').eq(2).delay(300).animate({marginLeft:0+'%'},1000);
				eT.find('li').eq(3).delay(500).animate({marginLeft:0+'%'},1000);
				$('.span').delay(1000).animate({color:'#111'},1000);
				});
		}else if($(this).index() == 4){
			if(article.eq(4).css({display:'block'})){
				article.eq(4).stop().animate({marginTop:100+'vh'},1000)
			}
			$('.bg_box').fadeOut(300);
			article.stop().animate({'display':'none'},200);
			article.eq(4).css({'display':'block','marginTop:':100+'vh'});
			article.eq(4).animate({marginTop:0},1000);
		}

	});
});